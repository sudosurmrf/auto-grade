import React, { useState } from "react";
import Tesseract from "tesseract.js";

function OcrReader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrText, setOcrText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [attendance, setAttendance] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleExtractText = async () => {
    if (!selectedFile) return;
  
    setLoading(true);
    setProgress(0);
    try {
      const { data: { text } } = await Tesseract.recognize(selectedFile, "eng", {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setProgress(Math.floor(m.progress * 100));
          }
        },
      });
      setOcrText(text);
      const lines = text.split("\n").map((line) => line.trim()).filter((line) => line !=="");

      const presentStudents = lines.map((line) => ({
        name: line, 
        status: "Present",
      }));
      setAttendance(presentStudents);
      console.log('ATTENDANCE', presentStudents);
    } catch (error) {
      console.error("Error during OCR:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="ocr">
      <h2>Auto Attendance</h2>
      <p>Upload a screenshot of the zoom participants and the program will attempt to pull the text</p>
      <div className="ocr-buttons">

      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button className="btn"  onClick={handleExtractText} disabled={!selectedFile || loading}>
        {loading ? "Processing..." : "Extract Text"}
      </button>

      {loading && (
        <div style={{ marginTop: "1rem" }}>
          <p>OCR Progress: {progress}%</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default OcrReader;
