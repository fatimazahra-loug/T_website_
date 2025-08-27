// PrestationDetail.js
import { useParams } from 'react-router-dom';

function PrestationDetail() {
    const { category } = useParams();
    
    const prestations = {
        ingenierie: {
            title: "Ingénierie",
            description: "Détails des services d'ingénierie..."
        },
        formation: {
            title: "Formation",
            description: "Détails des services de formation..."
        },
        conseil: {
            title: "Conseil",
            description: "Détails des services de conseil..."
        },
        development: {
            title: "Développement",
            description: "Détails des services de développement..."
        }
    };
    
    const prestation = prestations[category];
    
    if (!prestation) {
        return <div>Prestation non trouvée</div>;
    }
    
    return (
        <div className="prestation-detail">
            <h1>{prestation.title}</h1>
            <p>{prestation.description}</p>
        </div>
    );
}

export default PrestationDetail;