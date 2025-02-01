import React, { useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function detectLanguage(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) return 'javascript';
  if (filePath.endsWith('.html')) return 'html';
  if (filePath.endsWith('.css')) return 'css';
  if (filePath.endsWith('.json')) return 'json';
  return 'text';
}

export default function FileStructureViewer({
  fileTree,
  onClose,
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
          <div key={currentPath} style={{ marginLeft: '15px' }}>
            <div
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
              onClick={() => {
                toggleExpand(currentPath);
                if (setNestedFolder) setNestedFolder(currentPath)
                  console.log(nestedFolder || 'first');
              }}
            >
              {isExpanded ? '📂' : '📁'} {item.name}
            </div>
            {isExpanded && renderTree(item.children, currentPath)}
          </div>
        );
      } else if (item.type === 'file') {
        return (
          <div
            key={currentPath}
            style={{ marginLeft: '30px', cursor: 'pointer' }}
            onClick={() => openFile(currentPath, item.content)}
          >
            📄 {item.name}
          </div>
        );
      }
      return null;
    });
  };

  // If no file tree
  if (!fileTree) {
    return <p>No file tree available</p>;
  }

  return (
    <div style={{ border: '1px solid #ccc', height: '600px', marginTop: '10px' }}>
      {/* Left side: file structure */}
      <div style={{ width: '250px', overflowY: 'auto', borderRight: '1px solid #ccc', padding: '8px' }}>
        <button onClick={onClose} style={{ marginBottom: '10px' }}>
          Hide File Structure
        </button>
        <h4>File Tree</h4>
        {fileTree.files && fileTree.files.length > 0 ? (
          renderTree(fileTree.files)
        ) : (
          <p>No files</p>
        )}
      </div>

      {/* Right side: open files */}
      <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', padding: '8px', overflow: 'auto' }}>
        {openFiles.length === 0 && (
          <div style={{ margin: 'auto', color: '#777' }}>
            <p>No files open.</p>
          </div>
        )}
        {openFiles.map((file) => (
          <div
            key={file.path}
            style={{
              flex: '1 1 45%',
              margin: '8px',
              border: '1px solid #ddd',
              display: 'flex',
              flexDirection: 'column',
              minWidth: '300px',
              maxWidth: '100%',
            }}
          >
            <div style={{ background: '#f5f5f5', padding: '5px' }}>
              <strong>{file.path}</strong>
              <button style={{ float: 'right' }} onClick={() => closeFile(file.path)}>
                Close
              </button>
            </div>
            <div style={{ flex: 1, overflow: 'auto', minHeight: '200px' }}>
              <SyntaxHighlighter language={detectLanguage(file.path)} style={atomDark}>
                {file.content}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
