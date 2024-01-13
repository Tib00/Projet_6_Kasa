import React from 'react';
import './logement.scss';
import Header from '../../components/header/header';
import Slider from '../../components/slider/slider'
import Title from '../../components/title/title'
import Tags from '../../components/tags/tags'
import Owner from '../../components/owner/owner'
import Rating from '../../components/ratings/ratings'
import Collapse from '../../components/collapses/collapses'
import Footer from '../../components/footer/footer'

const Logements = () => {
    return(
        <div>
            <h1>Ici ma page logements</h1>
            <Header />
            <Slider />
            <Title />
            <Tags />
            <Owner />
            <Rating />
            <Collapse title="Description">
                <p>Description</p>
            </Collapse>
            <Collapse title="Equipements">
                <p>Description des Equipements</p>
            </Collapse>
            <Footer />

        </div>
    )
}

export default Logements