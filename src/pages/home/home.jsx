import React from 'react';
import './home.scss'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Cadre from '../../components/cadre/cadre'
import Footer from '../../components/footer/footer'
import PhotoMer from '../../assets/paysage_mer.png';

const Home = () => {
    return(
        <div>
            <Header />
            <Banner img={PhotoMer} />
            <Cadre />
            <Footer />
        </div>
    )
}

export default Home