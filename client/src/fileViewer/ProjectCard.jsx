import React, { useState } from 'react';
import { useAddNestedMutation, useLazyGetFileStructureQuery, useUpdateGradesMutation } from '../services/graderApi';
import InlineFileStructureViewer from './InlineFileStructureViewer';
import ModalFileStructureViewer from './ModalFileStructureViewer';


export default function ProjectCard({ project, nestedFolder, setNestedFolder }) {
  const [fetchFileStructure] = useLazyGetFileStructureQuery();
  const [updateGrades] = useUpdateGradesMutation();
  const [fileTree, setFileTree] = useState(null);
  const [showFileTreeInline, setShowFileTreeInline] = useState(false);
  const [showFileTreeModal, setShowFileTreeModal] = useState(false);
  

  const [sendNested] = useAddNestedMutation();


  const handleShowFileStructure = async () => {
    if (!project.repoUrl) {
      alert('Please enter a GitHub URL first.');
      return;
    }
    try {
      const { data } = await fetchFileStructure(project.repoUrl, nestedFolder);
      if (data) {
        setFileTree(data);
        setShowFileTreeInline(true);
      }
    } catch (err) {
      alert('Failed to fetch file structure.');
    }
  };

  const handleGradeUpdate = async (project) => {
    console.log('PROJ', project);
    try{
      await updateGrades(project);

    }catch(err){
      console.log('couldnt execute the bot commands', err);
    }
  }

  const handleShowModal = () => {
    if (!fileTree) {
      alert('No file tree yet—fetch it first!');
      return;
    }
    setShowFileTreeModal(true);
  };

  const handleHideFileStructure = () => {
    setShowFileTreeInline(false);
  };

  const handleHideModal = () => {
    setShowFileTreeModal(false);
  };

  const handleNestedSend = async () => {
    if (!nestedFolder) {
      alert('No nested folder selected.');
      return;
    }
    await sendNested(nestedFolder);
    console.log('Nested folder sent:', nestedFolder);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
      <p>Repo URL: {project.repoUrl}</p>
      <button className="btn" onClick={handleShowFileStructure}>Show File Structure (Inline)</button>
      <button className="btn" onClick={handleShowModal} style={{ marginLeft: '10px' }}>
        Expand Full View (Modal)
      </button>
      <button className="btn" onClick={handleNestedSend} style={{ marginLeft: '10px' }}>
        Set Nested Folder
      </button>
      <button className="btn" onClick={() => handleGradeUpdate(project)}>UPDATE INDIVIDUAL GRADE</button>

      {/* Inline file structure viewer */}
      {showFileTreeInline && fileTree && (
        <InlineFileStructureViewer
          fileTree={fileTree}
          onClose={handleHideFileStructure}
          nestedFolder={nestedFolder}
          setNestedFolder={setNestedFolder}
        />
      )}

      {/* Modal version (semi-transparent overlay) */}
      <ModalFileStructureViewer
        visible={showFileTreeModal}
        onClose={handleHideModal}
        fileTree={fileTree}
        nestedFolder={nestedFolder}
        setNestedFolder={setNestedFolder}
      />
    </div>
  );
}
