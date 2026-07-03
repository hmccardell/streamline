import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTE_PATHS, PAGE_SEO, SITE_URL } from '../src/config/routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '../dist')
const today = new Date().toISOString().split('T')[0]

const urls = ROUTE_PATHS.map((routePath) => {
  const meta = PAGE_SEO[routePath] ?? {}
  const loc = `${SITE_URL}${routePath === '/' ? '' : routePath}`

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq ?? 'monthly'}</changefreq>
    <priority>${meta.priority ?? '0.5'}</priority>
  </url>`
}).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8')
console.log(`Generated sitemap.xml with ${ROUTE_PATHS.length} routes`)
