import { useState } from 'react'

// Posts to the /api/subscribe Pages Function, which forwards to Buttondown.
// No API key in the client: the function holds it server-side.
const ENDPOINT = '/api/subscribe'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('') // honeypot, stays empty for real people
  const [status, setStatus] = useState('idle')

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
          {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' ? (
        <p className="mt-3 text-sm text-text">
          Almost there. Check your inbox for a link to confirm your subscription.
        </p>
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
