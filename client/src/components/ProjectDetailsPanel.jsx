import React, { useState, useEffect } from 'react';

const ProjectDetailsPanel = ({
  selectedProject,
  setSelectedGrade,
  setSelectedNotes,
  handleSaveNotes,
  gradingCriteria,
  projects,
  setProjects,
}) => {
  const [localGrade, setLocalGrade] = useState(
    selectedProject.manualGrade || selectedProject.autoGradeResult?.grade || ''
  );
  const [localNotes, setLocalNotes] = useState(selectedProject.notes || '');
  const [moduleCriteria, setModuleCriteria] = useState([]);
  const [totalAssignedPoints, setTotalAssignedPoints] = useState(0);
  const [maxPointsForModule, setMaxPointsForModule] = useState(0);

  // local state to store assigned points for each criteria
  const [assignedPointsState, setAssignedPointsState] = useState({});
  
  useEffect(() => {
    // finds the criteria for each module
    const criteriaForModule = gradingCriteria.find(
      (criteria) => criteria.module === selectedProject.moduleNumber
    );
    if (criteriaForModule) {
      setModuleCriteria(criteriaForModule.criteria);
      // calcs the max pts available per module
      const maxPoints = criteriaForModule.criteria.reduce(
        (total, criteria) => total + criteria.points.max,
        0
      );
      setMaxPointsForModule(maxPoints);
    } else {
      setModuleCriteria([]);
      setMaxPointsForModule(0);
    }

    // Load saved assigned points from state or storage
    const savedAssignedPoints = localStorage.getItem(
      `assignedPoints_${selectedProject.studentId}_${selectedProject.moduleNumber}`
    );
    if (savedAssignedPoints) {
      setAssignedPointsState(JSON.parse(savedAssignedPoints));
    }
  }, [selectedProject.moduleNumber, gradingCriteria, selectedProject.studentId]);

  useEffect(() => {
    const totalPoints = moduleCriteria.reduce((total, criteria) => {
      const assignedPoints = assignedPointsState[criteria.id] || 0;
      return total + assignedPoints;
    }, 0);
    setTotalAssignedPoints(totalPoints);

    // save to local storage
    localStorage.setItem(
      `assignedPoints_${selectedProject.studentId}_${selectedProject.moduleNumber}`,
      JSON.stringify(assignedPointsState)
    );
  }, [moduleCriteria, assignedPointsState, selectedProject.moduleNumber, selectedProject.studentId]);

  const handleGradeChange = (event) => {
    const grade = event.target.value;
    setLocalGrade(grade);
    setSelectedGrade(grade);
  };

  const handleNotesChange = (event) => {
    const notes = event.target.value;
    setLocalNotes(notes);
    setSelectedNotes(notes);
  };

  const handleIncreasePoints = (id) => {
    const currentAssignedPoints = assignedPointsState[id] || 0;
    const maxPoints = moduleCriteria.find((criteria) => criteria.id === id)?.points.max || 0;
    if (totalAssignedPoints + 1 <= maxPointsForModule) {
      setAssignedPointsState((prevState) => ({
        ...prevState,
        [id]: currentAssignedPoints + 1,
      }));
    }
  };

  const handleDecreasePoints = (id) => {
    const currentAssignedPoints = assignedPointsState[id] || 0;
    if (currentAssignedPoints > 0) {
      setAssignedPointsState((prevState) => ({
        ...prevState,
        [id]: currentAssignedPoints - 1,
      }));
    }
  };
  // fn to set local state to persistent in localstorage
  const handleSaveAssignedPoints = () => {
    localStorage.setItem(
      `assignedPoints_${selectedProject.studentId}_${selectedProject.moduleNumber}`,
      JSON.stringify(assignedPointsState)
    );
    alert('Assigned points saved successfully!');
  };

  const calculateGradeDisplay = () => {
    return `${totalAssignedPoints}/${maxPointsForModule}`;
  };
  useEffect(() => {
    if (selectedProject) {
      setProjects((prevProjects) =>
        prevProjects.map((proj) =>
          proj.id === selectedProject.id
            ? {
                ...proj,
                grade: totalAssignedPoints,
              }
            : proj
        )
      );
    }
  }, [selectedProject, totalAssignedPoints, setProjects]);
  return (
    <div id="project-side-panel">
      <h2>Project Details</h2>
      <h3>{selectedProject.studentName}</h3>
      <p>Student ID: {selectedProject.studentId}</p>
      <p>Module: {selectedProject.moduleNumber}</p>
      <p>GitHub URL: {selectedProject.repoUrl}</p>
      <label>
        Grade:
        <input
          id="grade-input"
          type="text" 
          value={calculateGradeDisplay()}
          readOnly 
        />
      </label>
      <br />
      <label>
        Notes:
        <textarea value={localNotes} onChange={handleNotesChange} />
      </label>
      <button className="btn" onClick={handleSaveNotes}>Save Notes</button>
      <button className="btn" onClick={handleSaveAssignedPoints}>Save Assigned Points</button>
      <div>
        <h3>Criteria for Module {selectedProject.moduleNumber}</h3>
        <ul>
          {moduleCriteria.map((criteria) => (
            <li key={criteria.id} className="criteria-box">
              <h4>{criteria.title}</h4>
              <p>{criteria.description}</p>
              <div>
                <button id="add-btn" onClick={() => handleIncreasePoints(criteria.id)}>
                  +
                </button>
                <span>Assigned Points: {assignedPointsState[criteria.id] || 0}</span>
                <button id="sub-btn" onClick={() => handleDecreasePoints(criteria.id)}>
                  -
                </button>
              </div>
              {criteria.subGradingScale && (
                <ul>
                  {criteria.subGradingScale.map((sub) => (
                    <li key={sub.id}>{sub.description}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetailsPanel;
