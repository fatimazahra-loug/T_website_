import './Autres.css';

import { useNavigate } from 'react-router-dom';

function Autres() {

    const navigate = useNavigate();

    const handleContactClick = () => {
      navigate('/contact');
    }; 

  return (
    <div className="autres-page">
      <div className="autres-header">
        <h1>Autres Services</h1>
        <p className="autres-subtitle">
          Des solutions sur mesure pour vos besoins spécifiques
        </p>
      </div>

      <div className="autres-content">
        {/* Section Introduction */}
        <section className="autres-intro">
          <h2>Vous avez une demande spéciale ? Vous avez besoin d'un conseil ?</h2>
          <p className="intro-text">
            Chez TECASER, nous comprenons que chaque entreprise a des besoins uniques. 
            Notre équipe d'experts est là pour vous accompagner dans toutes vos demandes spécifiques.
          </p>
        </section>

        {/* Section Services */}
        <section className="services-section">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <div className="service-content">
                <h3>Aide à la création d'entreprise au MAROC</h3>
                <p>
                  Accompagnement complet pour la création de votre entreprise au Maroc, 
                  de l'étude de faisabilité à l'immatriculation.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">📋</div>
              <div className="service-content">
                <h3>Démarches administratives spéciales</h3>
                <p>
                  Gestion de toutes les démarches administratives complexes et spécifiques 
                  à votre secteur d'activité.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <div className="service-content">
                <h3>Interface avec les établissements publics</h3>
                <p>
                  Liaison et coordination avec toutes les administrations et établissements 
                  publics marocains.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">🌍</div>
              <div className="service-content">
                <h3>Interface avec des entreprises nationales ou internationales</h3>
                <p>
                  Coordination et gestion des relations avec vos partenaires commerciaux 
                  nationaux et internationaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Points Suspensifs */}
        <section className="suspensifs-section">
          <div className="suspensifs-content">
            <h3>Et bien plus encore...</h3>
            <p>
              Notre palette de services s'étend à de nombreux autres domaines. 
              Quelle que soit votre demande, nous saurons trouver la solution adaptée.
            </p>
            <div className="suspensifs-dots">…</div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="autres-cta">
          <div className="cta-content">
            <h2>N'hésitez pas à nous contacter</h2>
            <p>
              Nous nous ferons un grand plaisir de pouvoir vous assister ! 
              Contactez-nous pour discuter de vos besoins spécifiques.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={handleContactClick}>Nous contacter</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Autres;