import image3 from '@/assets/5.png'
import gif from '@/assets/iconf.gif'
import camilla from '@/assets/camilla.jpeg'
import irene from '@/assets/irene.jpeg'
import { Card } from '@/components/Card'
import { FooterSection2 } from '@/components/FooterSection2'
import { Carousel2 } from '@/components/Carousel2'

const teamMembers = [
  {
    name: 'Camilla Crucito',
    role: 'CEO and co-founder',
    category: 'Sales',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
  {
    name: 'Vincenzo Marcella',
    role: 'CTO and co-founder',
    category: 'Tech',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
  {
    name: 'Irene Malcangi',
    role: 'COO and co-founder',
    category: 'Operation',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: irene,
  },
  {
    name: 'Riccardo De Mei',
    role: 'UX/UI Designer',
    category: 'Category',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
  {
    name: 'Emilia Vertullo',
    role: 'Visual Designer',
    category: 'Category',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
  {
    name: 'Martina Gianola',
    role: 'AI Specialist',
    category: 'Tech',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
]

export function ChiSiamo() {
  return (
    <div className="w-full">
      <div className="relative overflow-visible px-8 pt-40 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold text-gray-900">Il team dietro a Flowlee</h1>
          <p className="mt-4 justify-center text-lg text-gray-600">
            Un team di designer, sviluppatori e AI specialist che sta cambiando <br /> il modo in
            cui si lavora.
          </p>
        </div>
        <img
          src={gif}
          alt="Personaggio Flowlee"
          style={{ marginTop: '250px', right: '0px', width: '500px' }}
          className="absolute top-24 right-0 w-auto opacity-90"
        />
      </div>

      <div className="relative my-[200px] flex w-full items-center justify-center px-8 py-8">
        <img src={image3} className="block h-auto w-[70%]" alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <p className="bg-gradient-to-l from-[#8466c3] to-[#eb7e7e] bg-clip-text text-[20px] font-bold tracking-[1.5px] text-transparent">
            MISSION
          </p>
          <h2 className="m-0 w-full max-w-[600px] text-center text-[40px] leading-[1.25] font-bold tracking-[-1px] text-[#1d1d1f]">
            Crediamo in una
            <br />
            tecnologia che
            <br />
            libera potenziale,
            <br />
            non che rallenta.
          </h2>
        </div>
      </div>
      <Carousel2 />
      <section className="my-10 flex flex-col items-center px-4">
        <p className="bg-gradient-to-l from-[#8466c3] to-[#eb7e7e] bg-clip-text text-[20px] font-bold text-transparent">
          SIAMO A
        </p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Milan, Italy</h2>
        <div className="mt-8 flex w-full justify-center">
          <div className="overflow-hidden rounded-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.123456789!2d9.2059!3d45.4654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27b4d6b0c1!2sCorso%20Venezia%2C%2045%2C%2020121%20Milano%20MI!5e0!3m2!1sit!2sit!4v1234567890"
              width="750"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <section className="my-10 flex flex-col items-center px-4">
        <p className="bg-gradient-to-l from-[#8466c3] to-[#eb7e7e] bg-clip-text text-[20px] font-bold text-transparent">
          IL TEAM
        </p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Conoscici Meglio</h2>
      </section>

      <section className="my-10 flex flex-col items-center px-4">
        <div className="grid grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <Card key={i} {...member} />
          ))}
        </div>
      </section>
      <FooterSection2 />
    </div>
  )
}
