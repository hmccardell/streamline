import { useState } from 'react'

// {OWNER_EMAIL} — Register at https://web3forms.com and replace YOUR_WEB3FORMS_ACCESS_KEY below
const ENDPOINT = 'https://api.web3forms.com/submit'

const inputClass =
  'mt-1 w-full rounded-md border border-text/20 bg-surface px-4 py-3 text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.target
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: new FormData(form) })
      const data = await res.json()
      if (data.success) { setStatus('success'); form.reset() } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="access_key" value="4dd9fdfa-c1a2-4c83-b030-5729d4c939ee" />
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text">Name</label>
          <input type="text" id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="business" className="block text-sm font-medium text-text">Business name</label>
          <input type="text" id="business" name="business" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text">Email</label>
          <input type="email" id="email" name="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text">
            Phone <span className="text-disabled">(optional)</span>
          </label>
          <input type="tel" id="phone" name="phone" className={inputClass} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text">How can we help?</label>
          <textarea id="message" name="message" required rows={5} placeholder="Describe a process you'd like to automate, a training need, or just tell us what's frustrating you." className={`${inputClass} placeholder:text-disabled`} />
        </div>
        <button type="submit" disabled={status === 'submitting'} className="w-full rounded-md bg-accent px-8 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto">
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {status === 'success' && (
        <div className="mt-6 rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-text">
          Thank you for reaching out. We will get back to you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="mt-6 rounded-md border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-text">
          Something went wrong. Please try again, or email us directly.
        </div>
      )}
    </div>
  )
}
