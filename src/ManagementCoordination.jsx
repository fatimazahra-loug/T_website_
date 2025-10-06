import './ManagementCoordination.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function ManagementCoordination() {
  const  { t}= useTranslation();
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };
  return (
    <div className="management-page">
    <div className="management-header">
      <h1>{t('mgmt.h1', { defaultValue: 'Project Management' })}</h1>
    </div>
  
    <div className="management-content">
      {/* Section Qu'est-ce qu'un projet */}
      <section className="management-section">
        <h2>{t('mgmt.h2', { defaultValue: 'Qu\'est-ce qu\'un projet ?' })}</h2>
        <p>
          {t('mgmt.p1', {
            defaultValue: `Donner une définition exacte au terme projet n'est pas aussi simple qu'on le penserait. 
            Cependant, plusieurs spécialistes se sont mis d'accord sur certaines caractéristiques/conditions 
            nécessaires pour qu'un projet en soit un :`
          })}
        </p>
  
        <div className="features-grid">
          <div className="feature-card">
            <h3>{t('mgmt.h31', { defaultValue: 'Objectifs définis' })}</h3>
            <p>{t('mgmt.p11', { defaultValue: 'Des buts clairs et précis à atteindre' })}</p>
          </div>
  
          <div className="feature-card">
            <h3>{t('mgmt.h32', { defaultValue: 'L\'unicité' })}</h3>
            <p>{t('mgmt.p12', { defaultValue: 'Chaque projet est unique et spécifique' })}</p>
          </div>
  
          <div className="feature-card">
            <h3>{t('mgmt.h33', { defaultValue: 'Organisation spécifique' })}</h3>
            <p>{t('mgmt.p13', { defaultValue: 'Structure adaptée aux besoins du projet' })}</p>
          </div>
        </div>
  
        <h3>{t('mgmt.h3', { defaultValue: 'Limitations/Restrictions en termes de :' })}</h3>
        <div className="limitations-list">
          <div className="limitation-item">
            <span className="limitation-icon">💰</span>
            <span>{t('mgmt.l1', { defaultValue: 'Budget' })}</span>
          </div>
          <div className="limitation-item">
            <span className="limitation-icon">👥</span>
            <span>{t('mgmt.l2', { defaultValue: 'Personnel' })}</span>
          </div>
          <div className="limitation-item">
            <span className="limitation-icon">⏰</span>
            <span>{t('mgmt.l3', { defaultValue: 'Temps/Délais' })}</span>
          </div>
          <div className="limitation-item">
            <span className="limitation-icon">🏢</span>
            <span>{t('mgmt.l4', { defaultValue: 'Autres (Espace de travail...)' })}</span>
          </div>
        </div>
      </section>
  

        {/* Section Project Management */}
<section className="management-section">
  <h2>{t('mgmt.h6', { defaultValue: 'Qu\'est-ce que le Project Management ?' })}</h2>
  <div className="definition-card">
    <p className="quote">
      {t('mgmt.q1', {
        defaultValue: `"Project Management is the application of knowledge, skills, tools and techniques 
        to project activities to meet project requirements"`
      })}
    </p>
    <p className="source">{t('mgmt.q2', { defaultValue: '- Project Management Institute (PMI)' })}</p>
  </div>

  <p className="translation">
    {t('mgmt.p18', {
      defaultValue: `Autrement dit, c'est l'application de connaissances, compétences, outils et techniques 
      dans le cadre des activités du projet afin de satisfaire les exigences du projet.`
    })}
  </p>

  <p>
    {t('mgmt.p19', {
      defaultValue: `Le Project Management = Gestion de projet peut être défini comme une discipline qui permet 
      l'utilisation de moyens et outils nécessaires dans le cadre d'une organisation spécifique, 
      afin de mener un projet à atteindre des objectifs bien définis et dans des délais au préalable 
      fixés. L'atteinte de ces objectifs, généralement contractuels, est couronnée par une Réception.`
    })}
  </p>
</section>

{/* Section Pourquoi certains projets échouent */}
<section className="management-section">
  <h2>{t('mgmt.h7', { defaultValue: 'Pourquoi certains projets échouent ?' })}</h2>

  <div className="stats-grid">
    <div className="stat-card">
      <div className="stat-number">{t('mgmt.s1', { defaultValue: '30%' })}</div>
      <div className="stat-label">{t('mgmt.s2', { defaultValue: 'des projets examinés ont échoué' })}</div>
      <div className="stat-source">
        {t('mgmt.s3', { defaultValue: 'Étude GPM et PA Consulting GROUP (2006)' })}
      </div>
    </div>

    <div className="stat-card">
      <div className="stat-number">{t('mgmt.s4', { defaultValue: '<60%' })}</div>
      <div className="stat-label">{t('mgmt.s5', { defaultValue: 'des projets ont réussi' })}</div>
      <div className="stat-source">
        {t('mgmt.s6', { defaultValue: 'The Standish Group (2011-2015)' })}
      </div>
    </div>
  </div>

  <div className="factors">
    <h3>{t('mgmt.h61', { defaultValue: 'Facteurs d\'échec courants :' })}</h3>
    <ul>
      <li>{t('mgmt.f1', { defaultValue: 'Définition imprécise des objectifs' })}</li>
      <li>{t('mgmt.f2', { defaultValue: 'Estimation incorrecte des délais et budgets' })}</li>
      <li>{t('mgmt.f3', { defaultValue: 'Manque de communication entre les parties prenantes' })}</li>
      <li>{t('mgmt.f4', { defaultValue: 'Changements non contrôlés dans les exigences' })}</li>
      <li>{t('mgmt.f5', { defaultValue: 'Manque de compétences appropriées dans l\'équipe' })}</li>
      <li>{t('mgmt.f6', { defaultValue: 'Risques non identifiés ou mal gérés' })}</li>
    </ul>
  </div>
</section>

{/* Section Notre Approche */}
<section className="management-section">
  <h2>{t('mgmt.h8', { defaultValue: 'Notre Approche' })}</h2>
  <div className="approach-content">
    <p className="intro">
      {t('mgmt.p20', {
        defaultValue: `Les principales raisons d'échec des projets (Définition des objectifs et des exigences, 
        manque de ressources…) peuvent être évitées à temps.`
      })}
    </p>

    <div className="smart-approach">
      <h3>{t('mgmt.h81', { defaultValue: '✅ Méthodologie SMART' })}</h3>
      <p>
        {t('mgmt.p21', {
          defaultValue: `Conscients de cette réalité, nous veillons chez TECASER à ce que notre travail de 
          management soit méthodique, que le projet puisse être présenté de manière 
          <strong> SMART (Spécifique-Mesurable-Acceptable-Réaliste-Temporellement défini)</strong> 
          à l'équipe-projet.`
        })}
      </p>
    </div>

    <div className="philosophy">
      <div className="philosophy-card">
        <h3>{t('mgmt.h82', { defaultValue: 'Notre Philosophie' })}</h3>
        <p className="quote-large">
          {t('mgmt.q3', {
            defaultValue: `"Pour nous : Manager un projet, c'est le gérer ET le réussir."`
          })}
        </p>
      </div>
    </div>

    <section>
      <div className="process-steps">
        <h3>{t('mgmt.h83', { defaultValue: 'Cela passe par :' })}</h3>
        <ul className="process-list">
          <li>{t('mgmt.ps1', { defaultValue: 'Planification, étude détaillée et respect des éléments et délais contractuels.' })}</li>
          <li>{t('mgmt.ps2', { defaultValue: 'Le suivi et l’optimisation des coûts calculés dans la phase d’offre et ceux qui s’ajoutent au cours du projet.' })}</li>
          <li>{t('mgmt.ps3', { defaultValue: 'La gestion optimale des ressources et des contacts entre les différents acteurs dans le projet.' })}</li>
          <li>{t('mgmt.ps4', { defaultValue: 'La supervision de la qualité du produit final.' })}</li>
          <li>{t('mgmt.ps5', { defaultValue: 'L’accompagnement continu du client jusqu’à la réception du projet.' })}</li>
        </ul>
      </div>
    </section>
  </div>
</section>

{/* Section Domaines d'Expertise */}
<section className="management-section">
  <h2>{t('mgmt.h9', { defaultValue: 'Nos Domaines d\'Expertise' })}</h2>

  <div className="expertise-domain">
    <div className="domain-header">
      <h3>{t('mgmt.dh1', { defaultValue: '🚆 Ferroviaire' })}</h3>
    </div>
    <div className="domain-content">
      <p>
        {t('mgmt.p22', {
          defaultValue: `Que ce soit au niveau du système sol ou au niveau du système de bord, nos experts 
          ayant une expérience dans plusieurs pays européens (Belgique, Autriche, Allemagne, 
          Suisse et Italie) peuvent vous accompagner dans la réalisation de projets autour :`
        })}
      </p>
      <ul className="expertise-list">
        <li>{t('mgmt.e1', { defaultValue: 'Systèmes de sécurité ETCS' })}</li>
        <li>{t('mgmt.e2', { defaultValue: 'Systèmes nationaux ATP' })}</li>
        <li>{t('mgmt.e3', { defaultValue: 'Maintenance des véhicules électriques ferroviaires' })}</li>
        <li>{t('mgmt.e4', { defaultValue: 'Gestion de projets d\'infrastructure ferroviaire' })}</li>
        <li>{t('mgmt.e5', { defaultValue: 'Coordination de chantiers ferroviaires complexes' })}</li>
      </ul>
    </div>
  </div>

  <div className="separator-large"></div>

  <div className="expertise-domain">
    <div className="domain-header">
      <h3>{t('mgmt.dh2', { defaultValue: '🤖 Systèmes AGV - Véhicules Auto-guidés' })}</h3>
    </div>
    <div className="domain-content">
      <p>
        {t('mgmt.p23', {
          defaultValue: `Les systèmes AGV (Automated Guided Vehicle) sont des systèmes de gestion de transport 
          de flux conçus autour de véhicules autoguidés et gérés par un système central de gestion.`
        })}
      </p>

      <h4>{t('mgmt.h91', { defaultValue: 'Domaines d\'application :' })}</h4>
      <div className="application-grid">
        <div className="application-item">
          <span className="app-icon">🏭</span>
          <span>{t('mgmt.a1', { defaultValue: 'Industriel' })}</span>
        </div>
        <div className="application-item">
          <span className="app-icon">🏥</span>
          <span>{t('mgmt.a2', { defaultValue: 'Hospitalier' })}</span>
        </div>
        <div className="application-item">
          <span className="app-icon">📦</span>
          <span>{t('mgmt.a3', { defaultValue: 'Logistique' })}</span>
        </div>
      </div>

      <div className="agv-services">
        <h4>{t('mgmt.h92', { defaultValue: 'Nos services AGV :' })}</h4>
        <ul>
          <li>{t('mgmt.as1', { defaultValue: 'Conception et implémentation de systèmes AGV' })}</li>
          <li>{t('mgmt.as2', { defaultValue: 'Intégration avec systèmes existants' })}</li>
          <li>{t('mgmt.as3', { defaultValue: 'Maintenance et optimisation de flottes AGV' })}</li>
          <li>{t('mgmt.as4', { defaultValue: 'Formation des opérateurs et techniciens' })}</li>
          <li>{t('mgmt.as5', { defaultValue: 'Gestion de projets d\'automatisation' })}</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Section CTA */}
<section className="cta-section">
  <div className="cta-content">
    <h2>{t('mgmt.h10', { defaultValue: 'Prêt à réussir votre prochain projet ?' })}</h2>
    <p>{t('mgmt.p30', { defaultValue: 'Notre équipe d\'experts est à votre disposition pour discuter de vos besoins' })}</p>
    <button onClick={handleContactClick} className="cta-button" id='btnn'>{t('contact',{defaultValue:'Contactez-nous'})}</button>
  </div>
</section>
</div>
</div>
);
}

export default ManagementCoordination;

