import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FormattedText from '../components/FormattedText'
import { serviceSlug } from '../components/ServiceSectionNav'
import { ROUTES } from '../config/routes'
import { smbServices, customAppShowcase } from '../data/smbServices'

const processAuditId = serviceSlug('Process Audit')

function SearchIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="15.3" y1="15.3" x2="21" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 L4 14 h6 l-1 8 9 -13 h-6 z" fill="currentColor" />
    </svg>
  )
}

function BulbIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.6" />
      <line x1="9.5" y1="18" x2="14.5" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="10" y1="21" x2="14" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function CompassIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15 9 L12.5 12.5 L9 15 L11.5 11.5 Z" fill="currentColor" />
    </svg>
  )
}

function CapIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4 L22 9 L12 14 L2 9 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 11 v4 a6 3 0 0 0 12 0 v-4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function WindowIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.6" />
      <line x1="6.5" y1="6.5" x2="6.5" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="9.5" y1="6.5" x2="9.5" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-body transition-transform duration-200 group-open:rotate-180"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 9 L12 15 L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SERVICE_ICONS = {
  'Process Audit': SearchIcon,
  'Process Automation Implementation': BoltIcon,
  'Custom Application': WindowIcon,
  'AI Readiness Workshop': BulbIcon,
  'AI Advisory Retainer': CompassIcon,
  'Technical Training': CapIcon,
}

function ServiceField({ label, value }) {
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-highlight">{label}</p>
      <FormattedText text={value} className="text-sm leading-relaxed text-body" />
    </div>
  )
}

export default function SMB() {
  const { hash } = useLocation()

  // Footer and Home link straight to a specific service (e.g. /smb#process-audit).
  // Open that accordion so the linked content is visible after ScrollToTop scrolls to it.
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el && el.tagName === 'DETAILS') el.open = true
  }, [hash])

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">How we work</p>
          <h1 className="mt-3 text-3xl text-text md:text-4xl">
            Practical technology help for businesses that are ready to work smarter.
          </h1>
          <p className="mt-4 text-lg text-body">
            Whether you're a one-person operation or a growing team, we help you find the
            inefficiencies slowing things down and build practical systems that make the work more
            consistent.
          </p>
          <p className="mt-4 text-lg text-body">
            Start with a{' '}
            <Link
              to={`${ROUTES.smb}#${processAuditId}`}
              className="font-semibold text-highlight transition-colors hover:text-highlight-hover"
            >
              Process Audit
            </Link>{' '}
            to see where the biggest opportunities are. No commitment to implement anything.
          </p>

          <div className="mt-10 space-y-3">
            {smbServices.map((service, i) => {
              const Icon = SERVICE_ICONS[service.name] ?? SearchIcon

              return (
                <details
                  key={service.name}
                  id={serviceSlug(service.name)}
                  open={i === 0}
                  className="group scroll-mt-24 overflow-hidden rounded-lg border border-text/10 bg-surface"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                    <span className="shrink-0 text-highlight">
                      <Icon />
                    </span>
                    <span className="flex-1 font-semibold text-text">{service.name}</span>
                    {service.priceRange && (
                      <span className="whitespace-nowrap text-sm text-body">{service.priceRange}</span>
                    )}
                    <ChevronIcon />
                  </summary>

                  <div className="grid gap-x-8 gap-y-4 px-5 pb-6 pt-1 sm:grid-cols-2 sm:pl-[3.75rem]">
                    <ServiceField label="Who it's for" value={service.whoItsFor} />
                    <ServiceField label="What's included" value={service.whatsIncluded} />
                    <ServiceField label="Timeline" value={service.timeline} />
                    <ServiceField label="What it's not" value={service.whatItsNot} />
                  </div>
                </details>
              )
            })}
          </div>

          <article
            className="surface-card card-accent mt-10 overflow-hidden rounded-lg bg-surface p-6 md:p-8"
            style={{ '--card-accent': 'var(--gradient-brand)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-highlight">
              {customAppShowcase.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl text-text md:text-3xl">{customAppShowcase.title}</h2>

            {customAppShowcase.instagram ? (
              <a
                href={customAppShowcase.instagram.url}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-text/15 px-3 py-1 text-xs font-medium text-body transition-colors hover:border-highlight/50 hover:text-text"
              >
                <InstagramIcon />
                {customAppShowcase.instagram.label}
              </a>
            ) : null}

            {customAppShowcase.screenshot?.src ? (
              <img
                src={customAppShowcase.screenshot.src}
                alt={customAppShowcase.screenshot.alt}
                className="mt-6 w-full rounded-lg border border-white/10"
              />
            ) : (
              <div className="mt-6 flex aspect-[16/10] items-center justify-center rounded-lg border border-dashed border-text/25 bg-surface-alt text-xs text-subtle">
                Screenshot coming soon
              </div>
            )}

            <div className="mt-6 space-y-3">
              {customAppShowcase.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </div>

            {customAppShowcase.testimonial ? (
              <figure className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-5">
                <blockquote className="text-sm leading-relaxed text-body">
                  &ldquo;{customAppShowcase.testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-xs font-semibold text-accent-text">
                  {customAppShowcase.testimonial.attribution}
                </figcaption>
              </figure>
            ) : null}

            <p className="mt-5 text-xs text-subtle">{customAppShowcase.footnote}</p>
          </article>
        </div>
      </section>

      <section className="smb-audit-cta py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div
            className="card-accent overflow-hidden rounded-2xl border border-white/10 bg-bg/95 px-6 py-10 text-center shadow-2xl backdrop-blur-md md:px-12 md:py-14"
            style={{ '--card-accent': 'var(--gradient-brand)' }}
          >
            <h2 className="text-3xl text-text md:text-4xl">
              Not sure where to start? Start with the Audit.
            </h2>
            <p className="mx-auto mt-4 text-base leading-relaxed text-body md:text-lg">
              The Process Audit is a fixed-fee, no-commitment engagement. You'll get a written report
              of your automation opportunities and projected time savings, whether you work with us
              further or not.
            </p>
            <Link
              to={ROUTES.contact}
              className="mt-7 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
