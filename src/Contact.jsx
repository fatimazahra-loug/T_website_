import { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init('g2jP-NOML4Zb6kaSK'); 

    emailjs.send('service_0xbbyyo', 'template_nje916c', { 
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
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
          <h1>Contactez-nous</h1>
          <p>Nous sommes à votre écoute pour répondre à toutes vos questions</p>
        </div>
      </div>

      <div className="container contact-container">
        <div className="contact-content">
          
            </div>

          {/* Formulaire de contact */}
          <div className="contact-form-container">
            <h2>Envoyez-nous un message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
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
                  <label htmlFor="email">Email *</label>
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
                  <label htmlFor="phone">Téléphone</label>
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
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Envoyer le message</button>
            </form>
          </div>
        </div>

        
      </div>
   
    
  );
}

export default Contact;