import React from 'react';
import './header.scss';
import { Link, useLocation } from 'react-router-dom'
import logoPrincipal from '../../assets/logo_principal.png';

const Header = () => {
    const location = useLocation();
    return(
        <div className="header-container">
            <img src={logoPrincipal} alt="logo Kasa"></img>
            <nav>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>À propos</Link>
        </nav>
        </div>
    )
}

export default Header