import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTE_PATHS } from '../src/config/routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '../dist')
const port = 4173
const baseUrl = `http://localhost:${port}`

// Prerender `/` last so the Vite SPA shell in dist/index.html stays empty for other routes.
const routesToPrerender = [...ROUTE_PATHS.filter((route) => route !== '/'), '/']

const previewServer = await preview({
  preview: { port, strictPort: true },
})

const browser = await puppeteer.launch({ headless: true })

try {
  for (const route of routesToPrerender) {
    const page = await browser.newPage()
    await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 60000 })
    await page.waitForSelector('main h1', { timeout: 15000 })
    await new Promise((resolve) => setTimeout(resolve, 500))

    const html = await page.content()

    if (route === '/') {
      writeFileSync(join(distDir, 'index.html'), html, 'utf8')
    } else {
      const routeDir = join(distDir, route.slice(1))
      mkdirSync(routeDir, { recursive: true })
      writeFileSync(join(routeDir, 'index.html'), html, 'utf8')
    }

    console.log(`Prerendered ${route}`)
    await page.close()
  }
} finally {
  await browser.close()
  await new Promise((resolve) => previewServer.httpServer.close(resolve))
}

console.log(`Prerendered ${routesToPrerender.length} routes`)
