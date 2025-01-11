import React, { useRef } from 'react';

export default function MultiFileUploader({ onLinksExtracted }) {
  const fileInputRef = useRef(null);

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const allLinks = [];

    for (const file of files) {
      if (file.type !== 'text/html') continue;
      const content = await file.text();
    
      //searches for a href for the link
      const match = content.match(/href\s*=\s*["']([^"']+)["']/i);
      if (match && match[1]) {
        let link = match[1].trim();
        if(!link.endsWith('.git')){
          link += '.git';
        }
        allLinks.push(link);
      }
    }

    if (allLinks.length > 0 && onLinksExtracted) {
      onLinksExtracted(allLinks);
    }
    fileInputRef.current.value = '';
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ marginRight: '8px', fontWeight: 'bold' }}>
        Upload .html files with GitHub links:
      </label>
      <input
        type="file"
        accept=".html"
        multiple
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
    </div>
  );
}
