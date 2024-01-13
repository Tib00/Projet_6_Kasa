import React from 'react';
import './home.scss'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Cadre from '../../components/cadre/cadre'
import Footer from '../../components/footer/footer'

const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Cadre />
            <Footer />
        </div>
    )
}

export default Home