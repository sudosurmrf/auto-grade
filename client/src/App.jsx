import React, { useState } from 'react';
import { useGradeRepoMutation, useLazyGetFileStructureQuery } from './services/graderApi';

function App() {
  //allows up to 50 proj currently (memory intensive, so be careful)
  const [projects, setProjects] = useState(() =>
    Array.from({ length: 3 }, (_, i) => ({
      id: String(i),
      moduleNumber: '3',
      repoUrl: '',
      autoGradeResult: null,
      fileStructure: null, 
      manualGrade: null,
    }))
  );

  const [gradeRepo] = useGradeRepoMutation(); 
  const [fetchFileStructure] = useLazyGetFileStructureQuery();

  //logic to handle the repoUrl or the moduleNumber change
  const handleRepoUrlChange = (index, newUrl) => {
    setProjects((prev) =>
      prev.map((proj, i) => (i === index ? { ...proj, repoUrl: newUrl } : proj))
    );
  };

  const handleModuleChange = (index, newModule) => {
    setProjects((prev) =>
      prev.map((proj, i) =>
        i === index ? { ...proj, moduleNumber: newModule } : proj
      )
    );
  };

  // auto grade doesn't currently work. I'll fix it and add more logic to it at a later point. I realized after I started that the autograde is a bit more complex and I need to research a beter way to handle it.
  const handleAutoGrade = async (index) => {
    const project = projects[index];
    if (!project.repoUrl) {
      alert('Please enter a GitHub URL first.');
      return;
    }

    try {
      const { data } = await gradeRepo({
        repoUrl: project.repoUrl,
        moduleNumber: project.moduleNumber,
      });
      if (data) {
        setProjects((prev) =>
          prev.map((p, i) => (i === index ? { ...p, autoGradeResult: data } : p))
        );
      }
    } catch (error) {
      console.error(error);
      alert('Error grading the repo.');
    }
  };

  // logic to handle showing file structure 
  const handleShowFileStructure = async (index) => {
    const project = projects[index];
    if (!project.repoUrl) {
      alert('Please enter a GitHub URL first.');
      return;
    }

    try {
      const { data } = await fetchFileStructure(project.repoUrl);
      if (data) {
        setProjects((prev) =>
          prev.map((p, i) => (i === index ? { ...p, fileStructure: data } : p))
        );
      }
    } catch (error) {
      console.error(error);
      alert('Failed to fetch file structure.');
    }
  };

  // set a manual grade using this logic. Will connect it later to selenium for auto inputs. 
  const handleManualGrade = (index) => {
    const grade = prompt('Enter a grade (0-100) for this project:');
    if (grade === null) return;
    const numericGrade = Number(grade);
    if (isNaN(numericGrade)) {
      alert('Please enter a valid number.');
      return;
    }
    setProjects((prev) =>
      prev.map((p, i) =>
        i === index ? { ...p, manualGrade: numericGrade } : p
      )
    );
  };

  // fs render
  const renderFileStructure = (fileStructure) => {
    if (!fileStructure) return null;
    return (
      <div style={{ marginTop: '8px', border: '1px solid #ccc', padding: '8px' }}>
        <h4>File Structure:</h4>
        {fileStructure.files?.map((file, idx) => (
          <div key={idx} style={{ marginBottom: '8px' }}>
            <strong>{file.path}</strong>
            <pre
              style={{
                background: '#f5f5f5',
                padding: '8px',
                maxHeight: '150px',
                overflow: 'auto',
                border: '1px solid #ddd',
                marginTop: '4px',
              }}
            >
{file.content}
            </pre>
          </div>
        ))}
      </div>
    );
  };

  // adds more projects, but again, be careful going too high. Even 50 might be too much depending on your pc
  const handleAddProject = () => {
    if (projects.length >= 50) {
      alert('Maximum 50 projects reached');
      return;
    }
    setProjects((prev) => [
      ...prev,
      {
        id: String(prev.length),
        moduleNumber: '1',
        repoUrl: '',
        autoGradeResult: null,
        fileStructure: null,
        manualGrade: null,
      },
    ]);
  };

  return (
    <div style={{ maxWidth: '1800px', margin: '0 auto', padding: '20px' }}>
      <h1>TA Too EZ</h1>
      <p>Enter up to 50 GitHub links - let me know if there are features you want added</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        {projects.map((project, index) => {
          const { autoGradeResult } = project;
          const previewUrl = autoGradeResult?.previewUrl || null;
          return (
            <div
              key={project.id}
              style={{ border: '1px solid #ccc', padding: '10px' }}
            >
              <label style={{ display: 'block', marginBottom: '5px' }}>
                Module:
              </label>
              <select
                value={project.moduleNumber}
                onChange={(e) => handleModuleChange(index, e.target.value)}
                style={{ marginBottom: '10px' }}
              >
                {/* will add more later on*/}
                <option value="3">Module 3</option>
                <option value="4">Module 4</option>
                <option value="5">Module 5</option>
              </select>

              <label style={{ display: 'block', marginBottom: '5px' }}>
                GitHub URL:
              </label>
              <input
                type="text"
                value={project.repoUrl}
                onChange={(e) => handleRepoUrlChange(index, e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
              />

              <button
                onClick={() => handleAutoGrade(index)}
                style={{ marginRight: '10px' }}
              >
                Auto Grade
              </button>

              <button
                onClick={() => handleShowFileStructure(index)}
                style={{ marginRight: '10px' }}
              >
                Show File Structure
              </button>

              <button onClick={() => handleManualGrade(index)}>
                Manual Grade
              </button>

              {project.manualGrade !== null && (
                <div style={{ marginTop: '10px' }}>
                  <strong>Manual Grade:</strong> {project.manualGrade}
                </div>
              )}

              {/* left over code from my first iteration, just shows if auto pass / fail per module based on average grade */}
              {autoGradeResult && (
                <div style={{ marginTop: '10px' }}>
                  <h4>Auto-Grade Results</h4>
                  {autoGradeResult.success ? (
                    <p style={{ color: 'green' }}>All checks passed!</p>
                  ) : (
                    <p style={{ color: 'red' }}>Some checks failed.</p>
                  )}
                  <ul>
                    {autoGradeResult.checks?.map((check, i) => (
                      <li
                        key={i}
                        style={{ color: check.pass ? 'green' : 'red' }}
                      >
                        {check.message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {renderFileStructure(project.fileStructure)}

              {/* this is for rendering each proj in an iframe */}
              {previewUrl && (
                <div style={{ marginTop: '10px' }}>
                  <h4>Preview</h4>
                  <iframe
                    title={`preview-${project.id}`}
                    src={previewUrl}
                    style={{
                      width: '100%',
                      height: '300px',
                      border: '1px solid #ccc',
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {projects.length < 50 && (
        <button onClick={handleAddProject} style={{ marginTop: '16px' }}>
          Add Another Project
        </button>
      )}
    </div>
  );
}

export default App;
