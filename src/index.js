import React from 'react';
import ReactDOM from 'react-dom/client';
import Apropos from './pages/a_propos/a_propos';
import Erreur from './pages/erreur/erreur';
import Home from './pages/home/home';
import Logements from './pages/logement/logement';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Home />
    < Apropos />
    < Erreur />
    < Logements />
  </React.StrictMode>
);
