import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const headerText = 'font-sans text-sm font-medium text-text transition-colors hover:text-highlight'

const navLinkClass = ({ isActive }) =>
  `font-sans text-sm font-medium transition-colors hover:text-highlight ${
    isActive ? 'text-highlight' : 'text-text'
  }`

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-text/8 bg-bg/95 shadow-md backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className={`${headerText} text-base font-semibold`}
          onClick={closeMobile}
        >
          Streamline South
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 ${headerText}`}
              aria-expanded={servicesOpen}
            >
              Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="surface-card min-w-[180px] rounded-md bg-surface py-2">
                  <Link to="/smb" className={`block px-4 py-2 ${headerText}`}>Small Business</Link>
                  <Link to="/corporate" className={`block px-4 py-2 ${headerText}`}>Corporate</Link>
                </div>
              </div>
            )}
          </div>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>

        <button
          type="button"
          className={`${headerText} md:hidden`}
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

      {mobileOpen && (
        <div className="border-t border-text/8 bg-bg px-6 py-4 md:hidden">
          <p className={`mb-2 ${headerText}`}>Services</p>
          <Link to="/smb" className={`block py-2 ${headerText}`} onClick={closeMobile}>Small Business</Link>
          <Link to="/corporate" className={`block py-2 ${headerText}`} onClick={closeMobile}>Corporate</Link>
          <div className="my-3 border-t border-text/8" />
          <NavLink to="/about" className={navLinkClass} onClick={closeMobile}>About</NavLink>
          <div className="mt-2">
            <NavLink to="/contact" className={navLinkClass} onClick={closeMobile}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
