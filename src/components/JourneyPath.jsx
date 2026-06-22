import { Link } from 'react-router-dom'

function normalizeStep(step) {
  return typeof step === 'string' ? { label: step } : step
}

const cardClass =
  'surface-card card-accent flex w-full items-center gap-3 rounded-lg bg-surface px-4 py-3 sm:w-auto sm:flex-col sm:gap-1 sm:px-5 sm:py-4 sm:text-center'

function StepCard({ step, index }) {
  const content = (
    <>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-on-accent">
        {index + 1}
      </span>
      <span className="text-sm font-medium text-text">{step.label}</span>
    </>
  )

  if (step.to) {
    return (
      <Link
        to={step.to}
        className={`${cardClass} transition-colors hover:bg-surface-alt hover:ring-1 hover:ring-accent/30`}
      >
        {content}
      </Link>
    )
  }

  return <div className={cardClass}>{content}</div>
}

export default function JourneyPath({ steps, description, cta }) {
  return (
    <div>
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-0">
        {steps.map((rawStep, i) => {
          const step = normalizeStep(rawStep)
          return (
            <div key={step.label} className="flex items-center">
              <StepCard step={step} index={i} />
              {i < steps.length - 1 && (
                <svg className="mx-2 hidden h-5 w-5 shrink-0 text-accent sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          )
        })}
      </div>
      {description && <p className="mx-auto mt-8 max-w-2xl text-center text-body">{description}</p>}
      {cta && <div className="mt-8 flex justify-center">{cta}</div>}
    </div>
  )
}
