import React from 'react';
import './a_propos.scss'
import Banner from '../../components/banner/banner'
import Collapse from '../../components/collapses/collapses'
import PhotoMontagne from '../../assets/paysage_montagne.png'

const Apropos = () => {
    return(
        <div>
            <Banner img={PhotoMontagne}/>
            <div className="collapses-container-about">
                <Collapse title="Fiabilité">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulierement vérifiées par nos équipes</p>
                </Collapse>            
                <Collapse title="Respect">
                    <p>La bienveillance fait partie des valeurs fondatices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse title="Service">
                    <p>La bienveillance fait partie des valeurs fondatices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse title="Sécurité">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </div>
        </div>
    )
}

export default Apropos