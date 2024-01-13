import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Apropos from '../a_propos/a_propos';
import Erreur from '../erreur/erreur';
import Home from '../home/home';
import Logements from '../logement/logement';

const Routage = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/error" element={< Erreur />} />
                <Route path="/logement" element={< Logements />} />
                <Route path="/about" element={< Apropos />} />
            </Routes>
        </Router>
    )
}

export default Routage