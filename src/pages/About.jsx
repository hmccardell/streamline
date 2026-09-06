import { Link } from 'react-router-dom'
import FormattedText from '../components/FormattedText'
import SiteLogo from '../components/SiteLogo'
import ImageZoom from '../components/ImageZoom'
import { introduction, valueStatement, serviceAreas } from '../data/about'
import { ROUTES } from '../config/routes'

const avatarGradient = {
  background: 'linear-gradient(135deg, var(--color-brand-purple), var(--color-brand-teal))',
}

function FounderAvatar({ className }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold text-bg ${className}`}
      style={avatarGradient}
      aria-hidden="true"
    >
      H
    </div>
  )
}

export default function About() {
  return (
    <section className="hero-glow py-12 md:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:flex-row sm:gap-12 lg:gap-16">
        <div className="shrink-0 text-center sm:w-64 lg:w-72">
          <ImageZoom
            className="w-full"
            label="Enlarge founder portrait"
            zoomContent={<FounderAvatar className="h-[70vw] w-[70vw] max-h-[420px] max-w-[420px] text-8xl" />}
          >
            <FounderAvatar className="mx-auto h-44 w-44 text-6xl sm:h-48 sm:w-48" />
          </ImageZoom>

          <p className="mt-3 text-xs italic text-subtle">Founder, Streamline South</p>

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
            Serving the Gulf Coast
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {serviceAreas.map((town) => (
              <li key={town} className="rounded-full border border-text/15 px-3 py-1.5 text-xs text-body">
                {town}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              to={ROUTES.contact}
              className="inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
