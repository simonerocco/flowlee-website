import "./style.css";

export function Navbar(){
    return (
       <nav className="navbar">
      <div className="navbar-container">
        
        
        <div className="nav-left">
          <div className="navbar-logo">
            <span className="logo-f">f</span>lowlee
          </div>
          <ul className="nav-links">
            <li><a href="#chisiamo">Chi siamo</a></li>
            <li><a href="#blog">Blog</a></li>
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