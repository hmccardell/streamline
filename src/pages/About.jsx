import { Link } from 'react-router-dom'
import FormattedText from '../components/FormattedText'
import SiteLogo from '../components/SiteLogo'
import ImageZoom from '../components/ImageZoom'
import LinkedInIcon from '../components/LinkedInIcon'
import { introduction, valueStatement, apprenticeship } from '../data/about'
import { ROUTES } from '../config/routes'

const LINKEDIN_URL = 'https://www.linkedin.com/in/hayes-ii'

function FounderImage({ name, width, height, className = '', rounded = 'rounded-full' }) {
  return (
    <picture>
      <source srcSet={`/${name}.avif`} type="image/avif" />
      <source srcSet={`/${name}.webp`} type="image/webp" />
      <img
        src={`/${name}.webp`}
        width={width}
        height={height}
        alt="Hayes, founder of Streamline South"
        className={`block object-cover ${rounded} ${className}`}
      />
    </picture>
  )
}

function PhotoImage({ name, alt, width, height, className = '' }) {
  return (
    <picture>
      <source srcSet={`/${name}.avif`} type="image/avif" />
      <source srcSet={`/${name}.webp`} type="image/webp" />
      <img
        src={`/${name}.webp`}
        width={width}
        height={height}
        alt={alt}
        className={`block object-cover ${className}`}
      />
    </picture>
  )
}

function CompaniesBand() {
  return (
    <section className="border-y border-text/8 bg-surface-alt py-10 md:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-xl leading-snug text-text md:text-2xl">
          Companies that have hired people I&rsquo;ve directly trained and mentored
        </h2>
        <p className="mt-2 text-sm text-subtle">On contract or full time.</p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {apprenticeship.companies.map((name) => (
            <li
              key={name}
              className="rounded-full border border-text/15 px-3.5 py-1.5 text-sm text-body"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AboutCta() {
  return (
    <section className="about-cta py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div
          className="card-accent overflow-hidden rounded-2xl border border-white/10 bg-bg/95 px-6 py-10 text-center shadow-2xl backdrop-blur-md md:px-12 md:py-14"
          style={{ '--card-accent': 'var(--gradient-brand)' }}
        >
          <h2 className="text-3xl text-text md:text-4xl">Use me as a resource.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-body md:text-lg">
            Weighing an automation, custom application, or a training plan? Run it past me. I'll give you the honest advice you need to make the best decision.
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
  )
}

function ApprenticeshipSection() {
  return (
    <section className="border-t border-text/8 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-xl leading-snug text-text md:text-2xl">{apprenticeship.heading}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-body">{apprenticeship.intro}</p>

        <div className="mt-12 space-y-12 md:space-y-16">
          {apprenticeship.rows.map((row) => (
            <div
              key={row.image}
              className={`flex flex-col gap-6 sm:gap-10 md:items-center ${
                row.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="md:w-1/2">
                <ImageZoom
                  className="w-full"
                  label={`Enlarge photo: ${row.caption}`}
                  zoomContent={
                    <PhotoImage
                      name={row.image}
                      alt={row.alt}
                      width={row.width}
                      height={row.height}
                      className="h-auto max-h-[82vh] w-auto max-w-[92vw] rounded-xl"
                    />
                  }
                >
                  <PhotoImage
                    name={row.image}
                    alt={row.alt}
                    width={row.width}
                    height={row.height}
                    className="w-full rounded-xl"
                  />
                </ImageZoom>
                <p className="mt-2 text-xs italic text-subtle">{row.caption}</p>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg leading-snug text-text">{row.heading}</h3>
                <p className="mt-3 leading-relaxed text-body">{row.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl md:mt-16">
          <h3 className="text-lg leading-snug text-text">{apprenticeship.xchange.heading}</h3>
          <p className="mt-3 leading-relaxed text-body">{apprenticeship.xchange.body}</p>
          <p className="mt-3 leading-relaxed text-body">{apprenticeship.xchange.about}</p>
          <p className="mt-4 text-xs text-subtle">
            Partners:{' '}
            {apprenticeship.xchange.links.map((link, i) => (
              <span key={link.href}>
                {i > 0 && <span aria-hidden="true"> &middot; </span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="underline transition-colors hover:text-highlight"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
    <section className="hero-glow py-12 md:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:flex-row sm:gap-12 lg:gap-16">
        <div className="shrink-0 text-center sm:w-64 lg:w-72">
          <ImageZoom
            className="w-full"
            label="Enlarge founder portrait"
            zoomContent={
              <FounderImage
                name="founder"
                width={720}
                height={960}
                rounded="rounded-2xl"
                className="h-auto w-[min(80vw,360px)]"
              />
            }
          >
            <FounderImage
              name="founder-avatar"
              width={512}
              height={512}
              className="mx-auto h-52 w-52 sm:h-56 sm:w-56"
            />
          </ImageZoom>

          <p className="mt-3 text-xs italic text-subtle">Founder, Streamline South</p>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-body transition-colors hover:text-highlight"
          >
            <LinkedInIcon className="h-4 w-4" />
            Connect on LinkedIn
          </a>

          <ImageZoom
            className="mt-6 w-full"
            label="Enlarge Streamline South logo"
            zoomContent={
              <img src="/logo.png" alt="Streamline South logo" className="h-auto w-[min(90vw,860px)]" />
            }
          >
            <SiteLogo variant="hero" />
          </ImageZoom>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="text-2xl leading-snug text-text md:text-3xl">
            Built by an automation engineer with 10+ years in technology and training.
          </h1>

          {introduction && (
            <FormattedText
              text={introduction}
              className="leading-relaxed text-body"
              wrapperClassName="mt-4 max-w-2xl space-y-4"
            />
          )}

          <blockquote
            className="my-6 max-w-xl border-l-[3px] pl-4 text-base italic leading-relaxed text-text"
            style={{ borderColor: 'var(--color-brand-teal)' }}
          >
            &ldquo;{valueStatement}&rdquo;
          </blockquote>

          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-accent-text">
            Training track record
          </p>
          <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-5">
            {apprenticeship.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xl font-semibold text-highlight">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-body">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    <CompaniesBand />

    <ApprenticeshipSection />

    <AboutCta />
    </>
  )
}
