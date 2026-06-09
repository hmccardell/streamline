import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? 'text-amber' : 'text-cream/80 hover:text-cream'
  }`

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-serif text-xl text-cream transition-colors hover:text-amber"
          onClick={closeMobile}
        >
          Streamline South
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-cream/80 transition-colors hover:text-cream"
              aria-expanded={servicesOpen}
            >
              Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[180px] rounded-md border border-cream/10 bg-navy-light py-2 shadow-lg">
                  <Link
                    to="/smb"
                    className="block px-4 py-2 text-sm text-cream/80 transition-colors hover:bg-cream/5 hover:text-cream"
                  >
                    Small Business
                  </Link>
                  <Link
                    to="/corporate"
                    className="block px-4 py-2 text-sm text-cream/80 transition-colors hover:bg-cream/5 hover:text-cream"
                  >
                    Corporate
                  </Link>
                </div>
              </div>
            )}
          </div>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-cream md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-cream/10 bg-navy px-6 py-4 md:hidden">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cream/50">Services</p>
          <Link
            to="/smb"
            className="block py-2 text-cream/80 hover:text-cream"
            onClick={closeMobile}
          >
            Small Business
          </Link>
          <Link
            to="/corporate"
            className="block py-2 text-cream/80 hover:text-cream"
            onClick={closeMobile}
          >
            Corporate
          </Link>
          <div className="my-3 border-t border-cream/10" />
          <NavLink to="/about" className={navLinkClass} onClick={closeMobile}>
            About
          </NavLink>
          <div className="mt-2">
            <NavLink to="/contact" className={navLinkClass} onClick={closeMobile}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
