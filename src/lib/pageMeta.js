import { DEFAULT_SEO, LOCAL_BUSINESS_JSON_LD, PAGE_SEO, SITE_URL } from '../config/routes'

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function getPageMeta(pathname) {
  const seo = PAGE_SEO[pathname] ?? {}

  return {
    title: seo.title ?? DEFAULT_SEO.title,
    description: seo.description ?? DEFAULT_SEO.description,
    canonicalUrl: `${SITE_URL}${pathname === '/' ? '' : pathname}`,
    ogImage: DEFAULT_SEO.ogImage,
    ogType: DEFAULT_SEO.ogType,
    jsonLd: pathname === '/' ? LOCAL_BUSINESS_JSON_LD : undefined,
  }
}

export function renderHeadHtml(meta) {
  const { title, description, canonicalUrl, ogImage, ogType, jsonLd } = meta

  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}">`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}">`,
    `<meta property="og:site_name" content="Streamline South">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:type" content="${escapeHtml(ogType)}">`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}">`,
    `<meta property="og:image" content="${escapeHtml(ogImage)}">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}">`,
  ]

  if (jsonLd) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`)
  }

  return tags.join('')
}
