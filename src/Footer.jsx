import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* Section supérieure - 3 colonnes */}
            <div className="footer-top">
                <div className="footer-content-horizontal">
                    {/* Section TECASER */}
                    <div className="footer-section">
                        <h3>TECASER Sar-1</h3>
                        <div className="contact-info">
                            <p>
                                <strong>Téléphones :</strong><br />
                                +212 8 08 60 28 69<br />
                                +212 6 67 08 56 72
                            </p>
                            <p>
                                <strong>Email :</strong><br />
                                <a href="mailto:contact@teca-ser.com">contact@teca-ser.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Section Réseaux */}
                    <div className="footer-section">
                        <h3>Réseaux</h3>
                        <div className="contact-info">
                            <p>
                                <strong>Site web :</strong><br />
                                <a href="https://www.teca-ser.com" target="_blank" rel="noopener noreferrer">
                                    www.teca-ser.com
                                </a>
                            </p>
                            <p>
                                <strong>LinkedIn :</strong><br />
                                <a href="https://www.linkedin.com/company/tecaser/" target="_blank" rel="noopener noreferrer">
                                    linkedin.com/company/teca-ser
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Section Carte - Remplace les infos fiscales */}
                    <div className="footer-section">
                        <h3>Localisation</h3>
                        <div className="map-container-inline">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.216050713504!2d-6.589722323437202!3d34.26050897300619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda757dcee99236d%3A0x3f5a5c2c8b5b5b5b!2s15%20Centre%20d%27Affaires%2C%20Av.%20Hassan%20II%2C%20K%C3%A9nitra%2014000!5e0!3m2!1sfr!2sma!4v1712345678901!5m2!1sfr!2sma"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localisation TECASER"
                            ></iframe>
                        </div>
                        <div className="location-info-inline">
                            <p><strong>📍 15 Centre d'Affaires, Av. Hassan II, Kénitra 14000</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                <p>&copy; 2025 TECASER - Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;