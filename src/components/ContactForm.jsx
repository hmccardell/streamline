import { useState } from 'react'

// {OWNER_EMAIL} — Register at https://web3forms.com and replace YOUR_WEB3FORMS_ACCESS_KEY below
const ENDPOINT = 'https://api.web3forms.com/submit'

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
        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy">Name</label>
          <input type="text" id="name" name="name" required className="mt-1 w-full rounded-md border border-navy/20 bg-white px-4 py-3 text-navy focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber" />
        </div>
        <div>
          <label htmlFor="business" className="block text-sm font-medium text-navy">Business name</label>
          <input type="text" id="business" name="business" required className="mt-1 w-full rounded-md border border-navy/20 bg-white px-4 py-3 text-navy focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy">Email</label>
          <input type="email" id="email" name="email" required className="mt-1 w-full rounded-md border border-navy/20 bg-white px-4 py-3 text-navy focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy">Phone <span className="text-navy/40">(optional)</span></label>
          <input type="tel" id="phone" name="phone" className="mt-1 w-full rounded-md border border-navy/20 bg-white px-4 py-3 text-navy focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy">How can we help?</label>
          <textarea id="message" name="message" required rows={5} placeholder="Describe a process you'd like to automate, a training need, or just tell us what's frustrating you." className="mt-1 w-full rounded-md border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber" />
        </div>
        <button type="submit" disabled={status === 'submitting'} className="w-full rounded-md bg-amber px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-amber-hover disabled:opacity-60 sm:w-auto">
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {status === 'success' && <div className="mt-6 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">Thank you for reaching out. We will get back to you shortly.</div>}
      {status === 'error' && <div className="mt-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">Something went wrong. Please try again, or email us directly.</div>}
    </div>
  )
}
