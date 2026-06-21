import { Link } from 'react-router-dom'

export default function CTASection({ headline, body, buttonText = 'Get in touch', buttonTo = '/contact', dark = false }) {
  return (
    <section className={dark ? 'border-t border-accent/20 bg-bg py-16 md:py-20' : 'py-16 md:py-20'}>
      <div className="mx-auto max-w-3xl px-6 text-center">
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
