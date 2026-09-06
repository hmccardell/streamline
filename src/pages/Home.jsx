import { Link } from 'react-router-dom'
import NewsletterSignup from '../components/NewsletterSignup'
import { serviceSlug } from '../components/ServiceSectionNav'
import { ROUTES, SCHEDULING_URL } from '../config/routes'

const processAuditId = serviceSlug('Process Audit')

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" strokeLinecap="round" />
      <line x1="16" y1="3" x2="16" y2="7" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 3.5 9 4l1 4-2 1.5a12 12 0 0 0 6.5 6.5L16 14l4 1 .5 2.5a2 2 0 0 1-2 2.3A16 16 0 0 1 4.2 5.5a2 2 0 0 1 2.3-2z" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 10a6 6 0 0 1 12 0v4l2 3H4l2-3z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  )
}

const streamlines = [
  { title: 'Scheduling & Booking', description: 'Stop losing bookings to voicemail.', price: 'From $750', Icon: CalendarIcon, href: SCHEDULING_URL },
  { title: 'Appointment Reminders', description: 'Cut no-shows without a front-desk call.', price: 'From $400', Icon: BellIcon },
  { title: 'Missed-Call Text-Back', description: 'Every missed call gets an instant text back.', price: 'From $500', Icon: PhoneIcon },
]

const valueProps = [
  { title: 'Solution design', description: 'We design and build automated workflows that eliminate repetitive manual tasks.' },
  { title: 'Knowledge transfer', description: 'Every engagement includes documentation and a handoff session. Your team understands what was built.' },
  { title: 'Practical AI training', description: 'Hands-on training using your actual tools and data, not a generic overview.' },
]

export default function Home() {
  return (
    <>
      <section className="hero-glow pt-12 pb-6 md:pt-16 md:pb-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl leading-tight text-text md:text-5xl md:leading-tight">
            We eliminate inefficiencies, streamline your processes, and empower your team.
          </h1>
          <div className="brand-divider-fade mx-auto mt-8 max-w-xl" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            Technology consulting and training for small businesses across the Gulf Coast.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to={ROUTES.smb} className="w-full rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover sm:w-auto">
              I run a small business
            </Link>
            <Link to={ROUTES.corporate} className="w-full rounded-md border border-text/20 px-8 py-3 text-sm font-semibold text-text transition-colors hover:border-highlight/50 hover:bg-highlight/5 sm:w-auto">
              I lead a corporate team
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-12 md:pt-6 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Ready-made automations</p>
          <h2 className="mt-2 text-2xl text-text md:text-3xl">Popular Streamlines</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-body">
            Pre-built fixes for specific, common headaches. Not sure which one fits?{' '}
            <Link to={`${ROUTES.smb}#${processAuditId}`} className="font-semibold text-highlight transition-colors hover:text-highlight-hover">
              Start with a Process Audit
            </Link>
            .
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {streamlines.map(({ title, description, price, Icon, href }) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-highlight/10 text-highlight">
                    <Icon />
                  </span>
                  <h3 className="mt-4 text-lg text-text">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">{description}</p>
                  <p className="mt-3 text-xs font-semibold text-highlight">{price}</p>
                </>
              )
              return href ? (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="surface-card block rounded-lg bg-surface p-6 transition-colors hover:border-highlight/50"
                >
                  {content}
                </a>
              ) : (
                <div key={title} className="surface-card rounded-lg bg-surface p-6">
                  {content}
                </div>
              )
            })}
          </div>
          <p className="mt-8 text-sm">
            <Link to={ROUTES.streamlines} className="font-semibold text-highlight transition-colors hover:text-highlight-hover">
              See the full Streamlines lineup
            </Link>
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="border-t-2 pt-4"
                style={{ borderColor: 'var(--color-brand-purple)' }}
              >
                <h3 className="text-lg text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="home-newsletter-cta py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div
            className="card-accent overflow-hidden rounded-2xl border border-white/10 bg-bg/95 px-6 py-6 text-center shadow-2xl backdrop-blur-md md:px-12 md:py-8"
            style={{ '--card-accent': 'var(--gradient-brand)' }}
          >
            <p className="text-left text-xs font-semibold uppercase tracking-wider text-highlight">
              Breaking it down, making it accessible
            </p>
            <h2 className="mt-6 text-3xl text-text md:mt-8 md:text-4xl">One plain-English automation tip a week.</h2>
            <p className="mx-auto mt-4 text-sm leading-relaxed text-body md:text-base">
              The same posts from our Streamline South Facebook page, delivered straight to your inbox.
            </p>
            <div className="mx-auto mt-7 max-w-sm text-left">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
