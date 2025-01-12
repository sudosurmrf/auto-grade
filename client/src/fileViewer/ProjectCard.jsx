import React, { useState } from 'react';
import { useAddNestedMutation, useLazyGetFileStructureQuery } from '../services/graderApi';
import FileStructureViewer from './FileStructureViewer';

export default function ProjectCard({ project, nestedFolder, setNestedFolder }) {
  const [fetchFileStructure] = useLazyGetFileStructureQuery();
  const [fileTree, setFileTree] = useState(null);
  const [showFileTree, setShowFileTree] = useState(false);
  const [sendNested] = useAddNestedMutation();

  const handleShowFileStructure = async () => {
    if (!project.repoUrl) return alert('Enter a GitHub URL first.');
    try {
      const repoUrl = project.repoUrl;
      const { data } = await fetchFileStructure(repoUrl, nestedFolder);
      if (data) {
        setFileTree(data);
        setShowFileTree(true);
      }
    } catch (err) {
      alert('Failed to fetch file structure.');
    }
  };
  const handleNestedSend = async() => {
   await sendNested(nestedFolder);
   console.log(nestedFolder);
  }

  const handleHideFileStructure = () => {
    setShowFileTree(false);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <p>Repo URL: {project.repoUrl}</p>
      <button onClick={handleShowFileStructure}>Show File Structure</button>
      <button onClick={handleNestedSend}>Set nested folder</button>
      {showFileTree && fileTree && (
        <FileStructureViewer fileTree={fileTree} onClose={handleHideFileStructure} nestedFolder={nestedFolder} setNestedFolder={setNestedFolder}/>
      )}
    </div>
  );
}
