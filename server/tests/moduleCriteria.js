const moduleCriteria = {
  '1': [
    { id: 'hasIndexHtml', description: 'Project must include index.html' },
    { id: 'hasStylesCss', description: 'Project must include styles.css' },
  ],
  '2': [
    { id: 'hasIndexHtml', description: 'Project must include index.html' },
    { id: 'hasJavascript', description: 'Project must include a main.js file' },
  ],
  '3': [
    { id: 'hasReactApp', description: 'Project must be a React project' },
  ],
};

export default moduleCriteria;