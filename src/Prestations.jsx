// Prestations.js
import { Link } from 'react-router-dom';

function Prestations() {
    return (
        <div className="prestations-page">
            <h1>Nos Prestations</h1>
            <div className="prestations-list">
                <div className="prestation-item">
                    <h2><Link to="/prestations/ingenierie">Ingénierie</Link></h2>
                    <p>Description des services d'ingénierie...</p>
                </div>
                <div className="prestation-item">
                    <h2><Link to="/prestations/formation">Formation</Link></h2>
                    <p>Description des services de formation...</p>
                </div>
                <div className="prestation-item">
                    <h2><Link to="/prestations/conseil">Conseil</Link></h2>
                    <p>Description des services de conseil...</p>
                </div>
                <div className="prestation-item">
                    <h2><Link to="/prestations/development">Développement</Link></h2>
                    <p>Description des services de développement...</p>
                </div>
            </div>
        </div>
    );
}

export default Prestations;