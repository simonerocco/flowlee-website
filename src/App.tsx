import { APITester } from "./APITester";
import "./index.css";
import immagine from "./2.png"
import immagine2 from "./3.png"
import logo from "./logo.svg";
import reactLogo from "./react.svg";
import { Navbar } from "../Navbar";
import { Gifpart } from "../Gifpart";

export function App() {
  return (
    <div className="app">
      <Navbar />
      
      <div >
        <h2 className="primo-testo">Smetti di gestire il lavoro.
          <br />Inizia a farlo funzionare.</h2>
        <p>Flowlee trasforma il lavoro quotidiano in priorità, assegnazioni e prossimi <br />
          step, senza chiederti aggiornamenti manuali. <br />
        </p>
      </div>
      <div className="container-button">
        <button className="button">Richiedi Demo</button>
        <button className="button">Come Funziona</button>
      </div>
      <div className="container-img">
        <img src={immagine} className="img" />
        <div> <img src={immagine2} className="imghover" /></div>
      </div>
      <div>
        <p className="chisiamo">CHI SIAMO?</p>
      </div>
      <div>
        <h2 className="secondo-testo">Il modo più semplice per <br />
          organizzare il lavoro, senza <br />
          appesantire il team.</h2>
      </div>
      <Gifpart/>
    </div>
  );
}

export default App;
