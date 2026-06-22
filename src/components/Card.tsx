import "../style.css";
import ProfileImg from '../camilla.jpeg';
export function Card() {
  return (
    <div className="team-card">
      {/* 1. SEZIONE SUPERIORE: Immagine e Badge */}
      <div className="card-image-wrapper">
        {/* Il badge scuro in alto a sinistra */}
        <span className="badge-category">Sales</span>
        {/* La foto profilo del membro del team */}
        <img src={ProfileImg} alt="Camilla Crucito" className="profile-img" />
      </div>

      {/* 2. SEZIONE INFERIORE: Dettagli e Testi */}
      <div className="card-info">
        <h3 className="member-name">Camilla Crucito</h3>
        <p className="member-role">CEO and co-founder</p>
        
        {/* Il link di Linkedin con l'emoji del razzo */}
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin-link">
          Linkedin <span className="rocket-emoji">🚀</span>
        </a>
      </div>

       <div className="card-image-wrapper">
        {/* Il badge scuro in alto a sinistra */}
        <span className="badge-category">Sales</span>
        {/* La foto profilo del membro del team */}
        <img src={ProfileImg} alt="Camilla Crucito" className="profile-img" />
      </div>

      {/* 2. SEZIONE INFERIORE: Dettagli e Testi */}
      <div className="card-info">
        <h3 className="member-name">Camilla Crucito</h3>
        <p className="member-role">CEO and co-founder</p>
        
        {/* Il link di Linkedin con l'emoji del razzo */}
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin-link">
          Linkedin <span className="rocket-emoji">🚀</span>
        </a>
      </div>
    </div>
  );
}