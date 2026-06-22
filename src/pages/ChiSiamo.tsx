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

      <div className="relative">
        <p className="px-8 text-xs font-semibold tracking-widest text-violet-500 uppercase">
          Mission
        </p>
        <img src={image3} className="mt-6 h-72 w-full object-cover" alt="" />
        <div className="absolute inset-0 flex items-center justify-end pr-16">
          <h2 className="text-right text-4xl font-bold text-white drop-shadow-lg">
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

      <div className="grid grid-cols-1 gap-4 px-10 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, i) => (
          <Card key={i} {...member} />
        ))}
      </div>
    </div>
  )
}
