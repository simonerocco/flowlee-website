import image from '@/assets/2.png'
import image2 from '@/assets/3.png'
import image3 from '@/assets/5.png'
import timeline from '@/assets/timelineprovvisoria.png'
import { Gifpart } from '@/components/Gifpart'
import { FaqSection } from '@/components/FaqSection'
import { FooterSection } from '@/components/FooterSection'

export function Home() {
  return (
    <>
      <section className="flex flex-col items-center px-8 pt-40 pb-24 text-center">
        <h2 className="text-5xl leading-tight font-bold text-gray-900 md:text-6xl">
          Smetti di gestire il lavoro.
          <br />
          Inizia a farlo funzionare.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
          Flowlee trasforma il lavoro quotidiano in priorità, assegnazioni e prossimi step, senza
          chiederti aggiornamenti manuali.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700">
            Richiedi Demo
          </button>
          <button className="rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50">
            Come Funziona
          </button>
        </div>
        <div className="relative mt-16 flex justify-center">
          <img src={image} className="w-full max-w-4xl rounded-3xl shadow-2xl" alt="" />
          <img
            src={image2}
            className="absolute -right-8 -bottom-8 w-64 rounded-2xl shadow-xl"
            alt=""
          />
        </div>
      </section>

      <section className="px-8 py-16 text-center">
        <p className="text-xs font-semibold tracking-widest text-violet-500 uppercase">
          Chi siamo?
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-gray-900">
          Il modo più semplice per organizzare il lavoro, senza appesantire il team.
        </h2>
      </section>

      <Gifpart />

      <section className="px-8 py-16 text-center">
        <p className="text-xs font-semibold tracking-widest text-violet-500 uppercase">
          Mai così semplice
        </p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Come funziona</h2>
        <img
          src={timeline}
          className="mx-auto mt-12 w-full max-w-4xl rounded-2xl shadow-lg"
          alt="Timeline Flowlee"
        />
      </section>

      <section className="px-8 py-16 text-center">
        <p className="text-xs font-semibold tracking-widest text-violet-500 uppercase">
          Interagisci e organizza
        </p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          Scrivi, carica, parla. Al resto
          <br />
          pensa Flowlee
        </h2>
      </section>

      <FaqSection />

      <section className="relative overflow-hidden">
        <img src={image3} className="h-96 w-full object-cover" alt="" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h2 className="text-center text-4xl font-bold text-white">
            Scopri come
            <br />
            Flowlee può aiutare
            <br />
            il tuo team
          </h2>
        </div>
      </section>

      <FooterSection />
    </>
  )
}
