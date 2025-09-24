import { motion } from 'framer-motion';
import './About.css';
// Importez votre image - ajustez le chemin selon votre structure
import aboutImage from './assets/img.PNG'; 

function About() {
    return (
        <div className="about-container">
            {/* Section Hero */}
            <motion.section 
                className="about-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="about-hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        À Propos de TECASER
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Votre partenaire de confiance pour les services techniques et administratifs
                    </motion.p>
                </div>
            </motion.section>

            {/* Section Contenu Principal */}
            <section className="about-content">
                <div className="about-grid">
                    {/* Image */}
                    <motion.div 
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <img 
                            src={aboutImage} 
                            alt="Équipe TECASER - Services techniques et administratifs" 
                            className="about-img"
                        />
                    </motion.div>

                    {/* Texte */}
                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>Notre Histoire</h2>
                        <p>
                        TECASER (Technical and Administrative Services) a été créée en Mars 2023 en s’appuyant sur une équipe de collaborateurs riches d’une dizaine d’années d’expérience dans plusieurs pays européens (Belgique, Allemagne, Suisse, Autriche, France, Italie) et dans des domaines différents (Ferroviaire, Véhicules auto-guidés-AGV, Métallurgie), et partageant la même vision de travail et les mêmes valeurs professionnelles et interpersonnelles.
                        </p>


                        <div className="about-values">
                            <h3>Nos Valeurs</h3>
                            <p>
                            Dans un monde où les clients et les partenaires deviennent de plus en plus exigeants en ce qui concerne la qualité et les délais de livraison, TECASER se positionne en tant que partenaire international de services techniques (Management de projets, Coordination, Consulting et Formation) et administratifs (Traductions professionnelles) fournis dans quarte différentes langues (Français, Anglais, Allemand, et Arabe).

Notre vision de services se veut révolutionnaire dans le sens où elle répond à des besoins réels, spécifiques et bien ciblés d’entreprises et de personnes dans le monde entier.

Nous estimons que nos collaborateurs/clients ont le droit à un travail de qualité. En nous confiant des tâches d’assistance ou de gestion, nous permettons à nos collaborateurs de se focaliser sur des tâches plus spéciales au sein de leurs entreprises.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Statistiques
            <motion.section 
                className="about-stats"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                <div className="stats-grid">
                    <motion.div 
                        className="stat-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>5+</h3>
                        <p>Ans d'expérience</p>
                    </motion.div>
                    <motion.div 
                        className="stat-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>50+</h3>
                        <p>Clients satisfaits</p>
                    </motion.div>
                    <motion.div 
                        className="stat-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3>100+</h3>
                        <p>Projets réalisés</p>
                    </motion.div>
                </div>
            </motion.section> */}
        </div>
    );
}

export default About;