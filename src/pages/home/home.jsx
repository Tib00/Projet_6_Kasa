import React from 'react';
import './home.scss'
import Banner from '../../components/banner/banner'
import Cadre from '../../components/cadre/cadre'
import PhotoMer from '../../assets/paysage_mer.png';

const Home = () => {
    return(
        <div className='home'>
            <Banner className='banner-home' img={PhotoMer} titleBanner='Chez vous partout et ailleurs' />
            <Cadre className='cadre-home'/>
        </div>
    )
}

export default Home