import "../style.css"
import '../FeatureSection.css';
import image from "../image.png"
import image2 from "../4.png"
export function Gifpart(){
    return (
       <section className="feature-container">
      <div className="feature-left">
        <span className="feature-uppercase-tag">Tanti modi di lavorare, un sistema per tenerli insieme</span>
<h2 className="feature-main-title">Il lavoro in team,<br />davvero semplice</h2>
<p className="feature-description">
  Messaggi, call e file sparsi ovunque. <br />Grazie a Flowlee quello che succede nel team <br />
  diventa automaticamente task, timeline e priorità. <br />Smetti di rincorrere gli aggiornamenti.
</p>
<div className="assistant-card">
  <img src={image2} className="assistant-img" />
  <div className="assistant-content">
    <span className="assistant-tag">Come un assistente, ma per il <br /> team.</span>
    <p className="assistant-text">Tutto si aggiorna, senza <br />
    rincorrere nessuno.</p>
  </div>
</div>
</div>
      <div className="feature-right">
        <img src={image} className="assistant-img-right" />
      </div>
    </section>
    )
}