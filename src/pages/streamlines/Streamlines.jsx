import { Link } from 'react-router-dom'
import { ROUTES, SCHEDULING_URL } from '../../config/routes'
import { streamlines } from '../../data/streamlines'

const liveStreamline = streamlines.find((s) => s.status === 'live')
const upcoming = streamlines.filter((s) => s.status === 'coming-soon')

function SplitRow({ streamline }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      <div className="rounded-md border border-text/10 bg-surface-alt p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-body">Your customer sees</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text/90">{streamline.youSee}</p>
      </div>
      <div className="rounded-md border border-text/10 bg-surface-alt p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-body">Your dashboard shows</p>
        <p className="mt-1.5 text-sm leading-relaxed text-text/90">{streamline.dashboardSee}</p>
      </div>
    </div>
  )
}

function ExternalArrow() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
    </svg>
  )
}

function DemoSoonTag() {
  return (
    <span className="inline-flex flex-none items-center gap-1.5 rounded-full border border-text/15 bg-surface-alt px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-subtle">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-text/70" aria-hidden="true" />
      Demo soon
    </span>
  )
}

function AutomationBlock({ logic, className = '' }) {
  return (
    <div className={`rounded-md border border-highlight/15 bg-highlight/5 px-3.5 py-3 ${className}`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-highlight">
        The automation
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-body">{logic}</p>
    </div>
  )
}

export default function Streamlines() {
  return (
    <>
      <section className="streamlines-hero py-12 md:py-16">
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <div
            className="card-accent overflow-hidden rounded-2xl border border-white/10 bg-bg/95 px-6 py-10 text-left shadow-2xl backdrop-blur-md md:px-12 md:py-14"
            style={{ '--card-accent': 'var(--gradient-brand)' }}
          >
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-text md:text-5xl">
                stream&middot;line
              </h1>
              <p className="mt-2 text-sm italic text-subtle">
                \ &#712;str&#275;m-&#716;l&#299;n \ &nbsp; noun
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-subtle">Plural</p>
                <p className="mt-2 text-sm leading-relaxed text-body">streamlines</p>
              </div>

              <div className="brand-divider-fade mt-6 max-w-xs" aria-hidden="true" />

              <ol className="mt-6 space-y-4 text-base leading-relaxed text-body md:text-lg">
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-highlight/40 text-xs font-semibold text-highlight">
                    1
                  </span>
                  <span>A simpler, more effective, or more productive way.</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-highlight/40 text-xs font-semibold text-highlight">
                    2
                  </span>
                  <span>
                    If trigger A happens, then events B and C happen, too. Every time. End to end. Consistency brings sanity.
                  </span>
                </li>
              </ol>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-subtle">Synonyms</p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  automation, workflow, system, that thing you keep meaning to set up
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plate-glow-teal py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Live demo</p>
          <article
            className="card-accent surface-card mt-4 rounded-lg bg-surface p-6 md:p-8"
            style={{ '--card-accent': 'var(--gradient-brand)' }}
          >
            <h2 className="text-2xl text-text md:text-3xl">{liveStreamline.name}</h2>
            <p className="mt-3 leading-relaxed text-body">{liveStreamline.pain}</p>
            <p className="mt-4 rounded-md border border-highlight/20 bg-highlight/5 px-4 py-3 text-sm leading-relaxed text-text/90">
              {liveStreamline.logic}
            </p>
            <SplitRow streamline={liveStreamline} />
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={SCHEDULING_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
              >
                Try the live demo
                <ExternalArrow />
              </a>
              <Link
                to={ROUTES.schedulingStreamline}
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-highlight transition-colors hover:text-highlight-hover"
              >
                See how it works
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="plate-deep py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">The build list</p>
          <h2 className="mt-2 text-2xl text-text md:text-3xl">More streamlines we build on request.</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-body">
            Every one of these is a streamline we can build and run in your business now. Want one
            built for your business, or see a demo sooner?{' '}
            <Link to={ROUTES.contact} className="font-semibold text-highlight transition-colors hover:text-highlight-hover">
              Tell us which one
            </Link>
            .
          </p>

          <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((streamline, i) => {
              if (i === 0) {
                return (
                  <li key={streamline.name} className="sm:col-span-2 lg:col-span-3">
                    <article
                      className="card-accent surface-card rounded-lg bg-surface p-6 md:p-8"
                      style={{ '--card-accent': 'var(--gradient-brand)' }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                          {streamline.name}
                        </span>
                        <DemoSoonTag />
                      </div>
                      <p className="mt-3 max-w-2xl text-xl font-medium leading-snug text-text md:text-2xl">
                        {streamline.pain}
                      </p>
                      <AutomationBlock logic={streamline.logic} className="mt-4 px-4 py-3.5" />
                    </article>
                  </li>
                )
              }
                  
              return (
                <li
                  key={streamline.name}
                  className="surface-card flex flex-col rounded-lg bg-surface p-6 transition-colors hover:border-highlight/30"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                    {streamline.name}
                  </span>
                  <p className="mt-3 text-base font-medium leading-snug text-text">{streamline.pain}</p>
                  <AutomationBlock logic={streamline.logic} className="mt-4" />
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="streamlines-cta py-12 md:py-16">
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <div
            className="card-accent overflow-hidden rounded-2xl border border-white/10 bg-bg/95 px-6 py-10 text-center shadow-2xl backdrop-blur-md md:px-12 md:py-14"
            style={{ '--card-accent': 'var(--gradient-brand)' }}
          >
            <h2 className="text-3xl text-text md:text-4xl">Want one of these running in your business?</h2>
            <p className="mx-auto mt-4 text-base leading-relaxed text-body md:text-lg">
              Tell us which problem is most painful.
            </p>
            <Link
              to={ROUTES.contact}
              className="mt-7 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
