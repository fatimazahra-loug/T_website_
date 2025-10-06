import './Formation.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Formation() {
  const navigate = useNavigate();
  const  { t}= useTranslation();
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="formations-page">
      <div className="formations-header">
        <h1>{t('frm.h1', { defaultValue: 'Nos Formations' })}</h1>
        <p className="formations-subtitle">
          {t('frm.p1', {
            defaultValue: 'Des programmes de formation adaptés à vos besoins professionnels'
          })}
        </p>
      </div>

      <div className="formations-content">
        {/* Introduction */}
        <section className="formations-intro">
          <h2>{t('frm.h2', { defaultValue: 'Nous vous proposons les formations suivantes :' })}</h2>
          <p>
            {t('frm.p2', {
              defaultValue: `Notre expertise dans divers domaines techniques nous permet de vous offrir 
              des formations de qualité dispensées par des professionnels expérimentés.`
            })}
          </p>
        </section>

        {/* Management / Gestion de projets */}
        <section className="formation-category">
          <div className="category-header">
            <h2>{t('frm.h3', { defaultValue: 'Management / Gestion de projets' })}</h2>
          </div>
          <div className="formation-items">
            <div className="formation-item">
              <div className="formation-icon">📊</div>
              <div className="formation-details">
                <h3>{t('frm.h4', { defaultValue: 'Cours de Management' })}</h3>
                <p>{t('frm.p3', { defaultValue: 'Formation complète en management et leadership' })}</p>
                <ul className="formation-topics">
                  <li>{t('frm.ps1', { defaultValue: 'Gestion d\'équipe' })}</li>
                  <li>{t('frm.ps2', { defaultValue: 'Planification stratégique' })}</li>
                  <li>{t('frm.ps3', { defaultValue: 'Résolution de problèmes' })}</li>
                  <li>{t('frm.ps4', { defaultValue: 'Communication managériale' })}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AUTOCAD */}
        <section className="formation-category">
          <div className="category-header">
            <h2>{t('frm.h5', { defaultValue: 'AUTOCAD' })}</h2>
          </div>
          <div className="formation-items">
            <div className="formation-item">
              <div className="formation-icon">🖥️</div>
              <div className="formation-details">
                <h3>{t('frm.h6', { defaultValue: 'Cours d\'AUTOCAD' })}</h3>
                <p>{t('frm.p4', { defaultValue: 'Maîtrisez le logiciel de conception assistée par ordinateur' })}</p>
                <ul className="formation-topics">
                  <li>{t('frm.ps5', { defaultValue: 'Dessin technique 2D' })}</li>
                  <li>{t('frm.ps6', { defaultValue: 'Modélisation 3D' })}</li>
                  <li>{t('frm.ps7', { defaultValue: 'Annotations et cotes' })}</li>
                  <li>{t('frm.ps8', { defaultValue: 'Gestion des calques et blocs' })}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ferroviaire */}
        <section className="formation-category">
          <div className="category-header">
            <h2>{t('frm.h7', { defaultValue: 'Ferroviaire' })}</h2>
          </div>
          <div className="formation-items">
            <div className="formation-item">
              <div className="formation-icon">🚆</div>
              <div className="formation-details">
                <h3>{t('frm.h8', { defaultValue: 'Cours d\'ETCS' })}</h3>
                <p>{t('frm.p5', { defaultValue: 'Système européen de contrôle des trains' })}</p>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">🔧</div>
              <div className="formation-details">
                <h3>{t('frm.h9', { defaultValue: 'Maintenance des véhicules' })}</h3>
                <p>{t('frm.p6', { defaultValue: 'Techniques de maintenance ferroviaire' })}</p>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">🔄</div>
              <div className="formation-details">
                <h3>{t('frm.h10', { defaultValue: 'Interopérabilité' })}</h3>
                <p>{t('frm.p7', { defaultValue: 'Standards et compatibilité des systèmes' })}</p>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">🧪</div>
              <div className="formation-details">
                <h3>{t('frm.h11', { defaultValue: 'Tests d\'Intégration et de validation' })}</h3>
                <p>{t('frm.p8', { defaultValue: 'Méthodologies de test et validation' })}</p>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">⚡</div>
              <div className="formation-details">
                <h3>{t('frm.h12', { defaultValue: 'Tests fonctionnels de véhicules' })}</h3>
                <p>{t('frm.p9', { defaultValue: 'Tests statiques et dynamiques' })}</p>
                <ul className="formation-topics">
                  <li>{t('frm.ct1', { defaultValue: 'Tests statiques' })}</li>
                  <li>{t('frm.ct2', { defaultValue: 'Tests dynamiques' })}</li>
                  <li>{t('frm.ct3', { defaultValue: 'Analyse des résultats' })}</li>
                  <li>{t('frm.ct4', { defaultValue: 'Rapports de test' })}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Électronique */}
        <section className="formation-category">
          <div className="category-header">
            <h2>{t('frm.h13', { defaultValue: 'Électronique' })}</h2>
          </div>
          <div className="formation-items">
            <div className="formation-item">
              <div className="formation-icon">🔌</div>
              <div className="formation-details">
                <h3>{t('frm.h14', { defaultValue: 'Cours d\'Électronique analogique et numérique' })}</h3>
                <p>{t('frm.p10', { defaultValue: 'Fondements et applications de l\'électronique' })}</p>
                <ul className="formation-topics">
                  <li>{t('frm.et1', { defaultValue: 'Circuits analogiques' })}</li>
                  <li>{t('frm.et2', { defaultValue: 'Électronique numérique' })}</li>
                  <li>{t('frm.et3', { defaultValue: 'Composants électroniques' })}</li>
                  <li>{t('frm.et4', { defaultValue: 'Mesures et tests' })}</li>
                </ul>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">🤖</div>
              <div className="formation-details">
                <h3>{t('frm.h15', { defaultValue: 'Cours d\'Automatisme' })}</h3>
                <p>{t('frm.p11', { defaultValue: 'Systèmes automatisés et contrôle industriel' })}</p>
                <ul className="formation-topics">
                  <li>{t('frm.at1', { defaultValue: 'API et automates' })}</li>
                  <li>{t('frm.at2', { defaultValue: 'Capteurs et actionneurs' })}</li>
                  <li>{t('frm.at3', { defaultValue: 'Programmation industrielle' })}</li>
                  <li>{t('frm.at4', { defaultValue: 'Réseaux industriels' })}</li>
                </ul>
              </div>
            </div>

            <div className="formation-item">
              <div className="formation-icon">📡</div>
              <div className="formation-details">
                <h3>{t('frm.h16', { defaultValue: 'Cours de Télécommunications' })}</h3>
                <p>{t('frm.p12', { defaultValue: 'Technologies et systèmes de communication' })}</p>
                <ul className="formation-topics">
                  <li>{t('frm.tt1', { defaultValue: 'Réseaux de communication' })}</li>
                  <li>{t('frm.tt2', { defaultValue: 'Transmission de données' })}</li>
                  <li>{t('frm.tt3', { defaultValue: 'Protocoles de communication' })}</li>
                  <li>{t('frm.tt4', { defaultValue: 'Systèmes sans fil' })}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="formations-cta">
          <div className="cta-content">
            <h2>{t('frm.h17', { defaultValue: 'Intéressé par nos formations ?' })}</h2>
            <p>{t('frm.p13', { defaultValue: 'Contactez-nous pour obtenir plus d\'informations' })}</p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={handleContactClick}>
                {t('frm.b1', { defaultValue: 'Contactez-nous' })}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Formation;