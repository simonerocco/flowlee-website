import logo from '@/assets/logoF.png'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 z-[1000] flex h-20 w-[min(90%,1200px)] -translate-x-1/2 items-center justify-center rounded-[40px] border border-white/30 bg-white/40 shadow-[0_8px_40px_40px_rgba(31,38,135,0.07)] backdrop-blur-[12px]">
      <div className="flex w-full items-center justify-between px-[15px]">
        <div className="flex items-center gap-[45px]">
          <Link to="/">
            <img src={logo} className="h-[25px] w-[100px]" alt="Flowlee" />
          </Link>
          <ul className="m-0 flex list-none items-center gap-[5px] p-0">
            <li>
              <div className="flex h-[30px] w-[90px] items-center justify-center rounded-[30px] border border-transparent transition-all hover:border-[#666666]">
                <Link
                  to="/chi-siamo"
                  className="text-[0.95rem] font-normal text-black no-underline"
                >
                  Chi siamo
                </Link>
              </div>
            </li>
            <li>
              <div className="flex h-[30px] w-[90px] items-center justify-center rounded-[30px] border border-transparent transition-all hover:border-[#666666]">
                <Link to="/blog" className="text-[0.95rem] font-normal text-black no-underline">
                  Blog
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex cursor-pointer items-center gap-1 text-[0.95rem] text-[#666666]">
            <span>🌐</span>
            <span>⌄</span>
          </div>
          <a
            href="#demo"
            className="rounded-[24px] bg-[linear-gradient(135deg,#7b55a9_0%,#3b4ca8_100%)] px-7 py-3 text-[0.95rem] font-medium text-white no-underline shadow-[0_4px_14px_rgba(123,85,169,0.2)] transition-all hover:-translate-y-px hover:opacity-95"
          >
            Richiedi Demo
          </a>
        </div>
      </div>
    </nav>
  )
}
