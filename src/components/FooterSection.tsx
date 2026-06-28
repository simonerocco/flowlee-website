import { useState } from 'react'
import type { FormEvent } from 'react'
import logo from '@/assets/logoF.png'
import footerBg from '@/assets/footer.png'

export function FooterSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Dati pronti per il server:', { name, email, location })
  }

  return (
    <div
      className="flex flex-col items-center bg-no-repeat pb-[60px]"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundPosition: 'bottom center',
        backgroundSize: '100% auto',
      }}
    >
      <section className="w-[70%] max-w-[400px] px-6 pt-16 pb-[80px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[0.9rem] font-medium text-[#666666]">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full appearance-none rounded-[12px] border border-transparent bg-[#f2f2f5] px-4 py-[14px] text-base text-[#1d1d1f] transition-all outline-none focus:border-[#7b57b9] focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[0.9rem] font-medium text-[#666666]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="jane@framer.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full appearance-none rounded-[12px] border border-transparent bg-[#f2f2f5] px-4 py-[14px] text-base text-[#1d1d1f] transition-all outline-none focus:border-[#7b57b9] focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="location" className="text-[0.9rem] font-medium text-[#666666]">
              Location
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full appearance-none rounded-[12px] border border-transparent bg-[#f2f2f5] px-4 py-[14px] text-base text-[#1d1d1f] transition-all outline-none focus:border-[#7b57b9] focus:bg-white"
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
            className="mt-[10px] w-full cursor-pointer rounded-[12px] border-0 bg-[#2d2d30] py-4 text-base font-semibold text-white transition-colors hover:bg-[#1a1a1c]"
          >
            Submit
          </button>
        </form>
      </section>

      <div className="w-[calc(100%-48px)] max-w-[1140px] rounded-[32px] border border-white/80 bg-white/95 p-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] backdrop-blur-[10px]">
        <footer>
          <div className="flex flex-wrap items-start justify-between gap-10">
            <div className="flex max-w-[300px] flex-col items-start">
              <img src={logo} className="mb-5 h-8 w-auto" alt="Flowlee Logo" />
              <p className="m-0 mb-6 text-[1.05rem] leading-relaxed text-[#515154]">
                Your team&apos;s extra pair of hands.
                <br />
                Built to get things done better.
              </p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3d3d40] text-[0.9rem] font-bold text-white no-underline"
              >
                in
              </a>
            </div>

            <div className="flex gap-[60px]">
              <div className="flex min-w-[120px] flex-col items-start">
                <h4 className="mt-0 mb-5 text-[0.85rem] font-bold tracking-[0.5px] text-[#1d1d1f]">
                  Pages
                </h4>
                <a
                  href="#home"
                  className="mb-[14px] text-[0.95rem] text-[#666666] no-underline transition-colors hover:text-[#7b57b9]"
                >
                  Home
                </a>
                <a
                  href="#blog"
                  className="mb-[14px] text-[0.95rem] text-[#666666] no-underline transition-colors hover:text-[#7b57b9]"
                >
                  Blog
                </a>
              </div>

              <div className="flex min-w-[120px] flex-col items-start">
                <h4 className="mt-0 mb-5 text-[0.85rem] font-bold tracking-[0.5px] text-[#1d1d1f]">
                  Information
                </h4>
                <a
                  href="#chisiamo"
                  className="mb-[14px] text-[0.95rem] text-[#666666] no-underline transition-colors hover:text-[#7b57b9]"
                >
                  Chi Siamo
                </a>
                <a
                  href="#privacy"
                  className="mb-[14px] text-[0.95rem] text-[#666666] no-underline transition-colors hover:text-[#7b57b9]"
                >
                  Privacy
                </a>
                <a
                  href="#terms"
                  className="mb-[14px] text-[0.95rem] text-[#666666] no-underline transition-colors hover:text-[#7b57b9]"
                >
                  Terms of use
                </a>
              </div>

              <div className="flex min-w-[120px] flex-col items-start">
                <h4 className="mt-0 mb-5 text-[0.85rem] font-bold tracking-[0.5px] text-[#1d1d1f]">
                  Contact
                </h4>
                <a
                  href="mailto:info@flowlee.com"
                  className="mb-[14px] text-[0.95rem] text-[#666666] no-underline transition-colors hover:text-[#7b57b9]"
                >
                  info@flowlee.com
                </a>
                <a
                  href="#lavoraconnoi"
                  className="mb-[14px] text-[0.95rem] text-[#666666] no-underline transition-colors hover:text-[#7b57b9]"
                >
                  Lavora con noi
                </a>
              </div>
            </div>
          </div>

          <hr className="my-10 h-px border-none bg-[#e5e5ea]" />

          <p className="text-[0.88rem] leading-relaxed text-[#86868b]">
            © 2026 Flowlee srl
            <br />
            P.IVA: 14458540961
            <br />
            Corso Venezia 45, 20121, Milano (MI)
            <br />
            Capitale Sociale i.v.: 10.000€
            <br />
            <a
              href="mailto:flowlee@legalmail.it"
              className="text-[#86868b] no-underline hover:border-b hover:border-[#86868b]"
            >
              flowlee@legalmail.it
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
