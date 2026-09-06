import { useState } from 'react'

// Posts to the /api/subscribe Pages Function, which forwards to Buttondown.
// No API key in the client: the function holds it server-side.
const ENDPOINT = '/api/subscribe'

// `outcome` comes from the Worker: 'created' (new, confirmation email sent) or
// 'already_subscribed'. When `hasResource` is true a download link is shown
// alongside, so the copy points at it.
function successMessage(outcome, hasResource) {
  if (outcome === 'created') {
    return hasResource
      ? 'Your download is ready below. Check your inbox to confirm the weekly tips.'
      : 'Almost there. Check your inbox for a link to confirm your subscription.'
  }
  return hasResource
    ? "You're already subscribed. Your download is ready below."
    : "You're already subscribed, so you're all set."
}

export default function NewsletterSignup({
  buttonLabel = 'Subscribe',
  submittingLabel = 'Subscribing...',
  // Optional resource handed to the visitor on success (e.g. a checklist PDF in
  // /public). Shown as a download link once the form submits.
  resourceUrl,
  resourceLabel = 'Download the PDF',
}) {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('') // honeypot, stays empty for real people
  const [status, setStatus] = useState('idle')
  const [outcome, setOutcome] = useState('created') // which success message to show

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, company }),
      })
      const data = await res.json()
      if (data.ok) {
        setOutcome(data.status || 'created')
        setStatus('success')
        setEmail('')
      } else {
        setStatus(data.error === 'invalid_email' ? 'invalid' : 'error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="newsletter-email" className="text-sm font-medium text-text">
          Email address
        </label>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.com"
          className="w-full rounded-md border border-text/20 bg-bg px-4 py-3 text-text placeholder:text-disabled focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {status === 'submitting' ? submittingLabel : buttonLabel}
        </button>
      </form>
      {status === 'success' ? (
        <div className="mt-3">
          <p className="text-sm text-text">{successMessage(outcome, Boolean(resourceUrl))}</p>
          {resourceUrl ? (
            <a
              href={resourceUrl}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              {resourceLabel}
            </a>
          ) : null}
        </div>
      ) : status === 'invalid' ? (
        <p className="mt-3 text-sm text-warning">That email address does not look right. Please check it.</p>
      ) : status === 'error' ? (
        <p className="mt-3 text-sm text-warning">Something went wrong. Please try again in a moment.</p>
      ) : (
        <p className="mt-3 text-sm text-subtle">One email a week. Unsubscribe anytime.</p>
      )}
    </div>
  )
}
