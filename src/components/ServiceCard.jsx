import { Link } from 'react-router-dom'
import FormattedText from './FormattedText'

function DetailRow({ label, value, link }) {
  return (
    <div className="border-b border-text/8 py-4 last:border-b-0 last:pb-0 first:pt-0">
      <dt className="text-xs font-semibold uppercase tracking-wider text-subtle">{label}</dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-body">
        {link ? (
          <>
            {value.replace('get in touch', '')}
            <Link to="/contact" className="text-highlight hover:text-highlight-hover">get in touch</Link>
          </>
        ) : (
          <FormattedText text={value} className="text-sm leading-relaxed text-body" />
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
    { label: 'Investment', value: service.investment, link: service.investmentLink },
  ].filter(Boolean)

  return (
    <article className="relative">
      {showStep && service.step && (
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-on-accent">
            {service.step}
          </span>
          {service.step < 5 && <div className="hidden h-px flex-1 bg-accent/30 sm:block" />}
        </div>
      )}
      <h3 className="text-2xl text-text md:text-3xl">{service.name}</h3>
      <p className="mt-1 font-semibold text-accent">{service.tagline}</p>
      <FormattedText text={service.description} className="leading-relaxed text-body" wrapperClassName="mt-4 max-w-3xl" />

      <div className="mt-8 space-y-4">
        <dl className="surface-card rounded-lg bg-surface p-5">
          {overviewItems.map(({ label, value, link }) => (
            <DetailRow key={label} label={label} value={value} link={link} />
          ))}
        </dl>

        <div className="rounded-lg border border-warning/20 bg-warning/5 p-5">
          <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-warning">
            <svg className="h-4 w-4 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            What it&apos;s NOT
          </dt>
          <dd className="mt-2">
            <FormattedText text={service.whatItsNot} className="text-sm leading-relaxed text-body" />
          </dd>
        </div>
      </div>
    </article>
  )
}
