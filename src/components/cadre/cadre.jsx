import React from 'react';
import './cadre.scss';
import Photo from '../photo/photo';
import data from '../../AppartmentList.json';

const Cadre = () => {
  return (
    <div className="cadre-container">
      <div className="cadre-component">
        {data.map((appartment, index) => (        
          <Photo
            key={index}
            id={appartment.id}
            cover={appartment.cover}
            title={appartment.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Cadre;