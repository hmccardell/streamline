import { Link } from 'react-router-dom'
import { DEMOS_URL, ROUTES, SCHEDULING_URL } from '../config/routes'
import { streamlines } from '../data/streamlines'

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

export default function Streamlines() {
  return (
    <>
      <section className="streamlines-hero py-16 md:py-24">
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

      <section className="plate-glow-teal py-16 md:py-24">
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
            <a
              href={SCHEDULING_URL}
              target="_blank"
              rel="noopener"
              className="mt-7 inline-flex items-center gap-1.5 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Try the live demo
              <ExternalArrow />
            </a>
          </article>
        </div>
      </section>

      <section className="plate-deep py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-highlight">Demos in progress</p>
          <h2 className="mt-2 text-2xl text-text md:text-3xl">More streamlines we build on request.</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-body">
            Every one of these is something we can build and run in your business today. What is still
            in progress is the click-through demo for each one, so for now Appointment Bookings is the
            only one you can try yourself. They are ranked by how universal the pain is, not by how
            hard they are to build. Want us to build one for you, or move it up the demo list?{' '}
            <Link to={ROUTES.contact} className="font-semibold text-highlight transition-colors hover:text-highlight-hover">
              Tell us which one
            </Link>
            .
          </p>

          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((streamline, i) => (
              <li
                key={streamline.name}
                className="surface-card relative overflow-hidden rounded-lg bg-surface"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 overflow-hidden">
                  <span className="absolute left-1/2 top-[30px] w-[150px] -translate-x-1/2 rotate-45 bg-warning py-1 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-bg shadow-lg">
                    Demo soon
                  </span>
                </div>
                <div className="p-6 grayscale">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-text/25 text-xs font-semibold text-body">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg text-text">{streamline.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{streamline.pain}</p>
                  <p className="mt-3 text-sm leading-relaxed text-subtle">{streamline.logic}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="streamlines-cta py-16 md:py-24">
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
