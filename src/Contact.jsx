import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function Contact() {
  const  { t}= useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [lastSubmission, setLastSubmission] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value); // Set to true if CAPTCHA is completed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(formData.email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }

    // Check for recent submissions (e.g., within 5 minutes)
    const now = new Date();
    if (lastSubmission && (now - lastSubmission) < 5 * 60 * 1000) {
      alert('Veuillez attendre 5 minutes avant de soumettre à nouveau.');
      return;
    }

    // Check if CAPTCHA is verified
    if (!captchaVerified) {
      alert('Veuillez compléter le CAPTCHA pour vérifier que vous n\'êtes pas un robot.');
      return;
    }

    emailjs.init('g2jP-NOML4Zb6kaSK');

    emailjs.send('service_dape8jf', 'template_ckf4wem', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      'g-recaptcha-response': recaptchaRef.current.getValue()
    })
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Merci pour votre message! Nous vous répondrons bientôt.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setLastSubmission(new Date());
        setCaptchaVerified(false);
        recaptchaRef.current.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
  };

  return (
    <div className="contact-page">
      {/* En-tête de la page */}
      <div className="contact-header">
        <div className="container">
          <h1>{t('contact',{defaultValue:'Contactez-nous'})}</h1>
          <p>{t('p6',{defaultValue:'Nous sommes à votre écoute pour répondre à toutes vos questions'})}</p>
        </div>
      </div>

      <div className="container contact-container">
        <div className="contact-content">
        </div>

        {/* Formulaire de contact */}
        <div className="contact-form-container">
          <h2>{t('msg',{defaultValue:'Envoyez-nous un message'})}</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t('nom',{defaultValue:'Nom complet'})} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('email',{defaultValue:'Email'})} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">{t('tel',{defaultValue:'Téléphone'})}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('message',{defaultValue:'Message'})} *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeUO9QrAAAAAG5lJdIRXHm-vuElklD68s2G9xof" // Replace with your reCAPTCHA v2 site key
                onChange={handleCaptchaChange}
              />
            </div>

            <button type="submit" className="submit-btn">{t('btn',{defaultValue:'Envoyer le message'})}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;