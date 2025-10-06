import './Autres.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Autres() {
  const  { t}= useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="autres-page">
      <div className="autres-header">
        <h1>{t('aut.h1', { defaultValue: 'Autres Services' })}</h1>
        <p className="autres-subtitle">
          {t('aut.p1', { defaultValue: 'Des solutions sur mesure pour vos besoins spécifiques' })}
        </p>
      </div>

      <div className="autres-content">
        {/* Section Introduction */}
        <section className="autres-intro">
          <h2>{t('aut.h2', { defaultValue: 'Vous avez une demande spéciale ? Vous avez besoin d\'un conseil ?' })}</h2>
          <p className="intro-text">
            {t('aut.p2', {
              defaultValue: `Chez TECASER, nous comprenons que chaque entreprise a des besoins uniques. 
              Notre équipe d'experts est là pour vous accompagner dans toutes vos demandes spécifiques.`
            })}
          </p>
        </section>

        {/* Section Services */}
        <section className="services-section">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <div className="service-content">
                <h3>{t('aut.s1', { defaultValue: 'Aide à la création d\'entreprise au MAROC' })}</h3>
                <p>
                  {t('aut.sp1', {
                    defaultValue: `Accompagnement complet pour la création de votre entreprise au Maroc, 
                    de l'étude de faisabilité à l'immatriculation.`
                  })}
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">📋</div>
              <div className="service-content">
                <h3>{t('aut.s2', { defaultValue: 'Démarches administratives spéciales' })}</h3>
                <p>
                  {t('aut.sp2', {
                    defaultValue: `Gestion de toutes les démarches administratives complexes et spécifiques 
                    à votre secteur d'activité.`
                  })}
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <div className="service-content">
                <h3>{t('aut.s3', { defaultValue: 'Interface avec les établissements publics' })}</h3>
                <p>
                  {t('aut.sp3', {
                    defaultValue: `Liaison et coordination avec toutes les administrations et établissements 
                    publics marocains.`
                  })}
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🌍</div>
              <div className="service-content">
                <h3>{t('aut.s4', { defaultValue: 'Interface avec des entreprises nationales ou internationales' })}</h3>
                <p>
                  {t('aut.sp4', {
                    defaultValue: `Coordination et gestion des relations avec vos partenaires commerciaux 
                    nationaux et internationaux.`
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Points Suspensifs */}
        <section className="suspensifs-section">
          <div className="suspensifs-content">
            <h3>{t('aut.h3', { defaultValue: 'Et bien plus encore...' })}</h3>
            <p>
              {t('aut.p3', {
                defaultValue: `Notre palette de services s'étend à de nombreux autres domaines. 
                Quelle que soit votre demande, nous saurons trouver la solution adaptée.`
              })}
            </p>
            <div className="suspensifs-dots">…</div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="autres-cta">
          <div className="cta-content">
            <h2>{t('aut.h4', { defaultValue: 'N\'hésitez pas à nous contacter' })}</h2>
            <p>
              {t('aut.p4', {
                defaultValue: `Nous nous ferons un grand plaisir de pouvoir vous assister ! 
                Contactez-nous pour discuter de vos besoins spécifiques.`
              })}
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={handleContactClick}>
                {t('aut.b1', { defaultValue: 'Nous contacter' })}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Autres;