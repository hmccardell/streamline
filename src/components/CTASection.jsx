import { Link } from 'react-router-dom'

export default function CTASection({ headline, body, buttonText = 'Get in touch', buttonTo = '/contact', dark = false }) {
  return (
    <section className={dark ? 'bg-navy py-16 md:py-20' : 'py-16 md:py-20'}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className={`text-3xl md:text-4xl ${dark ? 'text-cream' : 'text-navy'}`}>
          {headline}
        </h2>
        {body && (
          <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-cream/80' : 'text-navy/70'}`}>
            {body}
          </p>
        )}
        <Link
          to={buttonTo}
          className="mt-8 inline-block rounded-md bg-amber px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-amber-hover"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
