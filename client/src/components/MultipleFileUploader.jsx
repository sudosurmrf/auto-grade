import React, { useRef } from 'react';

export default function MultiFileUploader({ onLinksExtracted }) {
  const fileInputRef = useRef(null);

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const allLinks = [];
    const studentIds = {};

    for (const file of files) {
      if (file.type !== 'text/html') continue;
      const content = await file.text();

      // student name extraction from inside the .html file
      const match = content.match(/href\s*=\s*["']([^"']+)["']/i);
      if (match && match[1]) {
        let link = match[1].trim();
        if (!link.endsWith('.git')) {
          link += '.git';
        }
        allLinks.push(link);
      }

      // student id extraction from file name
      const fileName = file.name;
      const idMatch = fileName.match(/_(\d+)_link.html$/i);
      if (idMatch && idMatch[1]) {
        const studentId = idMatch[1];
        const nameMatch = content.match(/<h1>.*:\s*(.+?)<\/h1>/i);
        if (nameMatch && nameMatch[1]) {
          const studentName = nameMatch[1].trim();
          studentIds[studentName] = studentId;
        }
      }
    }

    if (allLinks.length > 0 && onLinksExtracted) {
      onLinksExtracted(allLinks, studentIds);
    }
    fileInputRef.current.value = '';
  };

  return (
    <div className="gh-upload" style={{ marginBottom: '16px', textWrap: 'wrap', width: '300px'}}>
      <h2>Multi Project Upload</h2>
      
        <p>
          Upload .html files with GitHub links that are found on the FSA canvas page for each assignment on the top right called "Download Submissions":
          </p>
  
      <input
        // className="btn"
        type="file"
        accept=".html"
        multiple
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
    </div>
  );
}
