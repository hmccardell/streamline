import { Helmet } from 'react-helmet-async'
import { getPageMeta } from '../lib/pageMeta'

export default function SEO({ canonicalPath = '/' }) {
  const { title, description, canonicalUrl, ogImage, ogType, jsonLd } = getPageMeta(canonicalPath)

  return (
    <Helmet key={canonicalUrl}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content="Streamline South" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
