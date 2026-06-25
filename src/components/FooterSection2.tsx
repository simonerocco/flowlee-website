import logo from '@/assets/logoF.png'
import footerBg from '@/assets/footer.png'

export function FooterSection2() {
  return (
    <div
      className="flex flex-col items-center bg-no-repeat pb-[60px]"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundPosition: 'bottom center',
        backgroundSize: '100% auto',
      }}
    >
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
