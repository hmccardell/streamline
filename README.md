# Streamline

A simple static website deployed via **Cloudflare Pages** and **GitHub**.

## Local preview

Open `index.html` in your browser, or run a local server:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

## Deploy to Cloudflare Pages (GitHub integration)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/streamline.git
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com).
2. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select your GitHub account and the `streamline` repository.
4. Use these build settings:

   | Setting            | Value |
   | ------------------ | ----- |
   | Framework preset   | None  |
   | Build command      | *(leave empty)* |
   | Build output directory | `/` or `.` |

5. Click **Save and Deploy**.

Every push to `main` will trigger a new deployment automatically.

## Optional: GitHub Actions deploy

This repo includes `.github/workflows/deploy.yml` if you prefer deploying via Actions instead of the Cloudflare Git integration. You'll need these GitHub secrets:

- `CLOUDFLARE_API_TOKEN` — create at [Cloudflare API tokens](https://dash.cloudflare.com/profile/api-tokens) with **Cloudflare Pages — Edit** permission.
- `CLOUDFLARE_ACCOUNT_ID` — found on the right sidebar of any Cloudflare zone overview.

## Customize

- **Content** — edit `index.html`
- **Styles** — edit `css/style.css` (change `--accent` for a new color)
- **Scripts** — edit `js/main.js`
