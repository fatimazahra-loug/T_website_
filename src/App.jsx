import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Conditions from './Conditions';
import './App.css';
import Contact from './Contact';
import ManagementCoordination from './ManagementCoordination';
import Traduction from './Traduction';
import IntegrationIdustrielle from './IntegrationIdustrielle';
import Formation from './Formation';
import Autres from './Autres';

import './i18.js';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Route pour la page À propos */}
        <Route path="/about" element={<About />} />

        <Route path="/conditions" element={<Conditions />} />
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/prestations/management" element={<ManagementCoordination />} />
         <Route path="/prestations/traduction" element={<Traduction />} />
         <Route path="/prestations/formation" element={<Formation />} />
         <Route path="/prestations/integration" element={<IntegrationIdustrielle />} />
         <Route path="/prestations/autres" element={<Autres />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;