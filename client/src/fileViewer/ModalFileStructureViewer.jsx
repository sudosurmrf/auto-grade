import React, { useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './FileStructureModal.css'; 

function detectLanguage(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) return 'javascript';
  if (filePath.endsWith('.html')) return 'html';
  if (filePath.endsWith('.css')) return 'css';
  if (filePath.endsWith('.json')) return 'json';
  return 'text';
}

export default function ModalFileStructureViewer({
  visible = false,
  onClose,
  fileTree,
  nestedFolder,
  setNestedFolder,
}) {
  const [expandedPaths, setExpandedPaths] = useState({});
  const [openFiles, setOpenFiles] = useState([]);

  const toggleExpand = useCallback((path) => {
    setExpandedPaths((prev) => ({ ...prev, [path]: !prev[path] }));
  }, []);

  const openFile = useCallback((filePath, content) => {
    setOpenFiles((prev) => {
      if (prev.find((f) => f.path === filePath)) return prev;
      return [...prev, { path: filePath, content }];
    });
  }, []);

  const closeFile = useCallback((filePath) => {
    setOpenFiles((prev) => prev.filter((f) => f.path !== filePath));
  }, []);

  const renderTree = (items, basePath = '') => {
    if (!items) return null;
    return items.map((item) => {
      const currentPath = basePath ? `${basePath}/${item.name}` : item.name;
      if (item.type === 'directory') {
        const isExpanded = expandedPaths[currentPath] || false;
        return (
          <div key={currentPath}>
            <div
              className="folder-item"
              onClick={() => {
                toggleExpand(currentPath);
                if (setNestedFolder) setNestedFolder(currentPath);
              }}
            >
              {isExpanded ? '📂' : '📁'} {item.name}
            </div>
            {isExpanded && (
              <div style={{ marginLeft: '15px' }}>
                {renderTree(item.children, currentPath)}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <div
            key={currentPath}
            className="file-item"
            onClick={() => openFile(currentPath, item.content)}
          >
            📄 {item.name}
          </div>
        );
      }
    });
  };

  if (!visible) {
    return null;
  }

  if (!fileTree) {
    return null; 
  }

  return (
    <div className="file-structure-backdrop">
      <div className="file-structure-modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>

        {/* Left pane: file tree */}
        <div className="file-tree-pane">
          <h4>File Tree</h4>
          {fileTree.files && fileTree.files.length > 0 ? (
            renderTree(fileTree.files)
          ) : (
            <p>No files</p>
          )}
        </div>

        {/* Right pane: open files */}
        <div className="file-content-pane">
          {openFiles.length === 0 && (
            <div style={{ margin: 'auto', color: '#777' }}>
              <p>No files open.</p>
            </div>
          )}
          {openFiles.map((file) => (
            <div
              key={file.path}
              style={{
                marginBottom: '16px',
                border: '1px solid #444',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              {/* <div id="code-background"> */}
              <div style={{ background: '#2f3133', padding: '5px', position: 'relative' }}>
                <strong>{file.path}</strong>
                <button
                  style={{
                    float: 'right',
                    backgroundColor: 'transparent',
                    border: '1px solid #00fce2',
                    color: '#00fce2',
                    cursor: 'pointer',
                  }}
                  onClick={() => closeFile(file.path)}
                >
                  Close
                </button>
              </div>
              <div style={{ padding: '5px', maxHeight: '300px', overflowY: 'auto' }}>
                <SyntaxHighlighter language={detectLanguage(file.path)} style={atomDark}>
                  {file.content}
                </SyntaxHighlighter>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
