import React from 'react';
import './collapses.scss';
import { useState } from 'react';
import Vector from '../../assets/fleche_kiboug.png'

const Collapse = ({ title, children }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <img
          src={Vector}
          alt={isCollapsed ? 'Flèche vers le haut' : 'Flèche vers le bas'}
          className={`arrow-icon ${isCollapsed ? 'down' : 'up'}`}
        />
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