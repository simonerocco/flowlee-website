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
          <button className="rounded-[24px] bg-[linear-gradient(135deg,#7b55a9_0%,#3b4ca8_100%)] px-7 py-3 text-sm font-medium text-white shadow-[0_4px_14px_rgba(123,85,169,0.2)] transition-all hover:-translate-y-[5px] hover:opacity-95">
            Richiedi Demo
          </button>
          <button className="h-[40px] w-[150px] rounded-[30px] border-2 border-purple-600 bg-white text-sm font-semibold text-black transition-all hover:-translate-y-[5px] hover:bg-white/40">
            Come Funziona
          </button>
        </div>
        <div className="relative mt-16 flex justify-center">
          <img src={image} className="w-full max-w-4xl rounded-3xl shadow-2xl" alt="" />
          <img src={image2} className="absolute -right-8 -bottom-8 w-64" alt="" />
        </div>
      </section>

      <section className="px-8 py-16 text-center">
        <p className="bg-gradient-to-l from-[#8466c3] to-[#eb7e7e] bg-clip-text text-[20px] font-bold text-transparent">
          Chi siamo?
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-gray-900">
          Il modo più semplice per organizzare il lavoro, senza appesantire il team.
        </h2>
      </section>

      <Gifpart />

      <section className="px-8 py-16 text-center">
        <p className="bg-gradient-to-l from-[#8466c3] to-[#eb7e7e] bg-clip-text text-[20px] font-bold text-transparent">
          Mai così semplice
        </p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Come funziona</h2>
        <img
          src={timeline}
          className="mx-auto mt-12 w-4/5 rounded-[70px] shadow-[0_4px_10px_rgba(123,85,169,0.2)]"
          alt="Timeline Flowlee"
        />
      </section>

      <section className="px-8 py-16 text-center">
        <p className="bg-gradient-to-l from-[#8466c3] to-[#eb7e7e] bg-clip-text text-[20px] font-bold text-transparent">
          Interagisci e organizza
        </p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          Scrivi, carica, parla. Al resto
          <br />
          pensa Flowlee
        </h2>
      </section>

      <FaqSection />

      <section className="relative my-[100px] flex w-full items-center justify-center">
        <img src={image3} className="block h-auto w-[65%]" alt="" />
        <h2 className="absolute bottom-[50%] left-1/2 m-0 w-full max-w-[600px] -translate-x-1/2 text-center text-[40px] leading-[1.2] font-bold text-[#1d1d1f]">
          Scopri come
          <br />
          Flowlee può aiutare
          <br />
          il tuo team
        </h2>
      </section>

      <FooterSection />
    </>
  )
}
