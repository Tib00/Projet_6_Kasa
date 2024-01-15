import React from 'react';
import './ratings.scss';
import filledStarImage from '../../assets/etoile_pleine.png';
import emptyStarImage from '../../assets/etoile_vide.png';

const Ratings = ({ rating }) => {
  const filledStars = Array.from({ length: rating });
  const emptyStars = Array.from({ length: 5 - rating });

  return (
    <div className="ratings">
      {filledStars.map((_, index) => (
        <img key={index} src={filledStarImage} alt="filled star" className="star" />
      ))}
      {emptyStars.map((_, index) => (
        <img key={index} src={emptyStarImage} alt="empty star" className="star" />
      ))}
    </div>
  );
};

export default Ratings;
