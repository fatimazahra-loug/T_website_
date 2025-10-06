import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from 'C:/Users/ThinkPad/Desktop/TECASER/Tecaser-WebSite/src/locales/src/locales/en.json'; 
import fr from 'C:/Users/ThinkPad/Desktop/TECASER/Tecaser-WebSite/src/locales/src/locales/fr.json';
import de from 'C:/Users/ThinkPad/Desktop/TECASER/Tecaser-WebSite/src/locales/src/locales/de.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
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