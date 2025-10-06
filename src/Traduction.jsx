import './Traduction.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Traduction() {
  const  { t}= useTranslation();
  const navigate = useNavigate(); // Initialisez useNavigate

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="traduction-page">
      <div className="traduction-header">
        <h1>{t('trd.h1', { defaultValue: 'Traduction Professionnelle' })}</h1>
      </div>

      <div className="traduction-content">
        {/* Section Introduction */}
        <section className="traduction-section">
          <div className="intro-quote">
            <blockquote>
              {t('trd.q1', { defaultValue: '"Traduttore, traditore"' })}
              <cite>{t('trd.q2', { defaultValue: '— Adage italien (Traducteur, traître)' })}</cite>
            </blockquote>
            <p className="intro-text">
              {t('trd.p1', {
                defaultValue: `Autrement dit, traduire c'est trahir. On penserait que traduire un texte 
                d'une langue à une autre ne serait pas aussi simple…`
              })}
            </p>
          </div>

          <div className="vision-section">
            <h2>{t('trd.h2', { defaultValue: 'Nous partageons cette vision !' })}</h2>
            <p>
              {t('trd.p2', {
                defaultValue: `C'est principalement pour cette raison que nos experts en traduction professionnelle 
                veillent soigneusement à ce que chaque traduction effectuée par nos soins, soit faite 
                de manière très fine, et qui prend en compte le contexte ainsi que le cadre socio-culturel 
                du texte en question.`
              })}
            </p>
          </div>
        </section>

        {/* Section Notre Slogan */}
        <section className="traduction-section slogan-section">
          <div className="slogan-container">
            <h2>{t('trd.h3', { defaultValue: 'Notre slogan pour la traduction qualitative :' })}</h2>
            <div className="slogan-text">
              <div className="slogan-process">
                <div className="process-step">
                  <div className="step-icon">🧶</div>
                  <h3>{t('trd.h4', { defaultValue: 'Nous détricotons' })}</h3>
                  <p>{t('trd.ps1', { defaultValue: 'un texte dans sa langue d\'origine' })}</p>
                </div>
                <div className="process-arrow">→</div>
                <div className="process-step">
                  <div className="step-icon">🧵</div>
                  <h3>{t('trd.h5', { defaultValue: 'Nous retricotons' })}</h3>
                  <p>{t('trd.ps2', { defaultValue: 'dans la langue cible' })}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Langues */}
        <section className="traduction-section">
          <h2>{t('trd.h6', { defaultValue: 'Nos Langues de Traduction' })}</h2>
          <p className="languages-intro">
            {t('trd.p3', {
              defaultValue: `Nous mettons à votre service nos compétences de traduction de et vers les langues suivantes :`
            })}
          </p>

          <div className="languages-grid">
            <div className="language-card">
              <div className="language-flag">🇩🇪</div>
              <h3>{t('trd.lh1', { defaultValue: 'ALLEMAND' })}</h3>
              <p>{t('trd.lp1', { defaultValue: 'Traduction technique et professionnelle' })}</p>
            </div>

            <div className="language-card">
              <div className="language-flag">🇫🇷</div>
              <h3>{t('trd.lh2', { defaultValue: 'FRANÇAIS' })}</h3>
              <p>{t('trd.lp2', { defaultValue: 'Traduction précise et contextuelle' })}</p>
            </div>

            <div className="language-card">
              <div className="language-flag">🇸🇦</div>
              <h3>{t('trd.lh3', { defaultValue: 'ARABE' })}</h3>
              <p>{t('trd.lp3', { defaultValue: 'Traduction respectueuse des nuances culturelles' })}</p>
            </div>

            <div className="language-card">
              <div className="language-flag">🇬🇧</div>
              <h3>{t('trd.lh4', { defaultValue: 'ANGLAIS' })}</h3>
              <p>{t('trd.lp4', { defaultValue: 'Traduction internationale de qualité' })}</p>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="traduction-section contact-section">
          <div className="contact-container">
            <h2>{t('trd.h7', { defaultValue: 'N\'hésitez pas à nous contacter !' })}</h2>
            <p className="contact-text">
              {t('trd.p4', {
                defaultValue: `Pour un renseignement ou un devis, notre équipe est à votre disposition pour 
                discuter de vos besoins en traduction professionnelle.`
              })}
            </p>

            <div className="disclaimer">
              <div className="disclaimer-icon">⚠️</div>
              <div className="disclaimer-text">
                <strong>{t('trd.d1', { defaultValue: 'Important :' })}</strong> {t('trd.d2', {
                  defaultValue: `Nous souhaitons signaler que nous ne sommes 
                  <strong> PAS</strong> des traducteurs assermentés.`
                })}
              </div>
            </div>

            <div className="contact-actions">
              <button onClick={handleContactClick} className="contact-button secondary">
                {t('trd.b1', { defaultValue: 'Nous contacter' })}
              </button>
            </div>
          </div>
        </section>

        {/* Section Domaines d'Expertise */}
        <section className="traduction-section">
          <h2>{t('trd.h8', { defaultValue: 'Nos Domaines de Spécialisation' })}</h2>
          <div className="domains-grid">
            <div className="domain-item">
              <h4>{t('trd.dh1', { defaultValue: '📄 Documents techniques' })}</h4>
              <p>{t('trd.dp1', { defaultValue: 'Manuels, notices, documentation technique' })}</p>
            </div>
            <div className="domain-item">
              <h4>{t('trd.dh2', { defaultValue: '📊 Documents commerciaux' })}</h4>
              <p>{t('trd.dp2', { defaultValue: 'Contrats, propositions, présentations' })}</p>
            </div>
            <div className="domain-item">
              <h4>{t('trd.dh3', { defaultValue: '🌐 Contenu web' })}</h4>
              <p>{t('trd.dp3', { defaultValue: 'Sites internet, blogs, contenus marketing' })}</p>
            </div>
            <div className="domain-item">
              <h4>{t('trd.dh4', { defaultValue: '📝 Documents administratifs' })}</h4>
              <p>{t('trd.dp4', { defaultValue: 'Rapports, procédures, documentation' })}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Traduction;