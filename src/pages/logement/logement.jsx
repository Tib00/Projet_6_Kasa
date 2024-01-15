import React from 'react';
import './logement.scss';
import Header from '../../components/header/header';
import Slider from '../../components/slider/slider'
import Title from '../../components/title/title'
import Tags from '../../components/tags/tags'
import Owner from '../../components/owner/owner'
import Rating from '../../components/ratings/ratings'
import Collapse from '../../components/collapses/collapses'
import Footer from '../../components/footer/footer';
import Cover from '../../components/cover/cover'
import data from '../../AppartmentList.json';

const Logements = () => {
    return (
        <div>
            <Header />

            {data.map((logement, index) => (
                <div key={index}>
                    <Cover cover={logement.cover} />
                    <Slider pictures={logement.pictures} />
                    <Title title={logement.title} />
                    <Tags tags={logement.tags} />
                    <Owner host={logement.host} />
                    <Rating rating={logement.rating} />
                    <Collapse title="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                    <Collapse title="Equipements">
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            ))}

            <Footer />
        </div>
    );
}

export default Logements;