import React from 'react';
import { Link } from 'react-router-dom';
import './wrong_way.scss';
import Erreur from '../../assets/404.png';

const Wway = () => {
  return (
    <div className="Wway">
      <img src={Erreur} alt="Erreur" className="Wway__img" />
      <p className="Wway__p">Oups! La page que vous demandez n'existe pas</p>
      <Link to='/' className="Wway__a">Retourner sur la page d'acceuil</Link>
    </div>
  );
};

export default Wway;