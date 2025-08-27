import { Link } from 'react-router-dom'; // Importez Link
import logo from './assets/logo .png';

function Header() {
    return (
       <nav>
        <div className="logo">
            <img src={logo} alt="logo" />
            <span className="title">TECASER</span>
            <span className="subtext">Technical and Administrative Services</span>
        </div>
        <div className="menu">
        <ul>
          <li><Link to="/">Accueil</Link></li>       
          <li> 
          <Link to="/prestations">Prestations</Link>
          </li> 
          <li><Link to="/contact">Contact</Link></li>   
          <li><Link to="/about">A propos de nous</Link></li>
          <li><Link to="/conditions">Conditions générales</Link></li> 
        </ul>
        </div>
       </nav>
    )
}

export default Header;