import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './App.css';

import LanguageSelector from '/src/components/language-selector.jsx';
import { useTranslation } from 'react-i18next';


// Animations réutilisables
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function App() {
  const  { t}= useTranslation();

  const navigate = useNavigate(); // Initialisez useNavigate

  const handleContactClick = () => {
    navigate('/contact'); // Redirection vers la page contact
  };


  return (
    <div className="App">
      
      
      <main>
        {/* Hero Section avec animation */}
        <motion.section 
          className="hero-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-content"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
{t("titre",{ defaultValue: 'TECASER : Expertise Internationale & Valeurs Partagées' })}            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
{t("titre1",{ defaultValue: 'Votre Partenaire Multilingue pour des Solutions Sur Mesure' })}           </motion.p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onClick={handleContactClick}
            >
              {t("contact_btn",{ defaultValue: 'Contactez-nous' })} 
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Services Section - Animation au scroll seulement */}
        <section className="services-section">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Nos Expertises
          </motion.h2>
          
          <div className="services-grid">
            {/* Première boîte */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                whileHover={{ color: "#667eea" }}
                transition={{ duration: 0.3 }}
              >
                Intégration Industrielle
              </motion.h3>
              <p>Optimisation de vos processus industriels avec des experts dédiés.</p>
            </motion.div>

            {/* Deuxième boîte */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                whileHover={{ color: "#667eea" }}
                transition={{ duration: 0.3 }}
              >
                Secrétariat & Assistance Administrative
              </motion.h3>
              <p>Soulagez-vous des tâches administratives chronophages.</p>
            </motion.div>

            {/* Troisième boîte */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                whileHover={{ color: "#667eea" }}
                transition={{ duration: 0.3 }}
              >
                Conseil & Gestion d'Entreprise
              </motion.h3>
              <p>Accompagnement stratégique pour le développement de votre activité.</p>
            </motion.div>
          </div>
        </section>

        {/* Why Us Section - Animation au scroll seulement */}
        <section className="why-us-section">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {t("choisir",{ defaultValue: 'Pourquoi choisir TECASER ?' })} 
          </motion.h2>
          
          <div className="advantages-list">
            <motion.div 
              className="advantage"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4>✅{t('expertise',{ defaultValue: 'Expertise & Professionnalisme' })}</h4>
              <p>{t('p',{defaultValue: "Une équipe d'experts qualifiés à votre service"})}</p>
            </motion.div>

            <motion.div 
              className="advantage"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4>✅ {t('sol',{defaultValue: 'Solutions Sur Mesure'})}</h4>
              <p>{t('p1',{defaultValue: 'Des services adaptés à vos besoins spécifiques'})}</p>
            </motion.div>

            <motion.div 
              className="advantage"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4>✅{t('react',{defaultValue:  'Réactivité & Écoute'})}</h4>
              <p>{t('p2',{defaultValue:'Une relation de confiance et une communication transparente'})}</p>
            </motion.div>
          </div>
        </section>

        {/* Section Statistiques - Animation au scroll seulement */}
        <section className="stats-section">
  <motion.h2 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
  >
    {t('impact', {defaultValue: 'Notre Impact'})}
  </motion.h2>
  <div className="stats-container">
    <motion.div 
      className="stat-item"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3>+50</h3>
      <p>{t('p3',{defaultValue:'Clients satisfaits'})}</p>
    </motion.div>
    <motion.div 
      className="stat-item"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3>+100</h3>
      <p>{t('p4',{defaultValue:'Projets réalisés'})}</p>
    </motion.div>
    <motion.div 
      className="stat-item"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h3>5+</h3>
      <p>{t('p5',{defaultValue:"Ans d'expérience"})}</p>
    </motion.div>
  </div>
</section>
      </main>

     
    </div>
  );
}

export default App;