import React, { useState } from 'react';
import { useGradeRepoMutation } from './services/graderApi';

function App() {
  const [gradeRepo, { data, isLoading, isError, error }] = useGradeRepoMutation();
  const [repoUrl, setRepoUrl] = useState('');

  const handleDownloadAndTest = async () => {
    if (!repoUrl) return;
    await gradeRepo(repoUrl);
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <h1>Auto Grader</h1>
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
      {isError && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Error: {error?.data?.error || error?.error || 'Something went wrong'}
        </div>
      )}
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
                style={{ width: '100%', height: '400px', border: '1px solid #ddd' }}
              ></iframe>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
