import { useState } from 'react'

const faqData = [
  {
    id: 1,
    question: "Cos'è Flowlee?",
    answer:
      "Flowlee è un sistema di work management basato su AI che trasforma automaticamente ciò che accade nel team in lavoro organizzato e pronto all'esecuzione. Invece di richiedere aggiornamenti manuali, osserva ciò che già succede tra messaggi, documenti e attività e lo traduce in timeline, priorità e assegnazioni chiare. Si adatta continuamente al modo reale di lavorare delle persone, imparando pattern, capacità e dinamiche di collaborazione. Il risultato è semplice: ogni membro del team sa sempre cosa fare, quando farlo e perché, senza dover rincorrere aggiornamenti o gestire strumenti.",
  },
  {
    id: 2,
    question: "Cosa rende l'AI di Flowlee diversa dalle altre?",
    answer:
      "Nella maggior parte dei tool di work management l'AI è un'aggiunta: scrive testi, riassume, risponde. Utile, ma separata dai processi. In Flowlee è parte dell'architettura: osserva come il team lavora e costruisce profili operativi reali (velocità, carico, dinamiche).",
  },
  {
    id: 3,
    question: 'Come si usa Flowlee?',
    answer:
      'Flowlee si adatta a come lavori. Puoi usare interfaccia grafica, scrivere in linguaggio naturale, inviare vocali o caricare documenti. Puoi anche interagire tramite widget, senza entrare nella piattaforma. Qualunque input viene trasformato automaticamente in task, milestone e aggiornamenti coerenti, senza configurazioni manuali.',
  },
  {
    id: 4,
    question: 'Per chi è pensato Flowlee?',
    answer:
      'Flowlee è pensato per chi ha bisogno di gestire lavoro, progetti e collaborazione in modo chiaro ed efficace: team, aziende e organizzazioni. Aiuta a superare problemi comuni come aggiornamenti ignorati, dashboard inutilizzate e decisioni basate su percezioni. Non è solo per manager: si adatta a tutti i ruoli, diventando uno strumento condiviso che riflette il lavoro reale.',
  },
  {
    id: 5,
    question: 'Serve essere tecnici per usarlo?',
    answer:
      "No. Flowlee è progettato per partire subito. Basta un input semplice — un messaggio, un vocale o un documento — e il sistema crea automaticamente una struttura completa. Se manca qualcosa, lo segnala o lo recupera. Chiunque può usarlo, indipendentemente dall'esperienza con strumenti digitali.",
  },
  {
    id: 6,
    question: 'Perché scegliere Flowlee rispetto ad altri tool?',
    answer:
      "Strumenti come Notion, Asana, Monday.com o ClickUp sono nati per registrare il lavoro e hanno aggiunto l'AI dopo. Flowlee è costruito intorno all'AI fin dall'inizio, su una struttura dati coerente. Questo gli permette di comprendere davvero come si lavora e intervenire in modo attivo sulla gestione.",
  },
  {
    id: 7,
    question: 'È solo per aziende o anche per freelance?',
    answer:
      "Oggi Flowlee è pensato per team e organizzazioni. Ma è già prevista una versione per freelance e professionisti che gestiscono più progetti. L'obiettivo è offrire le stesse capacità di organizzazione e ottimizzazione, senza la complessità dei tool enterprise.",
  },
]

export function FaqSection() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="mx-auto max-w-3xl px-8 py-24">
      <h2 className="mb-10 text-center text-4xl font-bold text-gray-900">FAQ</h2>
      <div className="flex flex-col gap-3">
        {faqData.map((item) => {
          const isOpen = activeId === item.id
          return (
            <div
              key={item.id}
              className="cursor-pointer rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md"
              onClick={() => toggleFaq(item.id)}
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">{item.question}</span>
                <span
                  className={`text-xl font-light text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'mt-4 max-h-96' : 'max-h-0'}`}
              >
                <p className="text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
