import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* Section supérieure - 3 colonnes */}
            <div className="footer-top">
                <div className="footer-content-horizontal">
                    {/* Section TECASER */}
                    <div className="footer-section">
                        <h3>TECASER Sarl</h3>
                        <div className="contact-info">
                            <p>
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
                    <div className="footer-section " id ="res">
                      
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