import { Link } from 'react-router-dom'
import FormattedText from './FormattedText'

function DetailRow({ label, value, link }) {
  return (
    <div className="border-b border-navy/10 py-4 last:border-b-0 last:pb-0 first:pt-0">
      <dt className="text-xs font-semibold uppercase tracking-wider text-navy/50">{label}</dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-navy/80">
        {link ? (
          <>
            {value.replace('get in touch', '')}
            <Link to="/contact" className="text-amber hover:text-amber-hover">
              get in touch
            </Link>
          </>
        ) : (
          <FormattedText text={value} className="text-sm leading-relaxed text-navy/80" />
        )}
      </dd>
    </div>
  )
}

export default function ServiceCard({ service, showStep = true }) {
  const overviewItems = [
    { label: "Who it's for", value: service.whoItsFor },
    { label: "What's included", value: service.whatsIncluded },
    service.specialties && { label: 'Specialties', value: service.specialties },
    service.duration && { label: 'Duration', value: service.duration },
    service.timeline && { label: 'Timeline', value: service.timeline },
    {
      label: 'Investment',
      value: service.investment,
      link: service.investmentLink,
    },
  ].filter(Boolean)

  return (
    <article className="relative">
      {showStep && service.step && (
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-sm font-semibold text-navy">
            {service.step}
          </span>
          {service.step < 5 && (
            <div className="hidden h-px flex-1 bg-amber/30 sm:block" />
          )}
        </div>
      )}
      <h3 className="text-2xl text-navy md:text-3xl">{service.name}</h3>
      <p className="mt-1 font-semibold text-amber">{service.tagline}</p>
      <FormattedText
        text={service.description}
        className="leading-relaxed text-navy/80"
        wrapperClassName="mt-4 max-w-3xl"
      />

      <div className="mt-8 space-y-4">
        <dl className="rounded-lg border border-navy/10 bg-white p-5">
          {overviewItems.map(({ label, value, link }) => (
            <DetailRow key={label} label={label} value={value} link={link} />
          ))}
        </dl>

        <div className="rounded-lg border border-amber/20 bg-amber/5 p-5">
          <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy/50">
            <svg className="h-4 w-4 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            What it&apos;s NOT
          </dt>
          <dd className="mt-2">
            <FormattedText
              text={service.whatItsNot}
              className="text-sm leading-relaxed text-navy/80"
            />
          </dd>
        </div>
      </div>
    </article>
  )
}
