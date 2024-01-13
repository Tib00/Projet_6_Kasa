import React from 'react';
import './slider.scss';
// import { useState } from 'react';
const Slider = () => {
    return(
        <div>
            <p>Ici ça glisse</p>
        </div>
    )
}

export default Slider



// const Slider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="slider">
//       <button onClick={prevSlide}>&lt;</button>
//       <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//       <button onClick={nextSlide}>&gt;</button>
//     </div>
//   );
// };

// export default Slider;