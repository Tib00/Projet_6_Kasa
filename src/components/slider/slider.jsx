import React from 'react';
import './slider.scss';
import { useState } from 'react';

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
        <button onClick={prevSlide}>&lt;</button>
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button onClick={nextSlide}>&gt;</button>
      </div>
    );
  };
  
  export default Slider;