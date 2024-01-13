import React from 'react';
import './a_propos.scss'
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner'
import Collapse from '../../components/collapses/collapses'
import Footer from '../../components/footer/footer' 

const Apropos = () => {
    return(
        <div>
            <h1>Ici ma page A propos</h1>

            <Header />
            <Banner />
            <Collapse />            
            <Collapse />
            <Collapse />
            <Collapse />
            <Footer />
        </div>
    )
}

export default Apropos