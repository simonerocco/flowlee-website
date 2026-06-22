import logo from '@/assets/logoF.png'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src={logo} className="h-8 w-auto" alt="Flowlee" />
          </Link>
          <ul className="m-0 flex list-none items-center gap-6 p-0">
            <li>
              <Link
                to="/chi-siamo"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-violet-600"
              >
                Chi siamo
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-violet-600"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex cursor-pointer items-center gap-1 text-gray-500 hover:text-gray-700">
            <span>🌐</span>
            <span className="text-sm">⌄</span>
          </div>
          <a
            href="#demo"
            className="rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700"
          >
            Richiedi Demo
          </a>
        </div>
      </div>
    </nav>
  )
}
