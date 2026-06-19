import "../style.css";
import logo from "../logoF.png"
import { Link } from 'react-router-dom'; // IMPERATIVO: Importa Link
export function Navbar(){
    return (
       <nav className="navbar">
      <div className="navbar-container">
        
        
        <div className="nav-left">
          <div className="navbar-logo">
            {/* Cliccando sul logo torni alla Home principale */}
        <Link to="/"><img src={logo} className="logo"/></Link>
         
          </div>
          <ul className="nav-links">
            <li><Link to="/chi-siamo"><div className="nav-btn">Chi siamo</div></Link></li>
            <li><Link to="/blog"><div className="nav-btn">Blog</div></Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <div className="lang-selector">
            <span className="globe-icon">🌐</span>
            <span className="arrow-down">⌄</span>
          </div>
          <a href="#demo" className="btn-demo-header">Richiedi Demo</a>
        </div>

      </div>
    </nav>
    );
}