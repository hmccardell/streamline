# Streamline South

Marketing website for **Streamline South LLC** — technology consulting and training for Gulf Coast businesses.

Built with React, Tailwind CSS, and React Router. Deployed to Cloudflare Pages.

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

## Deploy to Cloudflare Pages

### Git integration (recommended)

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |

SPA routing is handled via `public/_redirects`.

### GitHub Actions

This repo includes `.github/workflows/deploy.yml` for Actions-based deploys. Required secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Contact form setup

1. Register at [web3forms.com](https://web3forms.com)
2. Open `src/components/ContactForm.jsx`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your access key

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/smb` | SMB Services |
| `/corporate` | Corporate Services |
| `/about` | About |
| `/contact` | Contact |
