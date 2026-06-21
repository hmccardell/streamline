import { Link } from 'react-router-dom'
import JourneyPath from '../components/JourneyPath'
import CredibilityBar from '../components/CredibilityBar'
import { serviceSlug } from '../components/ServiceSectionNav'

const processAuditId = serviceSlug('Process Audit')

const valueProps = [
  { title: 'We solve the problem', description: 'We design and build automations that eliminate manual, repetitive work.' },
  { title: 'We explain the solution', description: 'Every engagement includes documentation and a handoff. Your team will understand what was built and why.' },
  { title: 'We train your people', description: 'Hands-on AI and technical training built around your actual tools, not generic overviews.' },
]

const smbJourneySteps = ['Process Audit', 'Automation Implementation', 'AI Workshop', 'Advisory Retainer']

export default function Home() {
  return (
    <>
      <section className="hero-glow py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl leading-tight text-text md:text-5xl md:leading-tight">
            We eliminate the inefficiencies slowing your business down — and make sure your team understands the solution.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            Technology consulting and training for small businesses across the Gulf Coast.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/smb" className="w-full rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover sm:w-auto">
              I run a small business
            </Link>
            <Link to="/corporate" className="w-full rounded-md border border-text/20 px-8 py-3 text-sm font-semibold text-text transition-colors hover:border-highlight/50 hover:bg-highlight/5 sm:w-auto">
              I lead a corporate team
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {valueProps.map((item) => (
              <div key={item.title} className="surface-card card-accent rounded-lg bg-surface p-8">
                <h2 className="text-xl text-text">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="surface-card rounded-lg bg-bg p-8">
              <h2 className="text-2xl text-text">Small &amp; Midsize Businesses</h2>
              <p className="mt-4 leading-relaxed text-body">
                Medical/dental practices, law firms, real estate, accounting, contractors.
                5–50 employees in Mississippi, Alabama, and Louisiana.
              </p>
              <Link to="/smb" className="mt-6 inline-block text-sm font-semibold text-highlight transition-colors hover:text-highlight-hover">
                View SMB services &rarr;
              </Link>
            </div>
            <div className="surface-card rounded-lg bg-bg p-8">
              <h2 className="text-2xl text-text">Corporate Teams</h2>
              <p className="mt-4 leading-relaxed text-body">
                Mid-to-large organizations with internal L&amp;D needs around Python, AI,
                and software development upskilling.
              </p>
              <Link to="/corporate" className="mt-6 inline-block text-sm font-semibold text-highlight transition-colors hover:text-highlight-hover">
                View corporate services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl text-text md:text-4xl">The SMB Client Journey</h2>
          <div className="mt-12">
            <JourneyPath
              steps={smbJourneySteps}
              description="Most clients start with the Process Audit — a low-risk engagement that identifies opportunities without a large upfront commitment."
              cta={
                <Link to={`/smb#${processAuditId}`} className="rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover">
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
