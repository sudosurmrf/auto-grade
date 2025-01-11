import React, { useState } from 'react';
import { useLazyGetFileStructureQuery } from '../services/graderApi';
import FileStructureViewer from './FileStructureViewer';

export default function ProjectCard({ project }) {
  const [fetchFileStructure] = useLazyGetFileStructureQuery();
  const [fileTree, setFileTree] = useState(null);
  const [showFileTree, setShowFileTree] = useState(false);

  const handleShowFileStructure = async () => {
    if (!project.repoUrl) return alert('Enter a GitHub URL first.');
    try {
      const { data } = await fetchFileStructure(project.repoUrl);
      if (data) {
        setFileTree(data);
        setShowFileTree(true);
      }
    } catch (err) {
      alert('Failed to fetch file structure.');
    }
  };

  const handleHideFileStructure = () => {
    setShowFileTree(false);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <p>Repo URL: {project.repoUrl}</p>
      <button onClick={handleShowFileStructure}>Show File Structure</button>
      {showFileTree && fileTree && (
        <FileStructureViewer fileTree={fileTree} onClose={handleHideFileStructure} />
      )}
    </div>
  );
}
