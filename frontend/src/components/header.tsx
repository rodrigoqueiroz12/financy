import { Link } from 'react-router'
import { Logo } from './logo'

export function Header() {
  return (
    <header className="py-4 border-b border-gray-200">
      <div className="grid grid-cols-3 items-center max-w-296 mx-auto">
        <Link to="/dashboard">
          <Logo className="w-auto h-6" />
        </Link>

        <nav className="justify-self-center">
          <ul className="flex items-center gap-5">
            <li>
              <Link
                to="/dashboard"
                className="font-semibold text-sm text-brand-base"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/transactions"
                className="text-sm text-gray-600 hover:text-brand-base transition-colors"
              >
                Transações
              </Link>
            </li>

            <li>
              <Link
                to="/categories"
                className="text-sm text-gray-600 hover:text-brand-base transition-colors"
              >
                Categorias
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          to="/profile"
          className="justify-self-end size-9 rounded-full text-sm font-medium text-gray-800 uppercase flex items-center justify-center bg-gray-300"
        >
          CT
        </Link>
      </div>
    </header>
  )
}
