import { APITester } from "./APITester";
import "./index.css";
import immagine from "./1.png"
import logo from "./logo.svg";
import reactLogo from "./react.svg";
import { Navbar } from "../Navbar";

export function App() {
  return (
    <div className="app">
      <Navbar/>
     <h2 style={{paddingTop: 50}}>Smetti di gestire il lavoro. 
      <br />Inizia a farlo funzionare.</h2>
      <p>Flowlee trasforma il lavoro quotidiano in priorità, assegnazioni e prossimi <br />
      step, senza chiederti aggiornamenti manuali. <br />
      <button style={{backgroundColor: "white", color: "black", borderColor: "purple", borderRadius: 30, borderWidth: 1}}>Richiedi Demo</button> <span>
      <button style={{backgroundColor: "white", color: "black", borderRadius: 30, borderWidth: 1}}>Come Funziona</button></span>
      </p>

      <img src={immagine} style={{width: 1000}} />
    </div>
  );
}

export default App;
