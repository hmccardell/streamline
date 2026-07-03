import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { ROUTE_PATHS } from '../src/config/routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '../dist')

const { render } = await import(pathToFileURL(join(distDir, 'server/entry-server.js')).href)
const template = readFileSync(join(distDir, 'index.html'), 'utf8')

function renderPage(route) {
  const { appHtml, head } = render(route)

  return template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('</head>', `${head}</head>`)
}

for (const route of ROUTE_PATHS) {
  const html = renderPage(route)

  if (route === '/') {
    writeFileSync(join(distDir, 'index.html'), html, 'utf8')
  } else {
    const routeDir = join(distDir, route.slice(1))
    mkdirSync(routeDir, { recursive: true })
    writeFileSync(join(routeDir, 'index.html'), html, 'utf8')
  }

  console.log(`Prerendered ${route}`)
}

console.log(`Prerendered ${ROUTE_PATHS.length} routes`)
