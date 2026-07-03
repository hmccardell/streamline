import { Helmet } from 'react-helmet-async'
import { DEFAULT_SEO, SITE_URL } from '../config/routes'

export default function SEO({
  title,
  description,
  canonicalPath = '/',
  ogImage = DEFAULT_SEO.ogImage,
  ogType = DEFAULT_SEO.ogType,
  jsonLd,
}) {
  const pageTitle = title ?? DEFAULT_SEO.title
  const pageDescription = description ?? DEFAULT_SEO.description
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`

  return (
    <Helmet key={canonicalUrl}>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content="Streamline South" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
