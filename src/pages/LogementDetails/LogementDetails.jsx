import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Slider from '../../components/slider/slider';
import Title from '../../components/title/title';
import Tags from '../../components/tags/tags';
import Owner from '../../components/owner/owner';
import Rating from '../../components/ratings/ratings';
import Collapse from '../../components/collapses/collapses';
import Footer from '../../components/footer/footer';
import Cover from '../../components/cover/cover';
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
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default LogementDetails;