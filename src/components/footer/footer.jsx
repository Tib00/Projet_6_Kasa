import React from 'react';
import './footer.scss';
import logoFooter from '../../assets/logo_footer.png';

const Footer = () => {
    return(
        <div>
            <img src={logoFooter} alt="logo Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer