import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import AppShell from './AppShell.jsx'
import { getPageMeta, renderHeadHtml } from './lib/pageMeta.js'

export function render(url) {
  const appHtml = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AppShell />
    </MemoryRouter>,
  )

  return {
    appHtml,
    head: renderHeadHtml(getPageMeta(url)),
  }
}
