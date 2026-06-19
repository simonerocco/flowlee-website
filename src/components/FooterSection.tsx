import React, { useState } from 'react';
import '../FooterSection.css';
import logo from '../logoF.png'; 

export function FooterSection() {
  // 1. STATI DEL FORM: Creiamo tre variabili di stato per salvare in tempo reale cosa scrive l'utente.
  // All'inizio sono stringhe vuote ('').
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  // 2. FUNZIONE DI INVIO: Viene intercettata quando l'utente preme il tasto "Submit"
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Blocca il caricamento della pagina (comportamento nativo dei vecchi form HTML)
    
    // In questo blocco invieresti i dati registrati negli stati verso un database o un'API
    console.log("Dati pronti per il server:", { name, email, location });
  };

  return (
    // 3. IL GUSCIO GLOBALE: Questo contenitore regge l'intera sezione e lo sfondo viola in CSS
    <div className="footer-global-wrapper">
      
      {/* ==========================================
         A. IL FORM DI CONTATTO (Zona Superiore)
         ========================================== */}
      <section className="contact-form-section">
        {/* Agganciamo la nostra funzione all'evento onSubmit del form */}
        <form onSubmit={handleSubmit} className="contact-form">
          
          {/* Gruppo Input: Nome */}
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Jane Smith" 
              value={name} // Legge il valore dallo stato React
              onChange={(e) => setName(e.target.value)} // Quando l'utente scrive, aggiorna lo stato
              required // Impedisce l'invio se il campo è vuoto
            />
          </div>

          {/* Gruppo Input: Email */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="jane@framer.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Gruppo Input: Menu a tendina (Select) */}
          <div className="input-group">
            <label htmlFor="location">Location</label>
            <select 
              id="location" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              {/* Opzione segnaposto: disabilitata così l'utente è costretto a scegliere un'altra opzione */}
              <option value="" disabled selected>Select...</option>
              <option value="italy">Italy</option>
              <option value="abroad">Abroad</option>
            </select>
          </div>

          {/* Il bottone di tipo 'submit' attiva automaticamente l'onSubmit del form parente */}
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </section>

      {/* ==========================================
         B. LA GRANDE CARD DEL FOOTER (Zona Inferiore)
         ========================================== */}
      <footer className="main-footer-card">
        
        {/* Riga superiore: Divisa tra Info Brand e Liste di Link */}
        <div className="footer-top-row">
          
          {/* Sotto-colonna: Logo e descrizione aziendale */}
          <div className="footer-brand-column">
            <img src={logo} className="footer-logo" alt="Flowlee Logo" />
            <p className="footer-tagline">
              Your team's extra pair of hands.<br />
              Built to get things done better.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Sotto-colonna: Contenitore di tutte le liste di link (Pages, Information, Contact) */}
          <div className="footer-links-wrapper">
            <div className="footer-column">
              <h4>PAGES</h4>
              <a href="#home">Home</a>
              <a href="#blog">Blog</a>
            </div>
            
            <div className="footer-column">
              <h4>INFORMATION</h4>
             <a href="#chisiamo">Chi Siamo</a>
             <a href="#privacy">Privacy </a>
              <a href="#terms">Terms of use</a>
              <a href="#404">404</a>
            </div>

            <div className="footer-column">
              <h4>CONTACT</h4>
              <a href="mailto:info@flowlee.com">info@flowlee.com</a>
              <a href="#lavoraconnoi">Lavora con noi</a>
            </div>
          </div>

        </div>

        {/* Separatore orizzontale interno */}
        <hr className="footer-divider" />

        {/* Riga inferiore: Dati Fiscali e Copyright legali */}
        <div className="footer-bottom-row">
          <p>
            © 2026 Flowlee srl<br />
            P.IVA: 14458540961<br />
            Corso Venezia 45, 20121, Milano (MI)<br />
            Capitale Sociale i.v.: 10.000€<br />
            <a href="mailto:flowlee@legalmail.it">flowlee@legalmail.it</a>
          </p>
        </div>

      </footer>
    </div>
  );
}