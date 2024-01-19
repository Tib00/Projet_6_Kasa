import React from 'react';
import { useParams } from 'react-router-dom';

import './LogementDetails.scss'

import Header from '../../components/header/header';
import Slider from '../../components/slider/slider';
import Title from '../../components/title/title';
import Tags from '../../components/tags/tags';
import Owner from '../../components/owner/owner';
import Rating from '../../components/ratings/ratings';
import Collapse from '../../components/collapses/collapses';
import Footer from '../../components/footer/footer';
import data from '../../AppartmentList.json';
import Erreur from '../erreur/erreur'

const LogementDetails = () => {
  const { id } = useParams();

  // Rechercher le logement spécifique en fonction de l'ID dans les données
  const logement = data.find(item => item.id === id);

  // Vérifier si le logement existe
  if (!logement) {
    return <div><Erreur /></div>;
  }

  return (
    <div className='logement-container'>
      <Header />
      <Slider className="slider" pictures={logement.pictures} />
      <div className='titleTag-ownerRating'>
        <div className='title-and-tag'>
          <Title title={logement.title} className="title" />
          <Tags tags={logement.tags} />
        </div>
        <div className='owner-and-rating'>
          <Owner className='owner' host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div> 
      <div className='collapses-container'>
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
      <Footer />
    </div>
  );
};

export default LogementDetails;
