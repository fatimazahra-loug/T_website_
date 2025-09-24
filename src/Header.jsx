import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/logoo.jpg';
import './index.css'; //  <span className="subtext">Technical and Administrative Services</span>

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
    
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/">Accueil</Link></li>       
          <li 
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link 
              to="/" 
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setDropdownOpen(!isDropdownOpen);
                }
              }}
            >
              Prestations
            </Link>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`} id="pres">
              <Link to="/prestations/management">Management -<br />Coordination</Link>
              <Link to="/prestations/redaction">Intégration <br />Industrielle</Link>
              <Link to="/prestations/traduction">Traduction<br /> Professionnelle</Link>
          
                <Link to="/prestations/formation">Formation <br />Technique</Link>
             
              
              <Link to="/prestations/autres">Autres</Link>
            </div>
          </li> 
          <li><Link to="/contact">Contact</Link></li>   
          <li><Link to="/about">À propos de nous</Link></li>
          <li><Link to="/conditions">Conditions</Link></li> 
        </ul>
      </div>
    </nav>
  );
}

export default Header;