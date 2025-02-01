import React, { useState } from 'react';
import { useAddNestedMutation, useLazyGetFileStructureQuery, useUpdateGradesMutation } from '../services/graderApi';
import InlineFileStructureViewer from './InlineFileStructureViewer';
import ModalFileStructureViewer from './ModalFileStructureViewer';
import '../coolButtons.css';


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
    <>
    <div className="inner-card">
      
      <a className="btn" onClick={handleShowFileStructure}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Show File Structure (Inline)
      </a>

       <a className="btn" onClick={handleShowModal}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Expand Full View (Modal)
      </a>

      <a className="btn" onClick={handleNestedSend}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Set Nested Folder
      </a>

      <a className="btn" onClick={() => handleGradeUpdate(project)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          UPDATE INDIVIDUAL GRADE
      </a>

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
        </>
  );
}
