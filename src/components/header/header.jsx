import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom'
import logoPrincipal from '../../assets/logo_principal.png';

const Header = () => {
    return(
        <div>
            <img src={logoPrincipal} alt="logo Kasa"></img>
            <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
        </div>
    )
}

export default Header