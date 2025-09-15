import './ManagementCoordination.css';

function ManagementCoordination() {
  return (
    <div className="management-page">
      <div className="management-header">
        <h1>Project Management</h1>
      </div>

      <div className="management-content">
        {/* Section Qu'est-ce qu'un projet */}
        <section className="management-section">
          <h2>Qu'est-ce qu'un projet ?</h2>
          <p>
            Donner une définition exacte au terme projet n'est pas aussi simple qu'on le penserait. 
            Cependant, plusieurs spécialistes se sont mis d'accord sur certaines caractéristiques/conditions 
            nécessaires pour qu'un projet en soit un :
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>Objectifs définis</h3>
              <p>Des buts clairs et précis à atteindre</p>
            </div>
            
            <div className="feature-card">
              <h3>L'unicité</h3>
              <p>Chaque projet est unique et spécifique</p>
            </div>
            
            <div className="feature-card">
              <h3>Organisation spécifique</h3>
              <p>Structure adaptée aux besoins du projet</p>
            </div>
          </div>

          <h3>Limitations/Restrictions en termes de :</h3>
          <div className="limitations-list">
            <div className="limitation-item">
              <span className="limitation-icon">💰</span>
              <span>Budget</span>
            </div>
            <div className="limitation-item">
              <span className="limitation-icon">👥</span>
              <span>Personnel</span>
            </div>
            <div className="limitation-item">
              <span className="limitation-icon">⏰</span>
              <span>Temps/Délais</span>
            </div>
            <div className="limitation-item">
              <span className="limitation-icon">🏢</span>
              <span>Autres (Espace de travail...)</span>
            </div>
          </div>
        </section>

        {/* Section Project Management */}
        <section className="management-section">
          <h2>Qu'est-ce que le Project Management ?</h2>
          <div className="definition-card">
            <p className="quote">
              "Project Management is the application of knowledge, skills, tools and techniques 
              to project activities to meet project requirements"
            </p>
            <p className="source">- Project Management Institute (PMI)</p>
          </div>
          
          <p className="translation">
            Autrement dit, c'est l'application de connaissances, compétences, outils et techniques 
            dans le cadre des activités du projet afin de satisfaire les exigences du projet.
          </p>
          
          <p>
            Le Project Management = Gestion de projet peut être défini comme une discipline qui permet 
            l'utilisation de moyens et outils nécessaires dans le cadre d'une organisation spécifique, 
            afin de mener un projet à atteindre des objectifs bien définis et dans des délais au préalable 
            fixés. L'atteinte de ces objectifs, généralement contractuels, est couronnée par une Réception.
          </p>
        </section>

        {/* Section Pourquoi certains projets échouent */}
        <section className="management-section">
          <h2>Pourquoi certains projets échouent ?</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">30%</div>
              <div className="stat-label">des projets examinés ont échoué</div>
              <div className="stat-source">
                Étude GPM et PA Consulting GROUP (2006)
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">{"<60%"}</div>
              <div className="stat-label">des projets ont réussi</div>
              <div className="stat-source">
                The Standish Group (2011-2015)
              </div>
            </div>
          </div>
          
          <div className="factors">
            <h3>Facteurs d'échec courants :</h3>
            <ul>
              <li>Définition imprécise des objectifs</li>
              <li>Estimation incorrecte des délais et budgets</li>
              <li>Manque de communication entre les parties prenantes</li>
              <li>Changements non contrôlés dans les exigences</li>
              <li>Manque de compétences appropriées dans l'équipe</li>
              <li>Risques non identifiés ou mal gérés</li>
            </ul>
          </div>
        </section>

{/* Section Notre Approche */}
<section className="management-section">
  <h2>Notre Approche</h2>
  <div className="approach-content">
    <p className="intro">
      Les principales raisons d'échec des projets (Définition des objectifs et des exigences, 
      manque de ressources…) peuvent être évitées à temps.
    </p>
    
    <div className="smart-approach">
      <h3>✅ Méthodologie SMART</h3>
      <p>
        Conscients de cette réalité, nous veillons chez TECASER à ce que notre travail de 
        management soit méthodique, que le projet puisse être présenté de manière 
        <strong> SMART (Spécifique-Mesurable-Acceptable-Réaliste-Temporellement défini)</strong> 
        à l'équipe-projet.
      </p>
    </div>

    <div className="philosophy">
      <div className="philosophy-card">
        <h3>Notre Philosophie</h3>
        <p className="quote-large">
          "Pour nous : Manager un projet, c'est le gérer ET le réussir."
        </p>
      </div>
    </div>

        <section>
      <div className="process-steps">
        <h3>Cela passe par :</h3>
        <ul className="process-list">
          <li>Planification, étude détaillée et respect des éléments et délais contractuels.</li>
          <li>Le suivi et l’optimisation des coûts calculés dans la phase d’offre et ceux qui s’ajoutent au cours du projet.</li>
          <li>La gestion optimale des ressources et des contacts entre les différents acteurs dans le projet.</li>
          <li>La supervision de la qualité du produit final.</li>
          <li>L’accompagnement continu du client jusqu’à la réception du projet.</li>
        </ul>
      </div>
    </section>
      </div>
 
</section>

{/* Section Domaines d'Expertise */}
<section className="management-section">
  <h2>Nos Domaines d'Expertise</h2>
  
  <div className="expertise-domain">
    <div className="domain-header">
      <h3>🚆 Ferroviaire</h3>
    </div>
    <div className="domain-content">
      <p>
        Que ce soit au niveau du système sol ou au niveau du système de bord, nos experts 
        ayant une expérience dans plusieurs pays européens (Belgique, Autriche, Allemagne, 
        Suisse et Italie) peuvent vous accompagner dans la réalisation de projets autour :
      </p>
      <ul className="expertise-list">
        <li>Systèmes de sécurité ETCS</li>
        <li>Systèmes nationaux ATP</li>
        <li>Maintenance des véhicules électriques ferroviaires</li>
        <li>Gestion de projets d'infrastructure ferroviaire</li>
        <li>Coordination de chantiers ferroviaires complexes</li>
      </ul>
    </div>
  </div>

  <div className="separator-large"></div>

  <div className="expertise-domain">
    <div className="domain-header">
      <h3>🤖 Systèmes AGV - Véhicules Auto-guidés</h3>
    </div>
    <div className="domain-content">
      <p>
        Les systèmes AGV (Automated Guided Vehicle) sont des systèmes de gestion de transport 
        de flux conçus autour de véhicules autoguidés et gérés par un système central de gestion.
      </p>
      
      <h4>Domaines d'application :</h4>
      <div className="application-grid">
        <div className="application-item">
          <span className="app-icon">🏭</span>
          <span>Industriel</span>
        </div>
        <div className="application-item">
          <span className="app-icon">🏥</span>
          <span>Hospitalier</span>
        </div>
        <div className="application-item">
          <span className="app-icon">📦</span>
          <span>Logistique</span>
        </div>
      </div>
      
      <div className="agv-services">
        <h4>Nos services AGV :</h4>
        <ul>
          <li>Conception et implémentation de systèmes AGV</li>
          <li>Intégration avec systèmes existants</li>
          <li>Maintenance et optimisation de flottes AGV</li>
          <li>Formation des opérateurs et techniciens</li>
          <li>Gestion de projets d'automatisation</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Section CTA */}
<section className="cta-section">
  <div className="cta-content">
    <h2>Prêt à réussir votre prochain projet ?</h2>
    <p>Notre équipe d'experts est à votre disposition pour discuter de vos besoins</p>
    <button className="cta-button">Contactez-nous</button>
  </div>
</section>
</div>
</div>
);
}

export default ManagementCoordination;

