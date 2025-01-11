//this is just a template file. will change this depending on the assignment
const fs = require('fs');
const path = require('path');

exports.autoGrade = async (projectPath) => {
  const checks = [];
  
  // 1. make sure index.html exists 
  const indexExists = fs.existsSync(path.join(projectPath, 'index.html'));
  checks.push({
    message: 'index.html exists',
    pass: indexExists,
  });

  // 2. checks css styling 
  const cssExists = fs.existsSync(path.join(projectPath, 'styles.css'));
  checks.push({
    message: 'styles.css exists',
    pass: cssExists,
  });

  // 3. parse html for specific elements
  if (indexExists) {
    const indexContent = fs.readFileSync(path.join(projectPath, 'index.html'), 'utf8');
    const hasH1 = indexContent.includes('<h1>');
    checks.push({
      message: 'index.html includes an <h1> tag',
      pass: hasH1,
    });
  }

  // 4. check if dist folder, which means react proj. 
  const distExists = fs.existsSync(path.join(projectPath, 'dist'));
  checks.push({
    message: 'dist folder (if React project) exists',
    pass: distExists,
  });

  // add more checks below here later when I figure out what logic to do
  return checks;
};
