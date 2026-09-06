import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES, DEMOS_URL } from '../config/routes'

const demosLinkClass =
  'inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover'

function DemosArrow() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
    </svg>
  )
}

const headerText = 'text-sm font-medium text-text transition-colors hover:text-highlight'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-highlight ${
    isActive ? 'text-highlight' : 'text-text'
  }`

function NewTag() {
  return (
    <span className="ml-1.5 rounded bg-highlight px-1.5 py-0.5 align-middle text-[9px] font-bold uppercase tracking-wide text-bg">
      New
    </span>
  )
}

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-bg/95 shadow-md backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          to={ROUTES.home}
          className="shrink-0 text-sm font-semibold text-text transition-opacity hover:opacity-90 sm:text-base"
          onClick={closeMobile}
        >
          Streamline South
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to={ROUTES.streamlines} className={navLinkClass}>
            Streamlines
            <NewTag />
          </NavLink>
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
                  <Link to={ROUTES.smb} className={`block px-4 py-2 ${headerText}`}>Small Business</Link>
                  <Link to={ROUTES.corporate} className={`block px-4 py-2 ${headerText}`}>Corporate</Link>
                </div>
              </div>
            )}
          </div>
          <NavLink to={ROUTES.about} className={navLinkClass}>About</NavLink>
          <NavLink to={ROUTES.contact} className={navLinkClass}>Contact</NavLink>
          <a href={DEMOS_URL} target="_blank" rel="noopener" className={demosLinkClass}>
            Live demos
            <DemosArrow />
          </a>
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
          <Link to={ROUTES.streamlines} className={`block py-2 ${headerText}`} onClick={closeMobile}>
            Streamlines
            <NewTag />
          </Link>
          <div className="my-3 border-t border-text/8" />
          <p className={`mb-2 ${headerText}`}>Services</p>
          <Link to={ROUTES.smb} className={`block py-2 ${headerText}`} onClick={closeMobile}>Small Business</Link>
          <Link to={ROUTES.corporate} className={`block py-2 ${headerText}`} onClick={closeMobile}>Corporate</Link>
          <div className="my-3 border-t border-text/8" />
          <NavLink to={ROUTES.about} className={navLinkClass} onClick={closeMobile}>About</NavLink>
          <div className="mt-2">
            <NavLink to={ROUTES.contact} className={navLinkClass} onClick={closeMobile}>Contact</NavLink>
          </div>
          <div className="my-3 border-t border-text/8" />
          <a
            href={DEMOS_URL}
            target="_blank"
            rel="noopener"
            className={demosLinkClass}
            onClick={closeMobile}
          >
            Live demos
            <DemosArrow />
          </a>
        </div>
      )}
      <div className="brand-divider" aria-hidden="true" />
    </header>
  )
}
