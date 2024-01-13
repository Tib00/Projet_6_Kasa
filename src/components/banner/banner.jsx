import React from 'react';
import './banner.scss'
import PhotoMer from '../../assets/paysage_mer.png';

const Banner = () => {
    return(
        <div>
            <img src={PhotoMer} alt="la mer"></img>
        </div>
    )
}

export default Banner