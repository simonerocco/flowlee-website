import image from '@/assets/image.png'
import image2 from '@/assets/4.png'

export function Gifpart() {
  return (
    <section
      className="grid grid-cols-1 items-center gap-[60px] px-6 py-[80px] md:grid-cols-2 md:px-[24px]"
      style={{ maxWidth: '1200px', margin: '0 auto' }}
    >
      <div className="flex flex-col items-start gap-6">
        <span className="bg-gradient-to-br from-[#7b57b9] to-[#2c1b4d] bg-clip-text text-[15px] font-bold text-transparent uppercase">
          Tanti modi di lavorare, un sistema per tenerli insieme
        </span>
        <h2 className="text-[40px] leading-[1.15] font-bold text-[#1a1a1a]">
          Il lavoro in team,
          <br />
          davvero semplice
        </h2>
        <p className="text-[17px] leading-relaxed text-[#4a4a4a]">
          Messaggi, call e file sparsi ovunque.
          <br />
          Grazie a Flowlee quello che succede nel team
          <br />
          diventa automaticamente task, timeline e priorità.
          <br />
          Smetti di rincorrere gli aggiornamenti.
        </p>
        <div className="mt-5 flex w-full max-w-[420px] items-center gap-5 rounded-[20px] border border-[#f0f0f0] bg-white px-6 py-4 shadow-[0_4px_10px_rgba(147,81,228,0.719)] transition-all duration-200 hover:-translate-y-[5px]">
          <img src={image2} className="h-auto w-[20%] object-contain" alt="" />
          <div className="flex flex-col gap-1">
            <span className="block text-[13px] font-bold text-[#7b57b9]">
              Come un assistente, ma per il team.
            </span>
            <p className="m-0 text-[15px] text-[#2c1b4d]">
              Tutto si aggiorna, senza rincorrere nessuno.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-[24px] p-[10px]">
        <img
          src={image}
          className="w-[110%] max-w-[450px] rounded-[15px] shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
          alt=""
        />
      </div>
    </section>
  )
}
