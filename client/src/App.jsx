import React, { useState } from 'react';
import { useGradeRepoMutation } from './services/graderApi';

function App() {
  const [moduleNumber, setModuleNumber] = useState('1');
  const [gradeRepo, { data, isLoading, isError, error }] = useGradeRepoMutation();
  const [repoUrl, setRepoUrl] = useState('');

  const handleDownloadAndTest = async () => {
    if (!repoUrl) return;
    await gradeRepo({repoUrl, moduleNumber});
  };

  if(isLoading){
    return <p>Loading...</p>
  }
  if(isError){
    return <p>error: {error}</p>
  }

  console.log(data);

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <h1>Auto Grader</h1>

      <label>
        Assignment:
        <select
          value={assignmentNumber}
          onChange={(e) => setAssignmentNumber(e.target.value)}
          style={{ marginLeft: '10px', marginBottom: '10px' }}
        >
          <option value="1">Module 1</option>
          <option value="2">Module 2</option>
          <option value="3">Module 3</option>
        </select>
      </label>
      <input
        type="text"
        placeholder="Paste GitHub URL here..."
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleDownloadAndTest} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Download & Test'}
      </button>
      {/* {isError && (
        <div>
          Error: {error?.data?.error || error?.error || 'Something went wrong'}
        </div>
      )} */}
      {data && (
        <div style={{ marginTop: '20px' }}>
          <h3>Grading Results</h3>
          {data.success ? (
            <p style={{ color: 'green' }}>All checks passed!</p>
          ) : (
            <p style={{ color: 'red' }}>Some checks failed.</p>
          )}
          <ul>
            {data.checks?.map((check, index) => (
              <li key={index} style={{ color: check.pass ? 'green' : 'red' }}>
                {check.message}
              </li>
            ))}
          </ul>

          {data.previewUrl && (
            <>
              <h3>Preview</h3>
              <iframe
                title="project-preview"
                src={data.previewUrl}
                style={{ width: '100%', height: '1200px', border: '1px solid #ddd' }}
              ></iframe>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
