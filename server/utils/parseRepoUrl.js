const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function parseRepoUrl(repoUrl) {
  // removes the .git from url names
  let hasGit = false;
  if (repoUrl.toLowerCase().endsWith('.git')) {
    hasGit = true;
    repoUrl = repoUrl.slice(0, -4);
  }
  const parts = repoUrl.split('/');

  if( parts.length > 0 && parts[parts.length -1].toLowerCase() === 'readme.md') {
    parts.pop();
  }

  if (hasGit && parts.length > 0) {
    parts[parts.length -1] = parts[parts.length -1] + '.git';
  }
  //there should be at least 5 things in the parts array, otherwise the usersname isnt there or the project name isnt there
  if (parts.length < 5) {
    throw new Error(`Invalid GitHub URL: ${repoUrl}`);
  }
  // username should be second to last subdir and the last subdir should be the proj name (i hope lol)
  const userName = parts[parts.length -2];
  const repoName = parts[parts.length -1].replace(/\.git$/, '');

  // returns the conact username + proj so we can tell whos proj is whos
  return `${userName}-${repoName}`;
}


function parseGitHubUsername(repoUrl) {
  const withoutDomain = repoUrl
    .replace(/^https?:\/\/(www\.)?github\.com\//i, '')
    .replace(/\.git$/, '');
    
  const parts = withoutDomain.split('/');
  return parts[0];
}


function adjustGitUrlUntilUsernameMatches(repoUrl, expectedUsername) {
  let endsWithGit = false;
  if (repoUrl.toLowerCase().endsWith('.git')) {
    endsWithGit = true;
    repoUrl = repoUrl.slice(0, -4);
  }
  let parts = repoUrl.split('/');

  while (parts.length > 2) {
    const secondToLast = parts[parts.length - 2];
    if (secondToLast.toLowerCase() === expectedUsername.toLowerCase()) {
      break;
    }
    parts.pop();
  }
  if (endsWithGit && parts.length > 0) {
    const lastPart = parts[parts.length - 1];

    if (!lastPart.toLowerCase().endsWith('.git')) {
      parts[parts.length - 1] = lastPart + '.git';
    }
  }
  const adjustedUrl = parts.join('/');
  return adjustedUrl;
}

async function attemptBuildOneLevelDown(basePath) {
  try {
    console.log(`attempting npm i and build at: ${basePath}`);
    runNpmInstallAndBuild(basePath);
    console.log(`built at root: ${basePath}`);
    return basePath;
  } catch (error) {
    console.error(`Build failed at root: ${basePath}, error:`, error);
  }
  const skipDirs = new Set(['node_modules', '.git', 'dist', 'build', '.vscode']); 

  let subDirs;
  try {
    //reads the base path file structures
    subDirs = fs.readdirSync(basePath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() && !skipDirs.has(dirent.name))
      .map((dirent) => dirent.name);
  } catch (readErr) {
    throw new Error(`problem reading dir: ${basePath}. Error: ${readErr.message}`);
  }

  // attempts a build at each node (each subdir it sees 1 lvl deep)
  for (const subDir of subDirs) {
    const subDirPath = path.join(basePath, subDir);
    try {
      console.log(`trying to npm i and build at: ${subDirPath}`);
      runNpmInstallAndBuild(subDirPath);
      console.log(`build successful at: ${subDirPath}`);
      return subDirPath;
    } catch (err) {
      console.error(`build failed in: ${subDirPath}`, err);
    }
  }
  //if it throws an err, the build path is at least more than 1 lvl deep
  throw new Error(`all attempts failed in ${basePath} and its direct subfolders.`);
}


function runNpmInstallAndBuild(folderPath) {
  execSync('npm install', { cwd: folderPath, stdio: 'inherit' });
  execSync('npm run build', { cwd: folderPath, stdio: 'inherit' });
}


module.exports = { parseRepoUrl, adjustGitUrlUntilUsernameMatches, parseGitHubUsername, attemptBuildOneLevelDown};
