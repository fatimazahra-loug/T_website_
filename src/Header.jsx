import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/l.png';
import './index.css'; //  <span className="subtext">Technical and Administrative Services</span>
import LanguageSelector from '/src/components/language-selector.jsx';
import { useTranslation } from 'react-i18next';

function Header() {
  const  { t}= useTranslation();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
    
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/">{t("acc", { defaultValue: 'Accueil' })}</Link></li>       
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
              {t('prestations',{ defaultValue: 'Prestations' })}
            </Link>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`} id="pres">
              <Link to="/prestations/management">{t('management',{ defaultValue: 'Management - Coordination' })}</Link>
              <Link to="/prestations/integration">{t('integration',{ defaultValue: 'Intégration Industrielle' })}</Link>
              <Link to="/prestations/traduction">{t('traduction',{ defaultValue: 'Traduction Professionnelle' })}</Link>
              <Link to="/prestations/formation">{t('formation',{ defaultValue: 'Formation Technique' })}</Link>
              <Link to="/prestations/autres">{t('autres',{ defaultValue: 'Autres' })}</Link>
            </div>
          </li>
          <li><Link to="/contact">{t('contact',{ defaultValue: 'Contact' })}</Link></li>
          <li><Link to="/about">{t('about',{ defaultValue: 'A propos de nous' })}</Link></li>
          <li><Link to="/conditions">{t('conditions',{ defaultValue: 'Conditions  ' })}</Link></li> 
          <li><LanguageSelector /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;