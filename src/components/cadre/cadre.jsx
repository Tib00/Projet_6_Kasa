import React from 'react';
import './cadre.scss';
import Photo from '../photo/photo';
import data from '../../AppartmentList.json';

const Cadre = () => {
  const firstSixApartments = data.slice(0, 6);  // Sélectionnez les 6 premiers éléments

  return (
    <div className="cadre-container">
      <div className="cadre-component">
        {firstSixApartments.map((appartment, index) => (        
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