import React from 'react';
import { useParams } from 'react-router-dom';

import './LogementDetails.scss'

import Slider from '../../components/slider/slider';
import Title from '../../components/title/title';
import Tags from '../../components/tags/tags';
import Owner from '../../components/owner/owner';
import Rating from '../../components/ratings/ratings';
import Collapse from '../../components/collapses/collapses';
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
      <Slider className="slider" pictures={logement.pictures} />
      <div className='titleTag-ownerRating'>
        <div className='title-and-tag'>
          <Title title={logement.title} location={logement.location} className="title" />
          <Tags tags={logement.tags} />
        </div>
        <div className='owner-and-rating'>
          <Owner className='owner' host={logement.host} />
          <Rating className='logementRating' rating={logement.rating} />
        </div>
      </div> 
      <div className='collapses-container'>
        <div className='collapseRow'>
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        </div>
        <div className='collapseRow'>
          <Collapse title="Equipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default LogementDetails;
