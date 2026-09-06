import { Link } from 'react-router-dom'
import { ROUTES, DEMOS_URL } from '../config/routes'
import { serviceSlug } from './ServiceSectionNav'
import LinkedInIcon from './LinkedInIcon'

const LINKEDIN_URL = 'https://www.linkedin.com/in/hayes-ii'

const linkClass = 'block text-sm text-body transition-colors hover:text-highlight'
const headingClass = 'text-xs font-semibold uppercase tracking-wider text-accent-text'

const serviceLinks = [
  { label: 'Process Audit', name: 'Process Audit' },
  { label: 'Automation Implementation', name: 'Process Automation Implementation' },
  { label: 'AI Workshop', name: 'AI Readiness Workshop' },
  { label: 'Advisory Retainer', name: 'AI Advisory Retainer' },
]

export default function Footer() {
  return (
    <footer className="bg-bg text-body">
      <div className="brand-divider" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className={headingClass}>Services</p>
            <nav className="mt-4 space-y-2.5">
              {serviceLinks.map((item) => (
                <Link key={item.name} to={`${ROUTES.smb}#${serviceSlug(item.name)}`} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className={headingClass}>
              Streamlines
              <span className="ml-2 rounded bg-highlight px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-bg">
                New
              </span>
            </p>
            <nav className="mt-4 space-y-2.5">
              <a href={`${DEMOS_URL}/scheduling`} target="_blank" rel="noopener" className={linkClass}>
                Scheduling &amp; Booking
              </a>
              <Link to={ROUTES.streamlines} className="block text-sm font-semibold text-highlight transition-colors hover:text-highlight-hover">
                See all &rarr;
              </Link>
            </nav>
          </div>

          <div>
            <p className={headingClass}>Company</p>
            <nav className="mt-4 space-y-2.5">
              <Link to={ROUTES.about} className={linkClass}>About</Link>
              <Link to={ROUTES.contact} className={linkClass}>Contact</Link>
              <a href={DEMOS_URL} target="_blank" rel="noopener" className={linkClass}>Live Demos</a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener"
                className={`${linkClass} inline-flex items-center gap-2`}
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </nav>
          </div>

          <div>
            <p className={headingClass}>Get the newsletter</p>
            <p className="mt-4 text-sm text-body">One automation tip a week.</p>
            <Link
              to={`${ROUTES.home}#newsletter`}
              className="mt-2 inline-block text-sm font-semibold text-highlight transition-colors hover:text-highlight-hover"
            >
              Subscribe &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-text/8 pt-6 text-xs text-subtle sm:flex-row sm:justify-between">
          <span>Hattiesburg, MS &middot; Gulf Coast</span>
          <span>&copy; {new Date().getFullYear()} Streamline South LLC</span>
        </div>
      </div>
    </footer>
  )
}
