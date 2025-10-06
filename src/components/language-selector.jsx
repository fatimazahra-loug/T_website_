import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import earth from '/src/assets/earth.png'; 
import './LanguageSelector.css';

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'de', lang: 'German' }, 
  { code: 'fr', lang: 'French' }
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="language-selector">
      <img
        src={earth}
        alt="Language selector"
        className="earth-icon"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {languages.map(({ code, lang }) => (
          <div
            key={code}
            className="dropdown-item"
            onClick={() => changeLanguage(code)}
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;