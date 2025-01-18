import React, { useState } from "react";
import Papa from "papaparse";

const CohortInit = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [cohortName, setCohortName] = useState("");
  const [classId, setClassId] = useState("");
  const [programType, setProgramType] = useState("PT"); // or "FT"
  const [parsedStudents, setParsedStudents] = useState([]);
  const [jsonResult, setJsonResult] = useState(null);

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
    setParsedStudents([]);
    setJsonResult(null);
  };

  const handleParseCsv = () => {
    if (!csvFile) return;

    Papa.parse(csvFile, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const studentsArray = [];
        results.data.forEach((row) => {
          if (row.length >= 3) {
            const studentId = row[1]?.trim();    // b column
            const studentName = row[2]?.trim();  // c column
            if (studentId && studentName) {
              studentsArray.push({
                [studentName]: {
                  id: studentId,
                  present: false,
                },
              });
            }
          }
        });

        setParsedStudents(studentsArray);
      },
      error: (err) => {
        console.error("CSV Parse Error:", err);
      },
    });
  };

  const handleSetupCohort = () => {
    if (!cohortName) {
      alert("Please enter a cohort name");
      return;
    }

    const finalData = {
      data: [
        {
          [cohortName]: {
            classId,
            programType,
            students: parsedStudents,
          },
        },
      ],
    };

    setJsonResult(finalData);
  };

  return (
    <div className="cohort-container" style={{ padding: "1rem" }}>
      <h2>Create Cohort With CSV</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          <strong>Select CSV File: </strong>
          <input  type="file" accept=".csv" onChange={handleFileChange} />
        </label>
        <button className="btn"  onClick={handleParseCsv} disabled={!csvFile}>
          Parse CSV (Columns B & C)
        </button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          <strong>Cohort Name: </strong>
          <input
            type="text"
            value={cohortName}
            onChange={(e) => setCohortName(e.target.value)}
            placeholder="e.g., 2406-FTB-ET-WEB-FT"
          />
        </label>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          <strong>Class ID: </strong>
          <input
            type="text"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            placeholder="e.g., 1059"
          />
        </label>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <strong>Program Type: </strong>
        <label style={{ marginLeft: "1rem" }}>
          <input
            type="radio"
            name="programType"
            value="part-time"
            checked={programType === "PT"}
            onChange={() => setProgramType("PT")}
          />
          Part-Time
        </label>
        <label style={{ marginLeft: "1rem" }}>
          <input
            type="radio"
            name="programType"
            value="FT"
            checked={programType === "FT"}
            onChange={() => setProgramType("FT")}
          />
          Full-Time
        </label>
      </div>

      <button  className="btn" onClick={handleSetupCohort} disabled={parsedStudents.length === 0}>
        Setup Cohort
      </button>

      {parsedStudents.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h4>Parsed Students (Preview)</h4>
          <pre>{JSON.stringify(parsedStudents, null, 2)}</pre>
        </div>
      )}

      {jsonResult && (
        <div style={{ marginTop: "1rem" }}>
          <h4>Final Data Structure</h4>
          <pre>{JSON.stringify(jsonResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CohortInit;
