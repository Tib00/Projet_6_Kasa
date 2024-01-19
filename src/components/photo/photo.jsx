import React from 'react';
import { Link } from 'react-router-dom';
import './photo.scss';

const Photo = ({ cover, title, id }) => {
  return (
    <div className="photo-container">  
      <Link to={`/logement/${id}`}>
        <img src={cover} alt={title} />
      </Link>
      <p>{title}</p>
    </div>
  );
};

export default Photo;