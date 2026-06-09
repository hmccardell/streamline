import { Link } from 'react-router-dom'
import JourneyPath from '../components/JourneyPath'
import CredibilityBar from '../components/CredibilityBar'

const valueProps = [
  {
    title: 'We solve the problem',
    description:
      'We design and build automations that eliminate manual, repetitive work.',
  },
  {
    title: 'We explain the solution',
    description:
      'Every engagement includes documentation and a handoff. Your team will understand what was built and why.',
  },
  {
    title: 'We train your people',
    description:
      'Hands-on AI and technical training built around your actual tools, not generic overviews.',
  },
]

const smbJourneySteps = [
  'Process Audit',
  'Automation Implementation',
  'AI Workshop',
  'Advisory Retainer',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl leading-tight text-cream md:text-5xl md:leading-tight">
            We eliminate the inefficiencies slowing your business down — and make sure your team understands the solution.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/75">
            Technology consulting and training for small businesses across the Gulf Coast.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/smb"
              className="w-full rounded-md bg-amber px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-amber-hover sm:w-auto"
            >
              I run a small business
            </Link>
            <Link
              to="/corporate"
              className="w-full rounded-md border border-cream/30 px-8 py-3 text-sm font-semibold text-cream transition-colors hover:border-cream/60 sm:w-auto"
            >
              I lead a corporate team
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-navy/10 bg-white p-8"
              >
                <h2 className="text-xl text-navy">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-navy/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-cream-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-navy/10 bg-white p-8">
              <h2 className="text-2xl text-navy">Small &amp; Midsize Businesses</h2>
              <p className="mt-4 leading-relaxed text-navy/70">
                Medical/dental practices, law firms, real estate, accounting, contractors.
                5–50 employees in Mississippi, Alabama, and Louisiana.
              </p>
              <Link
                to="/smb"
                className="mt-6 inline-block text-sm font-semibold text-amber transition-colors hover:text-amber-hover"
              >
                View SMB services &rarr;
              </Link>
            </div>
            <div className="rounded-lg border border-navy/10 bg-white p-8">
              <h2 className="text-2xl text-navy">Corporate Teams</h2>
              <p className="mt-4 leading-relaxed text-navy/70">
                Mid-to-large organizations with internal L&amp;D needs around Python, AI,
                and software development upskilling.
              </p>
              <Link
                to="/corporate"
                className="mt-6 inline-block text-sm font-semibold text-amber transition-colors hover:text-amber-hover"
              >
                View corporate services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SMB Client Journey */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl text-navy md:text-4xl">The SMB Client Journey</h2>
          <div className="mt-12">
            <JourneyPath
              steps={smbJourneySteps}
              description="Most clients start with the Process Audit — a low-risk engagement that identifies opportunities without a large upfront commitment."
              cta={
                <Link
                  to="/smb"
                  className="rounded-md bg-amber px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-amber-hover"
                >
                  Start with a Process Audit
                </Link>
              }
            />
          </div>
        </div>
      </section>

      <CredibilityBar />
    </>
  )
}
