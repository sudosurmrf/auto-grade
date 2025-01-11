const { exec } = require('child_process');
const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const { store, cloneActions } = require('../store');
const {
  cloneStarted,
  cloneSuccess,
  cloneError,
  downloadStarted,
  downloadSuccess,
  downloadError,
} = cloneActions;

const deleteFolderRecursive = (folderPath) => {
  if(fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const currentPath = path.join(folderPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteFolderRecursive(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}
//this tries to clone using simple-git
exports.cloneRepository = (repoUrl, destination) => {
  return new Promise(async (resolve, reject) => {
    store.dispatch(cloneStarted({ repoUrl, destination }));
    try {
      deleteFolderRecursive(destination);
      const git = simpleGit();
      await git.clone(repoUrl, destination);
      // on success dispatch the clone action
      store.dispatch(cloneSuccess({ repoUrl, destination }));
      resolve();
    } catch (err) {
      // if fail, dispatch error action
      store.dispatch(cloneError(err.message));
      reject(err);
    }
  });
};

//downloads the zip as a fallback
exports.downloadRepositoryZip = async (repoUrl, destination) => {
 //dispatch the download zip action
  store.dispatch(downloadStarted({ repoUrl, destination }));

  try {
    deleteFolderRecursive(destination);
    // structure of zip url should be: https://codeload.github.com/<owner>/<repo>/zip/refs/heads/main
    const zipUrl = repoUrl
      .replace('https://github.com/', 'https://codeload.github.com/')
      .concat('/zip/refs/heads/main');

    //fetches the zip as an array buffer
    const response = await fetch(zipUrl);
    if (!response.ok) {
      throw new Error(`failed to download zip. Status: ${response.status}`);
    }
    const buffer = await response.arrayBuffer();

    // unzips using jszip
    const zip = await JSZip.loadAsync(buffer);
    // the ZIP root folder is "<repo>-main/" or "<repo>-master/"
    const zipFolderName = Object.keys(zip.files)[0];

    // extract the files 
    await Promise.all(
      Object.keys(zip.files).map(async (filename) => {
        const fileObj = zip.files[filename];
        if (!fileObj.dir) {
          const fileData = await fileObj.async('nodebuffer');
          const targetPath = path.join(
            destination,
            filename.replace(zipFolderName, '')
          );
          // Ensure folder exists
          fs.mkdirSync(path.dirname(targetPath), { recursive: true });
          // Write file
          fs.writeFileSync(targetPath, fileData);
        }
      })
    );

    // on success dispatch the download action
    store.dispatch(downloadSuccess({ repoUrl, destination }));
  } catch (err) {
    // on error dispatch the error action
    store.dispatch(downloadError(err.message));
    throw err;
  }
};
