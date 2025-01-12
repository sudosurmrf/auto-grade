const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { deleteFolderRecursive } = require('../services/cloneService'); 
const { store, cloneActions } = require('../store');

//delete-projects
router.post('/', async (req, res) => {
  try {
    const projectsDir = path.join(__dirname, '..', 'projects');

    // deletes all under it except for the folder itself
    fs.readdirSync(projectsDir).forEach((entry) => {
      const entryPath = path.join(projectsDir, entry);
      if (fs.lstatSync(entryPath).isDirectory()) {
        deleteFolderRecursive(entryPath); // deletes each subfolder entirely
      } else {
        fs.unlinkSync(entryPath); // deletes file
      }
    });
    
    // just for logging
    store.dispatch(cloneActions.folderDelete({ folderPath: projectsDir }));

    return res.json({ success: true });
  } catch (error) {
    console.error('Error deleting folder contents:', error);
    return res.status(500).json({
      error: 'Failed to delete folder contents',
      details: error.message,
    });
  }
});

module.exports = router;
