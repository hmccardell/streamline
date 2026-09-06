import { handleSubscribe } from './subscribe.js'

// Static assets serve straight from the edge (see `assets` in wrangler.jsonc).
// `run_worker_first: ["/api/*"]` means this Worker only runs for /api/* paths;
// everything else never reaches here. The ASSETS fallback below is a safety net.
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // Add new API routes here.
    if (url.pathname === '/api/subscribe') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } })
      }
      return handleSubscribe(request, env)
    }

    if (url.pathname.startsWith('/api/')) {
      return new Response('Not Found', { status: 404 })
    }

    return env.ASSETS.fetch(request)
  },
}
