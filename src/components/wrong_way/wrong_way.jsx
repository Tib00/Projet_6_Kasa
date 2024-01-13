import React from 'react';
import './wrong_way.scss';
import Erreur from '../../assets/404.png'

const Wway = () => {
return(
    <div>
        <img src={Erreur} alt="Erreur"></img>
        <p>Oups! La page que vous demandez n'existe pas</p>
    </div>
    )
}

export default Wway