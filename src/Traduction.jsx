import './Traduction.css';
import { useNavigate } from 'react-router-dom';

function Traduction() {

    const navigate = useNavigate(); // Initialisez useNavigate

    const handleContactClick = () => {
      navigate('/contact');
    }; 


  return (
    <div className="traduction-page">
      <div className="traduction-header">
        <h1>Traduction Professionnelle</h1>
      </div>

      <div className="traduction-content">
        {/* Section Introduction */}
        <section className="traduction-section">
          <div className="intro-quote">
            <blockquote>
              "Traduttore, traditore"
              <cite>— Adage italien (Traducteur, traître)</cite>
            </blockquote>
            <p className="intro-text">
              Autrement dit, traduire c'est trahir. On penserait que traduire un texte 
              d'une langue à une autre ne serait pas aussi simple…
            </p>
          </div>

          <div className="vision-section">
            <h2>Nous partageons cette vision !</h2>
            <p>
              C'est principalement pour cette raison que nos experts en traduction professionnelle 
              veillent soigneusement à ce que chaque traduction effectuée par nos soins, soit faite 
              de manière très fine, et qui prend en compte le contexte ainsi que le cadre socio-culturel 
              du texte en question.
            </p>
          </div>
        </section>

        {/* Section Notre Slogan */}
        <section className="traduction-section slogan-section">
          <div className="slogan-container">
            <h2>Notre slogan pour la traduction qualitative :</h2>
            <div className="slogan-text">
              <div className="slogan-process">
                <div className="process-step">
                  <div className="step-icon">🧶</div>
                  <h3>Nous détricotons</h3>
                  <p>un texte dans sa langue d'origine</p>
                </div>
                <div className="process-arrow">→</div>
                <div className="process-step">
                  <div className="step-icon">🧵</div>
                  <h3>Nous retricotons</h3>
                  <p>dans la langue cible</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Langues */}
        <section className="traduction-section">
          <h2>Nos Langues de Traduction</h2>
          <p className="languages-intro">
            Nous mettons à votre service nos compétences de traduction de et vers les langues suivantes :
          </p>
          
          <div className="languages-grid">
            <div className="language-card">
              <div className="language-flag">🇩🇪</div>
              <h3>ALLEMAND</h3>
              <p>Traduction technique et professionnelle</p>
            </div>
            
            <div className="language-card">
              <div className="language-flag">🇫🇷</div>
              <h3>FRANÇAIS</h3>
              <p>Traduction précise et contextuelle</p>
            </div>
            
            <div className="language-card">
              <div className="language-flag">🇸🇦</div>
              <h3>ARABE</h3>
              <p>Traduction respectueuse des nuances culturelles</p>
            </div>
            
            <div className="language-card">
              <div className="language-flag">🇬🇧</div>
              <h3>ANGLAIS</h3>
              <p>Traduction internationale de qualité</p>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="traduction-section contact-section">
          <div className="contact-container">
            <h2>N'hésitez pas à nous contacter !</h2>
            <p className="contact-text">
              Pour un renseignement ou un devis, notre équipe est à votre disposition pour 
              discuter de vos besoins en traduction professionnelle.
            </p>
            
            <div className="disclaimer">
              <div className="disclaimer-icon">⚠️</div>
              <div className="disclaimer-text">
                <strong>Important :</strong> Nous souhaitons signaler que nous ne sommes 
                <strong> PAS</strong> des traducteurs assermentés.
              </div>
            </div>
            
            <div className="contact-actions">
              <button onClick={handleContactClick} className="contact-button secondary">Nous contacter</button>
            </div>
          </div>
        </section>

        {/* Section Domaines d'Expertise */}
        <section className="traduction-section">
          <h2>Nos Domaines de Spécialisation</h2>
          <div className="domains-grid">
            <div className="domain-item">
              <h4>📄 Documents techniques</h4>
              <p>Manuels, notices, documentation technique</p>
            </div>
            <div className="domain-item">
              <h4>📊 Documents commerciaux</h4>
              <p>Contrats, propositions, présentations</p>
            </div>
            <div className="domain-item">
              <h4>🌐 Contenu web</h4>
              <p>Sites internet, blogs, contenus marketing</p>
            </div>
            <div className="domain-item">
              <h4>📝 Documents administratifs</h4>
              <p>Rapports, procédures, documentation</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Traduction;