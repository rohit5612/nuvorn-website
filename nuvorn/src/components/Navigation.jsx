import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/nnexus.png'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm ">
      <div className="container-max">
        <div className="flex items-center justify-between py-6 min-h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <img src={logo} alt="Nuvorn" className="w-full h-full rounded-lg" />
            </div>
            <div>
              <span className="text-white font-bold text-lg">Nuvorn</span>
              <div className="text-white/90 text-xs font-medium hidden sm:block">Cloud-powered business solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path) ? 'text-amber-500' : 'text-white/80 hover:text-amber-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="px-4 py-2 rounded-lg border border-white/20 text-sm font-semibold text-white/90 hover:bg-white/5 transition-colors">
              Contact
            </Link>
            <Link to="/pricing" className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-md shadow-primary/30 hover:bg-primary/90 transition-colors">
              Get started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 shadow-lg">
          <div className="container-max py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-sm font-medium ${
                  isActive(item.path) ? 'text-primary' : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <Link to="/contact" className="flex-1 text-center px-4 py-2 rounded-lg border border-white/20 text-sm font-semibold text-white/90 hover:bg-white/5">
                Contact
              </Link>
              <Link to="/pricing" className="flex-1 text-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90">
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

