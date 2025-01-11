const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const { parseRepoUrl } = require('../utils/parseRepoUrl');
const { cloneRepository } = require('../services/cloneService');
const { autoGrade } = require('../tests/autoGrader');

exports.gradeNestedRepo = async (req, res) => {
  const { repoUrl, nestedFolder = '', moduleNumber } = req.body;
  if (!repoUrl) {
    return res.status(400).json({ error: 'repoUrl is required' });
  }
  try {
    const projectName = parseRepoUrl(repoUrl);
    const projectPath = path.join(__dirname, '..', 'projects', projectName);

    // Clone if not already cloned. Or re-clone/pull as needed:
    await cloneRepository(repoUrl, projectPath);

    // The subfolder that actually has the React/Vite code:
    const targetPath = nestedFolder
      ? path.join(projectPath, nestedFolder)
      : projectPath;

    // Example logic: if package.json exists in that nested folder, run build
    const packageJsonPath = path.join(targetPath, 'package.json');
    let previewUrl = null;

    if (fs.existsSync(packageJsonPath)) {
      // Attempt build for Vite-based React projects
      execSync('npm install', { cwd: targetPath, stdio: 'ignore' });
      execSync('npm run build', { cwd: targetPath, stdio: 'ignore' });

      // Check if there's a dist folder
      const distPath = path.join(targetPath, 'dist');
      if (fs.existsSync(distPath)) {
        previewUrl = `http://localhost:5000/static/${projectName}/${targetPath}/dist/index.html`;
        // previewUrl = `http://localhost:5000/static/${projectName}/${nestedFolder}/dist/index.html`;
      } else {
        // Fallback: maybe there's an index.html in that nested folder
        const indexHtml = path.join(targetPath, 'index.html');
        if (fs.existsSync(indexHtml)) {
          // We'll build a URL that includes nestedFolder in the path
          previewUrl = `http://localhost:5000/static/${projectName}/${targetPath}/index.html`;
          // previewUrl = `http://localhost:5000/static/${projectName}/${nestedFolder}/index.html`;
        }
      }
    }
    const gradingResult = await autoGrade(targetPath, moduleNumber);

    return res.json({
      success: gradingResult.every((c) => c.pass),
      checks: gradingResult,
      previewUrl,
    });
  } catch (err) {
    return res.status(500).json({
      error: 'Failed to grade repo with nested folder',
      details: err.message,
    });
  }
};
