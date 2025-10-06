import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from '/src/locales/src/locales/en.json'; 
import fr from '/src/locales/src/locales/fr.json';
import de from '/src/locales/src/locales/de.json'; 

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],  
    },
    resources: {
      en: { translation: en.translation || en }, 
      de: { translation: de.translation || de },
      fr: { translation: fr.translation || fr }
    },
    detection: {
      order: ['navigator', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie']
    }
  });

export default i18n;