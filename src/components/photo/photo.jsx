import React from 'react';
import './photo.scss';
import PhotoTest from '../../assets/Thumb.png';

const Photo = () => {
    return(
        <div>
            <img src={PhotoTest} alt="la mer"></img>
            <img src={PhotoTest} alt="la mer"></img>
            <img src={PhotoTest} alt="la mer"></img>
            <img src={PhotoTest} alt="la mer"></img>
            <img src={PhotoTest} alt="la mer"></img>
            <img src={PhotoTest} alt="la mer"></img>
        </div>
    )
}

export default Photo