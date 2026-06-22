import { useState } from 'react'
import type { FormEvent } from 'react'
import logo from '@/assets/logoF.png'

export function FooterSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Dati pronti per il server:', { name, email, location })
  }

  return (
    <div className="bg-[#1a0a3c] text-white">
      <section className="mx-auto max-w-2xl px-8 py-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 ring-1 ring-white/20 outline-none focus:ring-violet-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="jane@framer.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 ring-1 ring-white/20 outline-none focus:ring-violet-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="location" className="text-sm font-medium text-gray-300">
              Location
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white ring-1 ring-white/20 outline-none focus:ring-violet-400"
            >
              <option value="" disabled>
                Select...
              </option>
              <option value="italy">Italy</option>
              <option value="abroad">Abroad</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-violet-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-400"
          >
            Submit
          </button>
        </form>
      </section>

      <footer className="mx-auto max-w-7xl px-8 pb-12">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <img src={logo} className="h-8 w-auto" alt="Flowlee Logo" />
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Your team&apos;s extra pair of hands.
              <br />
              Built to get things done better.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold hover:bg-white/20"
            >
              in
            </a>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Pages
              </h4>
              <a href="#home" className="text-sm text-gray-300 transition-colors hover:text-white">
                Home
              </a>
              <a href="#blog" className="text-sm text-gray-300 transition-colors hover:text-white">
                Blog
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Information
              </h4>
              <a
                href="#chisiamo"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Chi Siamo
              </a>
              <a
                href="#privacy"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Privacy
              </a>
              <a href="#terms" className="text-sm text-gray-300 transition-colors hover:text-white">
                Terms of use
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Contact
              </h4>
              <a
                href="mailto:info@flowlee.com"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                info@flowlee.com
              </a>
              <a
                href="#lavoraconnoi"
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                Lavora con noi
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <p className="text-xs leading-relaxed text-gray-500">
          © 2026 Flowlee srl
          <br />
          P.IVA: 14458540961
          <br />
          Corso Venezia 45, 20121, Milano (MI)
          <br />
          Capitale Sociale i.v.: 10.000€
          <br />
          <a href="mailto:flowlee@legalmail.it" className="transition-colors hover:text-gray-300">
            flowlee@legalmail.it
          </a>
        </p>
      </footer>
    </div>
  )
}
