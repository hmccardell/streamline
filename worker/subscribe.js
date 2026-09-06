// POST /api/subscribe  { email: string, company?: string }
// Proxies newsletter signups to Buttondown. The API key stays server-side as
// the BUTTONDOWN_API_KEY secret and never reaches the browser.
//
// On success: { ok: true, status } where status is 'created' (new subscriber,
// confirmation email on the way) or 'already_subscribed'. The client uses that
// only to pick the right confirmation copy; any page-specific resource (e.g. the
// scheduling checklist PDF) is handed to the visitor on the page, not emailed,
// since tag/metadata-driven automations need a paid Buttondown plan.

const BUTTONDOWN_API = 'https://api.buttondown.email/v1/subscribers'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}

export async function handleSubscribe(request, env) {
  if (!env.BUTTONDOWN_API_KEY) {
    console.error('subscribe: BUTTONDOWN_API_KEY is not set')
    return json({ ok: false, error: 'server_not_configured' }, 500)
  }

  let payload
  try {
    payload = await request.json()
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400)
  }

  // Honeypot: real people leave this blank. Pretend success so bots do not retry.
  if (payload.company) return json({ ok: true, status: 'already_subscribed' })

  const email = String(payload.email || '').trim().toLowerCase()
  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'invalid_email' }, 400)
  }

  let res
  try {
    res = await fetch(BUTTONDOWN_API, {
      method: 'POST',
      headers: {
        Authorization: `Token ${env.BUTTONDOWN_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        // No `type` override: Buttondown's default double opt-in applies, so the
        // subscriber is created `unactivated` and gets a confirmation email.
        tags: ['website'],
        referrer_url: request.headers.get('referer') || 'https://streamlinesouth.com/',
      }),
    })
  } catch (err) {
    console.error('subscribe: fetch to Buttondown failed', err)
    return json({ ok: false, error: 'upstream_unreachable' }, 502)
  }

  if (res.ok) return json({ ok: true, status: 'created' })

  const detail = await res.text()

  // Already on the list (or pending confirmation): nothing to do, treat as
  // success for the visitor rather than showing an error.
  if ((res.status === 400 || res.status === 409) && /already|exist|unique/i.test(detail)) {
    return json({ ok: true, status: 'already_subscribed' })
  }

  console.error(`subscribe: Buttondown responded ${res.status}: ${detail}`)
  return json({ ok: false, error: 'upstream_error' }, 502)
}
