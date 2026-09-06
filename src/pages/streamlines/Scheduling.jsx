import { Link } from 'react-router-dom'
import NewsletterSignup from '../../components/NewsletterSignup'
import { ROUTES, SCHEDULING_URL } from '../../config/routes'

function PlayIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 8 L17 12 L10 16 Z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-highlight" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 L10 17 L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const tiers = [
  {
    name: 'Scheduling Starter',
    price: '$750–$1,500',
    cadence: 'one-time',
    featured: true,
    summary:
      'We configure the scheduling system for you, connect your calendar, brand the booking page, and set up automated confirmations and reminders.',
    points: ['Single location or provider', 'Live within days', '1-3 core services to book'],
  },
  {
    name: 'Custom Scheduling Build',
    price: '$2,000–$4,000',
    cadence: 'one-time',
    featured: false,
    summary:
      'Multiple staff or locations, intake forms, a CRM tie-in, and routing logic scoped to your business.',
    points: ['Multi-location or multi-staff', '2–6 weeks', 'Custom routing and integrations'],
  },
]

export default function Scheduling() {
  return (
    <>
      <section className="hero-glow pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">
            Streamline: Scheduling &amp; Booking
          </p>
          <h1 className="mt-3 text-3xl leading-tight text-text md:text-4xl md:leading-tight">
            Stop losing bookings to voicemail.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-body">
            Give customers an easy way to book online, with a branded booking page connected to your calendar and automated confirmations.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to={ROUTES.contact}
              className="rounded-md bg-accent px-8 py-3 text-center text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Get Scheduling Starter, from $750
            </Link>
            <a
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-text/20 px-8 py-3 text-sm font-semibold text-text transition-colors hover:border-highlight/50 hover:bg-highlight/5"
            >
              <PlayIcon className="h-4 w-4" />
              Watch the 90-second demo
            </a>
          </div>

          <a
            href={SCHEDULING_URL}
            target="_blank"
            rel="noopener"
            className="group relative mt-10 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-white/10 sm:aspect-[16/7]"
            style={{
              background:
                'linear-gradient(135deg, rgb(132 48 241 / 0.22), rgb(6 233 236 / 0.14))',
            }}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-highlight bg-bg/60 text-highlight transition-transform group-hover:scale-105">
              <PlayIcon />
            </span>
            <span className="absolute inset-x-4 bottom-4 text-xs text-body">
              90-second demo: a client books online and gets a confirmation text within seconds.
            </span>
          </a>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">Two ways to start</p>
          <h2 className="mt-2 text-2xl text-text md:text-3xl">Pick the shape that fits your business.</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`surface-card rounded-lg bg-surface p-6 ${
                  tier.featured ? 'card-accent border-highlight/50' : ''
                }`}
                style={tier.featured ? { '--card-accent': 'var(--gradient-brand)' } : undefined}
              >
                <h3 className="text-lg font-semibold text-text">{tier.name}</h3>
                <p className="mt-2 text-xl font-semibold text-highlight">
                  {tier.price}{' '}
                  <span className="text-xs font-normal text-subtle">{tier.cadence}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">{tier.summary}</p>
                <ul className="mt-4 space-y-2">
                  {tier.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-body">
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-accent/30 bg-accent/10 p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent-text">Honest caveat</p>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Automated texting requires a one-time carrier registration step, which takes 1&ndash;4
              weeks, before it can go live. Your booking page and email confirmations launch right
              away. Texting turns on as soon as registration clears.
            </p>
          </div>
        </div>
      </section>

      <section className="scheduling-checklist-cta py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <div
            className="card-accent overflow-hidden rounded-2xl border border-white/10 bg-bg/95 px-6 py-10 text-center shadow-2xl backdrop-blur-md md:px-12 md:py-12"
            style={{ '--card-accent': 'var(--gradient-brand)' }}
          >
            <p className="text-left text-xs font-semibold uppercase tracking-wider text-highlight">Not ready yet?</p>
            <h2 className="mt-4 text-2xl text-text md:text-3xl">
              Is your booking process leaking revenue?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-body md:text-base">
              Sign up and download the free checklist right away. You also get one plain-English
              automation tip a week, the same posts from our Streamline South Facebook page.
            </p>
            <div className="mx-auto mt-7 max-w-sm text-left">
              <NewsletterSignup
                resourceUrl="/scheduling-checklist.pdf"
                resourceLabel="Download the checklist (PDF)"
                buttonLabel="Get the checklist"
                submittingLabel="Sending..."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
