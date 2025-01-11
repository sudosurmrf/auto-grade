const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { cloneRepository, downloadRepositoryZip } = require('../services/cloneService');
const { autoGrade } = require('../tests/autoGrader');

exports.gradeRepo = async (req, res) => {
  const { repoUrl } = req.body;
  if (!repoUrl) {
    return res.status(400).json({ error: 'repoUrl is required' });
  }

  try {
    const projectId = uuidv4();
    const projectPath = path.join(__dirname, '..', 'projects', projectId);
    await cloneRepository(repoUrl, projectPath);

    //   could use a zip folder if needed if github doesn't work. (below is the code needed)
    // await downloadRepositoryZip(repoUrl, projectPath);

    //this will check to make sure we are in a react project or not.
    const packageJsonPath = path.join(projectPath, 'package.json');
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
      const { execSync } = require('child_process');
      execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
      execSync('npm run build', { cwd: projectPath, stdio: 'inherit' });

      // since vite outputs to 'dist' we need to connect the virtual path to it below
      const distPath = path.join(projectPath, 'dist');
      if (fs.existsSync(distPath)) {
        //and then serve it as an html file over express.
        previewUrl = `http://localhost:3000/static/${projectId}/dist/index.html`;
      }
    } else {
      // else because if its not react, its either html, css, js or some variation of that. 
      const indexPath = path.join(projectPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        previewUrl = `http://localhost:3000/static/${projectId}/index.html`;
      }
    }
    // this is where the autograding part will go when I figure out how to make this lol.
    const gradingResult = await autoGrade(projectPath);
    // return the result of the grade + a link to preview. 
    return res.json({
      success: gradingResult.every((check) => check.pass),
      checks: gradingResult,
      previewUrl,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
};
