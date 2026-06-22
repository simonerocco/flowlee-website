import image3 from '@/assets/5.png'
import gif from '@/assets/iconf.gif'
import camilla from '@/assets/camilla.jpeg'
import { Card } from '@/components/Card'

const teamMembers = [
  {
    name: 'Camilla Crucito',
    role: 'CEO and co-founder',
    category: 'Sales',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
  {
    name: 'Camilla Crucito',
    role: 'CEO and co-founder',
    category: 'Sales',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
  {
    name: 'Camilla Crucito',
    role: 'CEO and co-founder',
    category: 'Sales',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
  {
    name: 'Camilla Crucito',
    role: 'CEO and co-founder',
    category: 'Sales',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
  {
    name: 'Camilla Crucito',
    role: 'CEO and co-founder',
    category: 'Sales',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
  {
    name: 'Camilla Crucito',
    role: 'CEO and co-founder',
    category: 'Sales',
    linkedInUrl: 'https://linkedin.com',
    imageSrc: camilla,
  },
]

export function ChiSiamo() {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden px-8 pt-40 pb-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900">Il team dietro a Flowlee</h1>
          <p className="mt-4 text-lg text-gray-600">
            Un team di designer, sviluppatori e AI specialist che sta cambiando il modo in cui si
            lavora.
          </p>
        </div>
        <img
          src={gif}
          alt="Personaggio Flowlee"
          className="absolute top-24 right-0 h-64 w-auto opacity-90"
        />
      </div>

      <div className="relative my-[200px] flex w-full flex-col items-center justify-center px-6 py-10">
        <p className="flex justify-center bg-gradient-to-l from-[#8466c3] to-[#eb7e7e] bg-clip-text pt-[100px] text-[20px] font-bold tracking-[2px] text-transparent">
          Mission
        </p>
        <img src={image3} className="mt-6 block h-auto w-[65%]" alt="" />
        <h2 className="absolute top-[60%] left-1/2 z-[4] m-0 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 text-center text-[40px] leading-[1.25] font-bold tracking-[-1px] text-[#1d1d1f]">
          Crediamo in una
          <br />
          tecnologia che
          <br />
          libera potenziale,
          <br />
          non che rallenta.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 px-10 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, i) => (
          <Card key={i} {...member} />
        ))}
      </div>
    </div>
  )
}
