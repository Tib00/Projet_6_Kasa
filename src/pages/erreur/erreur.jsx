import React from 'react';
import './erreur.scss'
import Header from '../../components/header/header'
import Wway from '../../components/wrong_way/wrong_way'
import Footer from '../../components/footer/footer'

const Erreur = () => {
    return(
        <div>
            <Header/>
            <Wway />
            <Footer />
        </div>
    )
}

export default Erreur