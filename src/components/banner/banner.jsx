import React from 'react';
import './banner.scss'

const Banner = ({img}) => {
    return(
        <div className="banner-component">
            <img src={img} alt="banniere"></img>
            <p>Chez vous partout et ailleurs</p>
        </div>
    )
}

export default Banner