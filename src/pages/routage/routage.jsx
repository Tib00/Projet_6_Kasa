import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Apropos from '../a_propos/a_propos';
import Erreur from '../erreur/erreur';
import Home from '../home/home';
import Logements from '../logement/logement';
import LogementDetails from '../LogementDetails/LogementDetails';

const Routage = () => {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="*" element={< Erreur />} />
                <Route path="/logement" element={< Logements />} />
                <Route path="/logement/:id" element={<LogementDetails />} />
                <Route path="/about" element={< Apropos />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routage