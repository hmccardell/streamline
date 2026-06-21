import { Link } from 'react-router-dom'
import FormattedText from '../components/FormattedText'
import { introduction, differentiators, valueStatement } from '../data/about'

export default function About() {
  return (
    <>
      <section className="hero-glow py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl text-text md:text-5xl">
            Built by an automation engineer with 10+ years experience in technology and training.
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {introduction && (
            <FormattedText text={introduction} className="leading-relaxed text-body" wrapperClassName="mb-8" />
          )}
          <div className="surface-card rounded-lg bg-surface p-8">
            <ul className="list-disc space-y-4 pl-5 marker:text-accent">
              {differentiators.map((item) => (
                <li key={item.label} className="leading-relaxed text-body">
                  <span className="font-semibold text-accent">{item.label}</span>
                  {' — '}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <blockquote className="font-serif text-2xl leading-relaxed text-text md:text-3xl">
            &ldquo;{valueStatement}&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link to="/contact" className="inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover">
            Work with us
          </Link>
        </div>
      </section>
    </>
  )
}
