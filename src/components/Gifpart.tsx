import image from '@/assets/image.png'
import image2 from '@/assets/4.png'

export function Gifpart() {
  return (
    <section className="grid grid-cols-1 items-center gap-16 px-8 py-24 md:grid-cols-2 md:px-16">
      <div className="flex flex-col gap-6">
        <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">
          Tanti modi di lavorare, un sistema per tenerli insieme
        </span>
        <h2 className="text-4xl leading-tight font-bold text-gray-900">
          Il lavoro in team,
          <br />
          davvero semplice
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Messaggi, call e file sparsi ovunque.
          <br />
          Grazie a Flowlee quello che succede nel team
          <br />
          diventa automaticamente task, timeline e priorità.
          <br />
          Smetti di rincorrere gli aggiornamenti.
        </p>
        <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
          <img src={image2} className="h-14 w-14 rounded-xl object-cover" alt="" />
          <div>
            <span className="block text-sm font-semibold text-gray-900">
              Come un assistente, ma per il team.
            </span>
            <p className="mt-1 text-sm text-gray-500">
              Tutto si aggiorna, senza rincorrere nessuno.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src={image}
          className="max-h-[500px] w-full rounded-2xl object-cover shadow-lg"
          alt=""
        />
      </div>
    </section>
  )
}
