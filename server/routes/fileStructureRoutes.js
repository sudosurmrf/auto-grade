// server/routes/fileStructureRoutes.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { parseRepoUrl } = require('../utils/parseRepoUrl');
const { store, cloneActions } = require('../store');

const app = express();
app.use(express.json());

// builds a tree based on recursive folders / files
const getFileStructure = (dir) => {
  const result = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    // skips any folder in the below line. Add more if you think of any 
    if (item.name === 'node_modules' || item.name === '.git' || item.name === 'dist') {
      continue;
    }

    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      result.push({
        name: item.name,
        type: 'directory',
        children: getFileStructure(fullPath),
      });
    } else if (item.isFile()) {
      // logic for reading the file is here
      let content = '';
      try {
        content = fs.readFileSync(fullPath, 'utf-8');
      } catch (err) {
        // if its binary or unreadable we just skip (had an issue testing with this earlier)
        content = 'Binary or non-readable file.';
      }
      result.push({
        name: item.name,
        type: 'file',
        content,
      });
    }
  }
  return result;
}

router.post('/', async (req, res) => {
  const { repoUrl, nestedFolder } = req.body;
  console.log(req.body);
  if(nestedFolder){
    store.dispatch.cloneActions?.nestedFolder({ nestedFolder });
  }
  if (!repoUrl) {
    return res.status(400).json({ error: 'repoUrl is required' });
  }
  try {
    // folder name in projects is based on the github last 2 subdirectories
    const projectName = parseRepoUrl(repoUrl);
    const projectPath = !!nestedFolder
  ? path.join(__dirname, '..', 'projects', projectName, nestedFolder)
  : path.join(__dirname, '..', 'projects', projectName);
  // const projectPath = path.join(__dirname, '..', 'projects', projectName)
    console.log(projectPath);
    if (!fs.existsSync(projectPath)) {
      return res.status(404).json({ error: 'Project folder not found. Please clone or build first.' });
    }

    // recursive fs read
    const files = getFileStructure(projectPath);
    return res.json({ files });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to retrieve file structure', details: err.message });
  }
});

module.exports = router;
