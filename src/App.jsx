import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'; // Importez le nouveau composant Home
import About from './About';
import Conditions from './Conditions';
import './App.css';
import Contact from './Contact';

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

        {/* <Route path="/prestations" element={<Prestations />} /> */}
         <Route path="/contact" element={<Contact />} /> 
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;