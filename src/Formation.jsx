import './Formation.css';
import { useNavigate } from 'react-router-dom';

function Formation() {
    const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="formations-page">
      <div className="formations-header">
        <h1>Nos Formations</h1>
        <p className="formations-subtitle">
          Des programmes de formation adaptés à vos besoins professionnels
        </p>
      </div>

      <div className="formations-content">
        {/* Introduction */}
        <section className="formations-intro">
          <h2>Nous vous proposons les formations suivantes :</h2>
          <p>
            Notre expertise dans divers domaines techniques nous permet de vous offrir 
            des formations de qualité dispensées par des professionnels expérimentés.
          </p>
        </section>

        {/* Management / Gestion de projets */}
        <section className="formation-category">
          <div className="category-header">
            <h2>Management / Gestion de projets</h2>
          </div>
          <div className="formation-items">
            <div className="formation-item">
              <div className="formation-icon">📊</div>
              <div className="formation-details">
                <h3>Cours de Management</h3>
                <p>Formation complète en management et leadership</p>
                <ul className="formation-topics">
                  <li>Gestion d'équipe</li>
                  <li>Planification stratégique</li>
                  <li>Résolution de problèmes</li>
                  <li>Communication managériale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AUTOCAD */}
        <section className="formation-category">
          <div className="category-header">
            <h2>AUTOCAD</h2>
          </div>
          <div className="formation-items">
            <div className="formation-item">
              <div className="formation-icon">🖥️</div>
              <div className="formation-details">
                <h3>Cours d'AUTOCAD</h3>
                <p>Maîtrisez le logiciel de conception assistée par ordinateur</p>
                <ul className="formation-topics">
                  <li>Dessin technique 2D</li>
                  <li>Modélisation 3D</li>
                  <li>Annotations et cotes</li>
                  <li>Gestion des calques et blocs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ferroviaire */}
        <section className="formation-category">
          <div className="category-header">
            <h2>Ferroviaire</h2>
          </div>
          <div className="formation-items">
            <div className="formation-item">
              <div className="formation-icon">🚆</div>
              <div className="formation-details">
                <h3>Cours d'ETCS</h3>
                <p>Système européen de contrôle des trains</p>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">🔧</div>
              <div className="formation-details">
                <h3>Maintenance des véhicules</h3>
                <p>Techniques de maintenance ferroviaire</p>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">🔄</div>
              <div className="formation-details">
                <h3>Interopérabilité</h3>
                <p>Standards et compatibilité des systèmes</p>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">🧪</div>
              <div className="formation-details">
                <h3>Tests d'Intégration et de validation</h3>
                <p>Méthodologies de test et validation</p>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">⚡</div>
              <div className="formation-details">
                <h3>Tests fonctionnels de véhicules</h3>
                <p>Tests statiques et dynamiques</p>
                <ul className="formation-topics">
                  <li>Tests statiques</li>
                  <li>Tests dynamiques</li>
                  <li>Analyse des résultats</li>
                  <li>Rapports de test</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Électronique */}
        <section className="formation-category">
          <div className="category-header">
            <h2>Électronique</h2>
          </div>
          <div className="formation-items">
            <div className="formation-item">
              <div className="formation-icon">🔌</div>
              <div className="formation-details">
                <h3>Cours d'Électronique analogique et numérique</h3>
                <p>Fondements et applications de l'électronique</p>
                <ul className="formation-topics">
                  <li>Circuits analogiques</li>
                  <li>Électronique numérique</li>
                  <li>Composants électroniques</li>
                  <li>Mesures et tests</li>
                </ul>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">🤖</div>
              <div className="formation-details">
                <h3>Cours d'Automatisme</h3>
                <p>Systèmes automatisés et contrôle industriel</p>
                <ul className="formation-topics">
                  <li>API et automates</li>
                  <li>Capteurs et actionneurs</li>
                  <li>Programmation industrielle</li>
                  <li>Réseaux industriels</li>
                </ul>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">📡</div>
              <div className="formation-details">
                <h3>Cours de Télécommunications</h3>
                <p>Technologies et systèmes de communication</p>
                <ul className="formation-topics">
                  <li>Réseaux de communication</li>
                  <li>Transmission de données</li>
                  <li>Protocoles de communication</li>
                  <li>Systèmes sans fil</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="formations-cta">
          <div className="cta-content">
            <h2>Intéressé par nos formations ?</h2>
            <p>Contactez-nous pour obtenir plus d'informations </p>
            <div className="cta-buttons">
              <button className="cta-button primary"  onClick={handleContactClick}>Contactez-nous</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Formation;