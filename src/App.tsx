import "./style.css";
import "./index.css"
import "./FeatureSection.css";
import "./FaqSection.css";
import "./FooterSection.css";
import image from "./2.png";
import image2 from "./3.png";
import image3 from "./5.png";
import { Navbar } from "./components/Navbar";
import { Gifpart } from "./components/Gifpart";
import timeline from "./timelineprovvisoria.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/Carousel"
import { FaqSection } from "./components/FaqSection";
import { FooterSection } from "./components/FooterSection";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChiSiamo } from './Chi-Siamo'; // La nuova pagina appena creata
export function App() {

  return (
    <div className="app">
      <Router>
      {/* La Navbar resta fuori dalle Routes così è visibile in tutte le pagine! */}
      <Navbar /> 
      
      <Routes>
        {/* Quando l'URL è "/", mostra la Landing Page principale */}
        
        {/* Quando l'URL è "/chi-siamo", mostra la nuova pagina */}
        <Route path="/chi-siamo" element={<ChiSiamo />} />
      </Routes>
    </Router>
      <Navbar />
      <div >
        <h2 className="primo-testo">Smetti di gestire il lavoro.
          <br />Inizia a farlo funzionare.</h2>
        <p >Flowlee trasforma il lavoro quotidiano in priorità, assegnazioni e prossimi <br />
          step, senza chiederti aggiornamenti manuali. <br />
        </p>
      </div>
      <div className="container-button">
        <button className="button">Richiedi Demo</button>
        <button className="button">Come Funziona</button>
      </div>
      <div className="container-img">
        <img src={image} className="img" />
        <div> <img src={image2} className="imghover" /></div>
      </div>
      <div>
        <p className="chisiamo">CHI SIAMO?</p>
      </div>
      <div>
        <h2 className="secondo-testo">Il modo più semplice per <br />
          organizzare il lavoro, senza <br />
          appesantire il team.</h2>
      </div>
      <Gifpart />

      <div>
        <p className="chisiamo">MAI COSÌ SEMPLICE</p>
        <h2 className="secondo-testo">Come funziona </h2>
      </div>
      <div>
        <img src={timeline} className="timeline" />
      </div>
      <div>
        <p className="chisiamo">INTERAGISCI E ORGANIZZA</p>
        <h2 className="secondo-testo">Scrivi, carica, parla. Al resto <br />pensa Flowlee</h2>
      </div>
      <div className="carousel-container">
        <p> Spazio per il carosello, che non funziona</p>
      </div>
      <FaqSection />
      <div className="img-container-2">
        <img src={image3} className="img-2" />
        <h2 className="text-absolute">Scopri come <br/>Flowlee può aiutare <br /> il tuo team</h2>
      </div>
<FooterSection />
    </div>
   
  );
}

export default App;
