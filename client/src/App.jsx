import React, { useState, useEffect } from 'react';
import { useGradeRepoMutation, useLazyGetFileStructureQuery } from './services/graderApi';
import ProjectCard from './fileViewer/ProjectCard';
import MultiFileUploader from './components/MultipleFileUploader';
import { useDeleteProjectsMutation } from './services/graderApi';
import ProjectDetailsPanel from './components/ProjectDetailsPanel';
import GradingCriteria from './grading-criteria/GradingCriteria';
import './App.css'

const App = () => {
  const [nestedFolder, setNestedFolder] = useState('');
  //allows up to 50 proj currently (memory intensive, so be careful)
  const [projects, setProjects] = useState(() =>
    Array.from({ length: 3 }, (_, i) => ({
      id: String(i),
      moduleNumber: '3',
      repoUrl: '',
      autoGradeResult: null,
      fileStructure: null,
      manualGrade: null,
      gradingCriteria: [] 
    }))
  );
  const [deleteProjects] = useDeleteProjectsMutation();
  const [allGradingComplete, setAllGradingComplete] = useState(false);
  const [gradeRepo] = useGradeRepoMutation(); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedNotes, setSelectedNotes] = useState('');

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

  const associateGradingCriteria = () => {
    const updatedProjects = projects.map(project => {
      const moduleNumber = project.moduleNumber;
      //finds the grading criteria for the module
      const criteriaForModule = GradingCriteria.find(criteria => criteria.module === `Module ${moduleNumber}`);
      if (criteriaForModule) {
        return {
          ...project,
          gradingCriteria: criteriaForModule.criteria
        };
      }
      return project;
    });

    setProjects(updatedProjects);
  };

  useEffect(() => {
    associateGradingCriteria();
  }, []);


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
        nestedFolder,
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

  const handleLinkExtract = async (links, studentIds) => {
    const updated = [...projects];
  
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const studentName = Object.keys(studentIds)[i] || 'error find student';
      const studentId = studentIds[studentName];
  
      const emptyIdx = updated.findIndex((p) => !p.repoUrl);
  
      if (emptyIdx >= 0) {
        updated[emptyIdx].repoUrl = link;
        updated[emptyIdx].studentName = studentName;
        updated[emptyIdx].studentId = studentId; 
      } else {
        if (updated.length < 50) {
          updated.push({
            id: String(updated.length),
            repoUrl: link,
            studentName,
            studentId, 
          });
        } else {
          alert('Max 50 projects reached. Some links are ignored.');
          break;
        }
      }
    }
  
    setProjects(updated);
  };
  

  const clearProjectData = async() => {
    try {
      await deleteProjects();
      alert('All project data has been deleted');
    } catch(err){
      console.log('couldnt delete the projects', err);
    }
  }



  const handleAutoGradeAll = async () => {
    setAllGradingComplete(false);
  
    let newProjects = [...projects];
    let successfulProjects = [];
    let failedProjects = [];
  
    for (let i = 0; i < newProjects.length; i++) {
      const project = newProjects[i];
  
      project.status = 'charging';     
      project.isCharging = true;      
      project.failBlink = false;        
      setProjects([...newProjects]);
  
      if (!project.repoUrl) {
        console.warn('Skipping project with no repoUrl:', project);
  
        
        project.status = 'fail';
        project.isCharging = false;
        project.failBlink = true;
        project.autoGradeResult = {
          success: false,
          checks: [],
          error: 'No repo URL provided',
        };

        setTimeout(() => {
          project.failBlink = false;
          setProjects([...newProjects]);
        }, 1000);
  
        failedProjects.push({ ...project });
        continue;
      }
  
      try {
        const { data } = await gradeRepo({
          repoUrl: project.repoUrl,
          nestedFolder,
          moduleNumber: project.moduleNumber,
        });
  
        if (!data) {
          console.warn('No data returned for project:', project.repoUrl);
  
          project.status = 'fail';
          project.isCharging = false;
          project.failBlink = true;
          project.autoGradeResult = {
            success: false,
            checks: [],
            error: 'No data returned',
          };
          setProjects([...newProjects]);
  
          setTimeout(() => {
            project.failBlink = false;
            setProjects([...newProjects]);
          }, 1000);
  
          failedProjects.push({ ...project });
          continue;
        }
    
        if (data.green || data.builtAtRoot || data.success) {
          // data.success = true;
          data.checks = data.checks || [];
          data.checks.push({
            pass: true,
            message: 'Forced pass: built at root or success/previewUrl found',
          });
        }
  
        if (data.success) {
          project.status = 'success';
          project.isCharging = false;
          project.autoGradeResult = data;
          successfulProjects.push({ ...project });
        } else {
    
          project.status = 'fail';
          project.isCharging = false;
          project.failBlink = true;
          project.autoGradeResult = data;
          setProjects([...newProjects]);
  
    
          setTimeout(() => {
            project.failBlink = false;
            setProjects([...newProjects]);
          }, 1000);
  
          failedProjects.push({ ...project });
        }
  
        setProjects([...newProjects]);
      } catch (error) {
        console.error('Error grading project:', project.repoUrl, error);
  

        project.status = 'fail';
        project.isCharging = false;
        project.failBlink = true;
        project.autoGradeResult = {
          success: false,
          checks: [],
          error: error.message || 'Unknown error',
        };
        setProjects([...newProjects]);
  
        setTimeout(() => {
          project.failBlink = false;
          setProjects([...newProjects]);
        }, 1000);
  
        failedProjects.push({ ...project });
      }
    }
  
    newProjects = [...successfulProjects, ...failedProjects];
    setProjects(newProjects);
  
    setAllGradingComplete(true);
  };
  const handleProjectCardClick = (project) => {
    setSelectedProject(project);
    setSelectedGrade(project.manualGrade || (project.autoGradeResult?.grade || null));
    setSelectedNotes(project.notes || '');
  };

  const handleSaveNotes = () => {
    const updatedProjects = projects.map((proj) =>
      proj.id === selectedProject.id
        ? {
            ...proj,
            manualGrade: selectedGrade,
            notes: selectedNotes,
          }
        : proj
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">TA Too EZ</h1>
      <p className="app-subtitle">
        Enter up to 50 GitHub links. Let me know if there are features you want added.
      </p>

      <div>
        <button onClick={clearProjectData} className="btn">
          Clear All Project Data
        </button>
        <button onClick={handleAutoGradeAll} className="btn">
          Grade All / Render All
        </button>
      </div>

      <MultiFileUploader onLinksExtracted={handleLinkExtract} />

      <div className="projects-grid">
        {projects.map((project, index) => {
          const {
            autoGradeResult,
            status = '',
            failBlink = false,
            isCharging,
          } = project;
          const shouldShowGreen =
            status === 'charging' ||
            (status === 'success' && !allGradingComplete);

          const shouldShowRed = status === 'fail';
          const previewUrl = autoGradeResult?.previewUrl || null;

          return (
            <div
            className="project-card"
            key={project.id}
            onClick={() => handleProjectCardClick(project)}
          >
            {isCharging && (
              <div className={`charge-overlay ${project.failBlink ? 'fail-blink' : ''}`} />
            )}
        
            {(shouldShowGreen || shouldShowRed) && (
              <div
                className={`charge-overlay ${
                  shouldShowGreen ? 'charging-green' : 'charging-red'
                } ${failBlink ? 'fail-blink' : ''}`}
              />
            )}
        
            <h1>{project.studentName}</h1>
            <h3>{project.studentId}</h3>
        
            <label>Module:</label>
            <select
              value={project.moduleNumber}
              onChange={(e) => handleModuleChange(index, e.target.value)}
            >
              {GradingCriteria.map(criteria => (
                <option key={criteria.module} value={criteria.module.replace('Module ', '')}>
                  {criteria.module}
                </option>
              ))}
            </select>
        
            <label>GitHub URL:</label>
            <input
              type="text"
              value={project.repoUrl}
              onChange={(e) => handleRepoUrlChange(index, e.target.value)}
            />
        
            <button onClick={() => handleAutoGrade(index)} className="btn">
              Render
            </button>
            {/* <button onClick={() => handleManualGrade(index)} className="btn">
              Manual Grade
            </button> */}
      
            {/* {project.manualGrade !== null && (
              <div style={{ marginTop: '10px' }}>
                <strong>Manual Grade: </strong> {project.manualGrade}
              </div>
            )} */}
            {autoGradeResult && (
              <div className="auto-grade-results">
                <h4>Auto-Grade Results</h4>
                {autoGradeResult.success ? (
                  <p className="pass">All checks passed!</p>
                ) : (
                  <p className="fail">Some checks failed.</p>
                )}
                <ul>
                  {autoGradeResult.checks?.map((check, i) => (
                    <li key={i} className={check.pass ? 'pass' : 'fail'}>
                      {check.message}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {previewUrl && (
              <div className="iframe-container">
                <h4>Preview</h4>
                <iframe
                  title={`preview-${project.id}`}
                  src={previewUrl}
                  className="preview-iframe"
                />
              </div>
            )}
            <ProjectCard
              project={project}
              nestedFolder={nestedFolder}
              setNestedFolder={setNestedFolder}
            />
          </div>
        );
        })}
      </div>

      {projects.length < 50 && (
        <button onClick={handleAddProject} className="btn add-project-btn">
          Add Another Project
        </button>
      )}

      {/* Right panel for detailed project view */}
      {selectedProject && (
        <ProjectDetailsPanel
          id="project-side-panel"
          gradingCriteria={GradingCriteria}
          selectedProject={selectedProject}
          setSelectedGrade={setSelectedGrade}
          setSelectedNotes={setSelectedNotes}
          handleSaveNotes={handleSaveNotes}
        />
      )}
    </div>
  );
};


export default App;
