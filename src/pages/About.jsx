import { Link } from 'react-router-dom'

const differentiators = [
  {
    label: 'Real engineering experience',
    description:
      'Backend development at a major cloud-based healthcare analytics firm; automated test engineering at Nike.',
  },
  {
    label: 'Proven training outcomes',
    description:
      'Program graduates working at Bloomberg, DRW, Koch Industries, Kroger, Nike, Snap-On, United Airlines, and others.',
  },
  {
    label: 'Requirements expertise',
    description:
      'Business analyst training background means we define the problem correctly before building the solution.',
  },
  {
    label: 'Teaching ability',
    description:
      'Every engagement includes knowledge transfer; clients understand what was built and can maintain it.',
  },
  {
    label: 'Local presence',
    description:
      'Based in Hattiesburg, MS, serving clients across the Gulf Coast in person or anywhere remotely.',
  },
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl text-cream md:text-5xl">
            Built by someone who&apos;s done both — the technical work and the teaching.
          </h1>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-8">
            {differentiators.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-navy/10 bg-white p-8"
              >
                <h2 className="text-lg font-semibold text-amber">{item.label}</h2>
                <p className="mt-3 leading-relaxed text-navy/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Statement */}
      <section className="bg-cream-dark py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <blockquote className="font-serif text-2xl leading-relaxed text-navy md:text-3xl">
            &ldquo;Most technology consultants either can&apos;t explain what they&apos;re building
            or can&apos;t train the people who need to maintain it. Streamline South does both.&rdquo;
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
