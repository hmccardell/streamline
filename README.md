# Streamline South

Marketing website for **Streamline South LLC** — technology consulting and training for Gulf Coast businesses.

Built with React, Tailwind CSS, and React Router. Deployed to Cloudflare Workers:
the prerendered site is served as static assets, and a small Worker
(`worker/index.js`) handles `/api/*` routes.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy

```bash
npm run deploy
```

This runs `npm run build` then `wrangler deploy`, which uploads `dist/` as static
assets and `worker/index.js` as the Worker. Config lives in `wrangler.jsonc`;
`run_worker_first` there scopes the Worker to `/api/*` so all other paths serve
straight from the asset store.

First deploy from a machine needs `npx wrangler login`. For CI, set
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment instead.

### Local Worker testing

```bash
npm run worker:dev
```

Builds, then runs `wrangler dev` (Worker + built assets on one port). Plain
`npm run dev` is Vite only and does not run the Worker, so `/api/*` will 404
there.

## Contact form setup

1. Register at [web3forms.com](https://web3forms.com)
2. Open `src/components/ContactForm.jsx`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your access key

## Newsletter signup setup

The home page signup posts to `/api/subscribe`, handled by `worker/subscribe.js`,
which forwards to Buttondown. The API key never reaches the browser.

1. In Buttondown, go to Settings > Programming and copy the API key.
2. Store it as a Worker secret:

   ```bash
   npx wrangler secret put BUTTONDOWN_API_KEY
   ```

   (or add it in the Cloudflare dashboard under the `streamline` Worker >
   Settings > Variables and Secrets).
3. For local testing, copy `.dev.vars.example` to `.dev.vars`, fill in the key,
   and run `npm run worker:dev`.

The handler relies on Buttondown's default double opt-in: a new signup is created
`unactivated` and gets a confirmation email, joining the list only after they
click the link. Signups arrive in Buttondown tagged `website`.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/streamlines` | Common Streamlines (index) |
| `/streamlines/scheduling` | Scheduling & Booking |
| `/smb` | SMB Services |
| `/corporate` | Corporate Services |
| `/about` | About |
| `/contact` | Contact |

Individual streamline pages live in `src/pages/streamlines/`. The listing
(`Streamlines.jsx`) and each streamline detail page (e.g. `Scheduling.jsx`) sit
side by side there; add a new streamline as a new file in that folder plus a
route in `src/AppShell.jsx` and `src/config/routes.js`.
