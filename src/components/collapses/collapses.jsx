import React from 'react';
import './collapses.scss';
import { useState } from 'react';

const Collapse = ({ title, children }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <span>{isCollapsed ? '▼' : '▲'}</span>
      </div>
      {!isCollapsed && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;