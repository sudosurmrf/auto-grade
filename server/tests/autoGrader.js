//this is just a template file. will change this depending on the assignment
const fs = require('fs');
const path = require('path');
const moduleCriteria =  require('./moduleCriteria.js');

exports.autoGrade = async (projectPath, moduleNumber) => {
  const checks = [];
  const criteria = moduleCriteria[moduleNumber] || [];
  
//switch case to alternate between criteria
for (const criterion of criteria) {
  switch (criterion.id) {
    case 'hasIndexHtml':
      checks.push({
        message: 'index.html exists',
        pass: fs.existsSync(path.join(projectPath, 'index.html')),
      });
      break;
    // checks for css file
    case 'hasStylesCss':
      checks.push({
        message: 'styles.css exists',
        pass: fs.existsSync(path.join(projectPath, 'index.css' || 'App.css' || 'styles.css')),
      });
      break;

    case 'hasJavascript':
      // checks if js file
      checks.push({
        message: 'JavaScript file (main.js) exists',
        pass: fs.existsSync(path.join(projectPath, 'main.js' || 'index.js' || 'script.js')),
      });
      break;

    case 'hasReactApp':
      // checks if react dependencies
      const packageJsonPath = path.join(projectPath, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = require(packageJsonPath);
        checks.push({
          message: 'React is a dependency',
          pass: Boolean(packageJson.dependencies?.react),
        });
      } else {
        checks.push({
          message: 'React is a dependency',
          pass: false,
        });
      }
      break;
 // add more checks below here later when I figure out what logic to do

    default:
      checks.push({
        message: `Unknown criterion: ${criterion.id}`,
        pass: false,
      });
      break;
  }
}

  return checks;
};
