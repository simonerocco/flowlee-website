import React, { useState } from 'react';
import '../FaqSection.css';

// 1. Definiamo la struttura dei nostri dati (Array di Oggetti)
const faqData = [
  {
    id: 1,
    question: "Cos'è Flowlee?",
    answer: "Flowlee è un sistema di work management basato su AI che trasforma automaticamente ciò che accade nel team in lavoro organizzato e pronto all’esecuzione. Invece di richiedere aggiornamenti manuali, osserva ciò che già succede tra messaggi, documenti e attività e lo traduce in timeline, priorità e assegnazioni chiare. Si adatta continuamente al modo reale di lavorare delle persone, imparando pattern, capacità e dinamiche di collaborazione. Il risultato è semplice: ogni membro del team sa sempre cosa fare, quando farlo e perché, senza dover rincorrere aggiornamenti o gestire strumenti."
  },
  {
    id: 2,
    question: "Cosa rende l'AI di Flowlee diversa dalle altre?",
    answer: "Nella maggior parte dei tool di work management l’AI è un’aggiunta: scrive testi, riassume, risponde. Utile, ma separata dai processi. In Flowlee è parte dell’architettura: osserva come il team lavora e costruisce profili operativi reali (velocità, carico, dinamiche)."
  },
  {
    id: 3,
    question: "Come si usa Flowlee?",
    answer: "Flowlee si adatta a come lavori. Puoi usare interfaccia grafica, scrivere in linguaggio naturale, inviare vocali o caricare documenti. Puoi anche interagire tramite widget, senza entrare nella piattaforma. Qualunque input viene trasformato automaticamente in task, milestone e aggiornamenti coerenti, senza configurazioni manuali."
  },
  {
    id: 4,
    question: "Per chi è pensato Flowlee?",
    answer: "Flowlee è pensato per chi ha bisogno di gestire lavoro, progetti e collaborazione in modo chiaro ed efficace: team, aziende e organizzazioni. Aiuta a superare problemi comuni come aggiornamenti ignorati, dashboard inutilizzate e decisioni basate su percezioni. Non è solo per manager: si adatta a tutti i ruoli, diventando uno strumento condiviso che riflette il lavoro reale."
  },
  {
    id: 5,
    question: "Serve essere tecnici per usarlo?",
    answer: "No. Flowlee è progettato per partire subito. Basta un input semplice — un messaggio, un vocale o un documento — e il sistema crea automaticamente una struttura completa. Se manca qualcosa, lo segnala o lo recupera. Chiunque può usarlo, indipendentemente dall’esperienza con strumenti digitali."
  },
  {
    id: 6,
    question: "Perché scegliere Flowlee rispetto ad altri tool?",
    answer: "Strumenti come Notion, Asana, Monday.com o ClickUp sono nati per registrare il lavoro e hanno aggiunto l’AI dopo. Flowlee è costruito intorno all’AI fin dall’inizio, su una struttura dati coerente. Questo gli permette di comprendere davvero come si lavora e intervenire in modo attivo sulla gestione."
  },
  {
    id: 7,
    question: "È solo per aziende o anche per freelance?",
    answer: "Oggi Flowlee è pensato per team e organizzazioni. Ma è già prevista una versione per freelance e professionisti che gestiscono più progetti. L’obiettivo è offrire le stesse capacità di organizzazione e ottimizzazione, senza la complessità dei tool enterprise."
  },
];

export const FaqSection: React.FC = () => {
  // 2. CREIAMO LO STATO: Memorizza un numero (l'id della FAQ aperta) oppure null (se sono tutte chiuse)
  // All'inizio della pagina, lo stato è impostato su null perché vogliamo che sia tutto chiuso.
  const [activeId, setActiveId] = useState<number | null>(null);

  // 3. LA FUNZIONE DI CONTROLLO (Toggle): Viene lanciata ogni volta che l'utente clicca su una domanda
  const toggleFaq = (id: number) => {
    if (activeId === id) {
      // Se l'id della FAQ cliccata è GESTITO già dallo stato (cioè era già APERTA), la chiudiamo impostando null
      setActiveId(null);
    } else {
      // Se era chiusa, salviamo l'id di questa FAQ nello stato per aprirla
      setActiveId(id);
    }
  };

  return (
    <section className="faq-container">
      <h2 className="faq-main-title">FAQ</h2>
      
      {/* Usiamo la classe per le risposte separate, che fa da distributore dello spazio */}
      <div className="faq-list-separated">
        {/* 4. IL CICLO MAP: Generiamo i blocchi HTML ciclando dentro l'array dei dati */}
        {faqData.map((item) => {
          
          // 5. IL CONTROLLO MATEMATICO: Questa riga restituisce TRUE o FALSE.
          // Sarà TRUE solo per la FAQ il cui ID corrisponde esattamente al numero salvato nello stato 'activeId'
          const isOpen = activeId === item.id; 
          
          return (
            <div 
              key={item.id} 
              // 6. CLASSE DINAMICA: Aggiornata a 'faq-card' per applicare lo sfondo bianco indipendente a ogni tessera
              className={`faq-card ${isOpen ? 'open' : ''}`}
              // Al click, eseguiamo la nostra funzione passando l'id di questa specifica domanda
              onClick={() => toggleFaq(item.id)}
            >
              {/* PARTE ALTA: La domanda e il tasto + */}
              <div className="faq-header">
                <span className="faq-question">{item.question}</span>
                <div className="faq-icon-zone">
                  <span className="faq-plus-icon">+</span>
                </div>
              </div>

              {/* PARTE BASSA: La risposta che compare/scompare */}
              <div className="faq-body">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};