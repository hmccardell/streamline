import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes'

export default function CTASection({ headline, body, buttonText = 'Get in touch', buttonTo = ROUTES.contact, dark = false }) {
  return (
    <section className={dark ? 'bg-bg' : 'py-12 md:py-16'}>
      {dark && <div className="brand-divider" aria-hidden="true" />}
      <div className={`mx-auto max-w-3xl px-6 text-center ${dark ? 'py-12 md:py-16' : ''}`}>
        <h2 className="text-3xl text-text md:text-4xl">{headline}</h2>
        {body && <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>}
        <Link
          to={buttonTo}
          className="mt-8 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
