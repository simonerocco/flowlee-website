import React from 'react';
import './ChiSiamo.css';
import Gif from './iconf.gif'; // o il percorso reale della tua GIF
import logo from './logoF.png'; // o il percorso reale del tuo logo
import "./FooterSection.css"; // Importa lo stile del footer se necessario
import image3 from "./5.png"; // o il percorso reale della tua immagine
import {Card} from "./components/Card"; // Importa il componente Card se necessario
import "./card.css"; // Importa lo stile del Card se necessario
export function ChiSiamo() {
  return (
    /* 1. Il wrapper esterno a tutta larghezza che racchiude tutta la sezione */
    <div className="chisiamo-page-wrapper">

      {/* 2. Il contenitore interno per i testi (mantiene la larghezza controllata a 800px) */}
      <div className="chisiamo-container">
        <h1 className="chisiamo-title">Il team dietro a Flowlee</h1>
        <p className="chisiamo-subtitle">
          Un team di designer, sviluppatori e AI specialist che sta cambiando il modo in cui si lavora.
        </p>
      </div>

      {/* 3. La GIF posizionata fuori dal blocco di testo, libera di agganciarsi a destra dello schermo */}
      <img src={Gif} alt="Personaggio Flowlee" className="gif-absolute-right" />

      <div className="img2-container">
        <p className="mission">MISSION</p>
        <img src={image3} className="img2" />
        <h2 className="text2">
          Crediamo in una <br /> tecnologia che <br /> libera potenziale, <br />
          non che rallenta.
        </h2>
      </div>
      <Card />
    </div>
  );
}