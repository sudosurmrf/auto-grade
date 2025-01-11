function parseRepoUrl(repoUrl) {
  // removes the .git from url names
  const stripped = repoUrl.replace(/\.git$/, '');
  // splits the urls by "/"
  const parts = stripped.split('/'); 
  //there should be at least 5 things in the parts array, otherwise the usersname isnt there or the project name isnt there
  if (parts.length < 5) {
    throw new Error(`Invalid GitHub URL: ${repoUrl}`);
  }

  // username should be second to last subdir and the last subdir should be the proj name (i hope lol)
  const userName = parts[parts.length -2];
  const repoName = parts[parts.length -1];

  // returns the conact username + proj so we can tell whos proj is whos
  return `${userName}-${repoName}`;
}

module.exports = { parseRepoUrl };
