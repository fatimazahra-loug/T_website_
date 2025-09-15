import './RedactionReview.css';
import { useNavigate } from 'react-router-dom';

function RedactionReview() {
    const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="redaction-page">
      <div className="redaction-header">
        <h1>Rédaction & Review</h1>
        <p className="redaction-subtitle">
          Service professionnel de rédaction, correction et mise en forme de documents
        </p>
      </div>

      <div className="redaction-content">
        {/* Section Introduction */}
        <section className="redaction-intro">
          <div className="intro-questions">
            <h2>Vous avez besoin d'assistance pour vos documents ?</h2>
            
            <div className="question-list">
              <div className="question-item">
                <div className="question-icon">📝</div>
                <div className="question-text">
                  <p>Vous envisagez de rédiger des documents à caractère administratif ou technique ?</p>
                </div>
              </div>

              <div className="question-item">
                <div className="question-icon">📊</div>
                <div className="question-text">
                  <p>Vous avez envie de synthétiser des documents, de les transmettre en tableaux mieux lisibles et mieux présentables ?</p>
                </div>
              </div>

              <div className="question-item">
                <div className="question-icon">⏰</div>
                <div className="question-text">
                  <p>Vous n'avez pas le temps ou le personnel pour rédiger un mémoire, un support de cours ou de formation ?</p>
                </div>
              </div>

              <div className="question-item">
                <div className="question-icon">✉️</div>
                <div className="question-text">
                  <p>La rédaction de mails vous semble prendre plus de temps et ne vous laisse plus le temps de vous occuper des tâches plus spéciales ?</p>
                </div>
              </div>
            </div>

            <div className="conclusion">
              <div className="conclusion-icon">✅</div>
              <div className="conclusion-text">
                <h3>Si la réponse à une de ces questions est OUI, alors vous êtes à la bonne adresse !</h3>
                <p>Nous avons la solution pour vous : Confiez-nous cette tâche et libérez-vous du temps et des ressources pour autre chose.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Services */}
        <section className="services-section">
          <h2>Nos Services de Rédaction</h2>
          <p className="services-intro">
            Nous nous occupons de toutes les étapes de la création et de l'amélioration de vos documents
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖋️</div>
              <h3>Rédaction de documents</h3>
              <ul>
                <li>Documents administratifs</li>
                <li>Documents techniques</li>
                <li>Supports de formation</li>
                <li>Mémoires et rapports</li>
                <li>Courriers professionnels</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Relecture & Correction</h3>
              <ul>
                <li>Correction orthographique</li>
                <li>Vérification grammaticale</li>
                <li>Amélioration stylistique</li>
                <li>Uniformisation du style</li>
                <li>Vérification de la cohérence</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📄</div>
              <h3>Adaptation & Mise en forme</h3>
              <ul>
                <li>Changement de formats</li>
                <li>Amélioration de la présentation</li>
                <li>Création de tableaux synthétiques</li>
                <li>Mise en page professionnelle</li>
                <li>Conversion entre formats</li>
              </ul>
            </div>
          </div>
        </section>

        
    
        {/* Section CTA */}
        <section className="redaction-cta">
          <div className="cta-content">
            <h2>Prêt à libérer du temps pour l'essentiel ?</h2>
            <p>
              Prenez contact avec nous et nous nous ferons plaisir de pouvoir vous assister !
              Confiez-nous vos documents et concentrez-vous sur vos activités principales.
            </p>
            <div className="cta-buttons">
              <button className="cta-button secondary" onClick={handleContactClick}>Nous contacter</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RedactionReview;