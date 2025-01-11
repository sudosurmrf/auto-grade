const moduleCriteria = {
  '3': [
    { id: 'hasIndexHtml', description: 'Project must include index.html' },
    { id: 'hasStylesCss', description: 'Project must include styles.css' },
  ],
  '4': [
    { id: 'hasIndexHtml', description: 'Project must include index.html' },
    { id: 'hasJavascript', description: 'Project must include a main.js file' },
  ],
  '5': [
    { id: 'hasReactApp', description: 'Project must be a React project' },
  ],
};

module.exports = moduleCriteria;