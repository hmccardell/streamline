import { Link } from 'react-router-dom'
import { introduction, differentiators, valueStatement } from '../data/about'

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl text-cream md:text-5xl">
            Built by an automation engineer with 10+ years experience in technology and training.
          </h1>
        </div>
      </section>

      {/* Introduction + Differentiators */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {introduction && (
            <p className="mb-8 leading-relaxed text-navy/80">{introduction}</p>
          )}

          <div className="rounded-lg border border-navy/10 bg-white p-8">
            <ul className="list-disc space-y-4 pl-5 marker:text-amber">
              {differentiators.map((item) => (
                <li key={item.label} className="leading-relaxed text-navy/80">
                  <span className="font-semibold text-amber">{item.label}</span>
                  {' — '}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Value Statement */}
      <section className="bg-cream-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <blockquote className="font-serif text-2xl leading-relaxed text-navy md:text-3xl">
            &ldquo;{valueStatement}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-md bg-amber px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-amber-hover"
          >
            Work with us
          </Link>
        </div>
      </section>
    </>
  )
}
