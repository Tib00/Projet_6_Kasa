import React from 'react';
import './banner.scss'


const Banner = ({img, titleBanner}) => {
    return(
        <div className="banner-component">
            <img src={img} alt="banniere"></img>
            <p>{titleBanner}</p>
        </div>
    )
}

export default Banner