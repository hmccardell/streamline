import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FormattedText from '../components/FormattedText'
import { serviceSlug } from '../components/ServiceSectionNav'
import { ROUTES } from '../config/routes'
import { corporateServices } from '../data/corporateServices'

const workshopId = serviceSlug('Custom Technical Workshop')
const curriculumId = serviceSlug('Curriculum Design')

function CapIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4 L22 9 L12 14 L2 9 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 11 v4 a6 3 0 0 0 12 0 v-4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function BlueprintIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
  'Custom Technical Workshop': CapIcon,
  'Curriculum Design': BlueprintIcon,
}

function ServiceField({ label, value }) {
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-highlight">{label}</p>
      <FormattedText text={value} className="text-sm leading-relaxed text-body" />
    </div>
  )
}

export default function Corporate() {
  const { hash } = useLocation()

  // Footer and Home link straight to a specific service (e.g. /corporate#curriculum-design).
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
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">Corporate training</p>
          <h1 className="mt-3 text-3xl text-text md:text-4xl">
            Technical training built for your team, your tools, and your goals.
          </h1>
          <p className="mt-4 text-lg text-body">
            Not off-the-shelf curriculum with your logo on the slides. Every engagement is designed
            from scratch around your environment, your systems, and the people who will use them.
          </p>
          <p className="mt-4 text-lg text-body">
            Start with a{' '}
            <Link
              to={`${ROUTES.corporate}#${workshopId}`}
              className="font-semibold text-highlight transition-colors hover:text-highlight-hover"
            >
              Custom Technical Workshop
            </Link>{' '}
            for instructor-led upskilling, or have us handle{' '}
            <Link
              to={`${ROUTES.corporate}#${curriculumId}`}
              className="font-semibold text-highlight transition-colors hover:text-highlight-hover"
            >
              Curriculum Design
            </Link>{' '}
            so your own team can deliver it.
          </p>

          <div className="mt-10 space-y-3">
            {corporateServices.map((service, i) => {
              const Icon = SERVICE_ICONS[service.name] ?? CapIcon

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
                    {service.specialties && (
                      <ServiceField label="Specialties" value={service.specialties} />
                    )}
                    <ServiceField label="Duration" value={service.duration} />
                    <ServiceField label="What it's not" value={service.whatItsNot} />
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </section>

      <section className="corporate-scope-cta py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div
            className="card-accent overflow-hidden rounded-2xl border border-white/10 bg-bg/95 px-6 py-10 text-center shadow-2xl backdrop-blur-md md:px-12 md:py-14"
            style={{ '--card-accent': 'var(--gradient-brand)' }}
          >
            <h2 className="text-3xl text-text md:text-4xl">Let's scope your engagement.</h2>
            <p className="mx-auto mt-4 text-base leading-relaxed text-body md:text-lg">
              Every program is built from scratch. Tell us your team's goals and current skill level,
              and we will put together a plan and a quote.
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
