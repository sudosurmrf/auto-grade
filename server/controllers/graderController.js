const path = require('path');
const fs = require('fs');
const { downloadRepositoryZip, safeCloneRepo} = require('../services/cloneService');
const { autoGrade } = require('../tests/autoGrader');
const { parseRepoUrl } = require('../utils/parseRepoUrl');
const { attemptBuildOneLevelDown } = require('../utils/parseRepoUrl');
const express = require('express');
const app = express();
const { store, cloneActions } = require('../store');

app.use(express.json());

exports.gradeRepo = async (req, res) => {
  const { repoUrl, moduleNumber } = req.body;
  const {nestedFolder} = store.getState().clone;
  if (!repoUrl) {
    return res.status(400).json({ error: 'repoUrl is required' });
  }
  try {
    const projectName = parseRepoUrl(repoUrl);
    
    const projectPath = path.join(__dirname, '..', 'projects', projectName);
    await safeCloneRepo(repoUrl, projectPath);

    //   could use a zip folder if needed if github doesn't work. (below is the code needed)
    // await downloadRepositoryZip(repoUrl, projectPath);
    const concatNestedPath = nestedFolder 
    ? path.join(projectPath, nestedFolder)
    : projectPath;

    const buildPath = await attemptBuildOneLevelDown(concatNestedPath);
    //this will check to make sure we are in a react project or not.

    const relativeBuildDir = path.relative(projectPath, buildPath);

    const packageJsonPath = path.join(buildPath, 'package.json');
    let isViteProject = false;
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = require(packageJsonPath);
      if (
        (packageJson.devDependencies && packageJson.devDependencies.vite) ||
        (packageJson.scripts && packageJson.scripts.dev && packageJson.scripts.dev.includes('vite'))
      ) {
        isViteProject = true;
      }
    }

    let previewUrl = null;
    if (isViteProject) {
      const distPath = path.join(buildPath, 'dist');
      if (fs.existsSync(distPath)) {
        //and then serve it as an html file over express.
        const staticDistPath = path.join(projectName, relativeBuildDir, 'dist', 'index.html');
        previewUrl = `http://localhost:5000/static/${staticDistPath}`;
      }
      // had to add this line because the repo paths are not relative to this project, but instead relative to their own projects. 
      const indexFilePath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexFilePath)) {
        let indexContent = fs.readFileSync(indexFilePath, 'utf-8');
        indexContent = indexContent.replace(/href="\/assets\//g, 'href="./assets/');
        indexContent = indexContent.replace(/src="\/assets\//g, 'src="./assets/');
        fs.writeFileSync(indexFilePath, indexContent, 'utf-8');
      }

    } else {
      // else because if its not react, its either html, css, js or some variation of that. 
      const indexPath = path.join(buildPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        const staticIndexPath = path.join(projectName, relativeBuildDir, 'index.html');
        previewUrl = `http://localhost:5000/static/${staticIndexPath}`;
      }
    }
    // this is where the autograding part will go when I figure out how to make this lol.
    const gradingResult = await autoGrade(buildPath, moduleNumber || '3');
    // return the result of the grade + a link to preview. 
    const success = gradingResult.every((check) => check.pass);

    store.dispatch(cloneActions.nestedFolderReset());

    return res.json({
      success,
      checks: gradingResult,
      previewUrl,
      // green: !!previewUrl,

    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};
