import React, { useState } from 'react';
import './slider.scss';
import FlecheD from '../../assets/fleche_droite.png'
import FlecheG from '../../assets/fleche_gauche.png'
const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="slider">
      <button className="left-button" onClick={prevSlide}>
        <img src={FlecheG} alt="Previous" />
      </button>
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="right-button" onClick={nextSlide}>
        <img src={FlecheD} alt="Next" />
      </button>
      <div className="photo-counter">{`${currentIndex + 1} / ${pictures.length}`}</div>
    </div>
  );
};

export default Slider;