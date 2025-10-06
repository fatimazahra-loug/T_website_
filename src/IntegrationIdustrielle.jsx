import './IntegrationIdustrielle.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function IntegrationIdustrielle() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="integration-industrielle-page">
      <div className="integration-industrielle-header">
        <h1>{t('ind.h1', { defaultValue: 'Intégration Industrielle : Automatisation & Robotique' })}</h1>
        <p className="integration-subtitle">
          {t('ind.p1', { defaultValue: 'Boostez votre production avec l\'automatisation' })}
        </p>
      </div>

      <div className="integration-industrielle-content">
        {/* Section Ce que nous faisons */}
        <section className="integration-industrielle-section">
          <h2>{t('ind.h2', { defaultValue: 'Ce que nous faisons' })}</h2>
          <p>
            {t('ind.p2', {
              defaultValue: 'Nous transformons vos lignes de production en intégrant des solutions robotiques et automatisées adaptées à vos besoins.'
            })}
          </p>
          
          <div className="integration-services-grid">
            <div className="integration-service-card">
              <div className="integration-service-icon">🤖</div>
              <h3>{t('ind.h3', { defaultValue: 'Robotique industrielle' })}</h3>
              <ul>
                <li>{t('ind.r1', { defaultValue: 'Bras robotisés & cobots pour les tâches répétitives ou complexes' })}</li>
              </ul>
            </div>
            <div className="integration-service-card">
              <div className="integration-service-icon">⚙️</div>
              <h3>{t('ind.h4', { defaultValue: 'Automatisation des process' })}</h3>
              <ul>
                <li>{t('ind.a1', { defaultValue: 'Automates, capteurs et contrôle intelligent' })}</li>
              </ul>
            </div>
            <div className="integration-service-card">
              <div className="integration-service-icon">🚚</div>
              <h3>{t('ind.h5', { defaultValue: 'Intralogistique automatisée' })}</h3>
              <ul>
                <li>{t('ind.i1', { defaultValue: 'Manutention, transport et assemblage optimisés' })}</li>
              </ul>
            </div>
            <div className="integration-service-card">
              <div className="integration-service-icon">🛠️</div>
              <h3>{t('ind.h6', { defaultValue: 'Maintenance & suivi' })}</h3>
              <ul>
                <li>{t('ind.m1', { defaultValue: 'Accompagnement, formation et support technique' })}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Vos avantages */}
        <section className="integration-industrielle-section">
          <h2>{t('ind.h7', { defaultValue: 'Vos avantages' })}</h2>
          <div className="integration-benefits-grid">
            <div className="integration-benefit-card">
              <h4>{t('ind.h8', { defaultValue: 'Plus de productivité' })}</h4>
            </div>
            <div className="integration-benefit-card">
              <h4>{t('ind.h9', { defaultValue: 'Moins de coûts et d\'erreurs' })}</h4>
            </div>
            <div className="integration-benefit-card">
              <h4>{t('ind.h10', { defaultValue: 'Flexibilité de production' })}</h4>
            </div>
            <div className="integration-benefit-card">
              <h4>{t('ind.h11', { defaultValue: 'Sécurité renforcée' })}</h4>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="integration-cta-section">
          <div className="integration-cta-content">
            <h2>{t('ind.h12', { defaultValue: 'L\'usine du futur, dès aujourd\'hui' })}</h2>
            <p>
              {t('ind.p3', {
                defaultValue: 'Nos solutions robotiques et automatisées s\'adaptent à vos objectifs pour rendre vos opérations plus rapides, fiables et durables.'
              })}
            </p>
            <p>
              {t('ind.p4', {
                defaultValue: 'Contactez-nous dès maintenant et découvrez comment l\'automatisation peut transformer votre entreprise.'
              })}
            </p>
            <button className="integration-cta-button" onClick={handleContactClick}>
              {t('ind.b1', { defaultValue: 'Nous contacter' })}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IntegrationIdustrielle;