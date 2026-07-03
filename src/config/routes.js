export const SITE_URL = 'https://streamlinesouth.com'

/** Paths prerendered at build time — keep in sync with App.jsx Routes */
export const ROUTE_PATHS = ['/', '/smb', '/corporate', '/about', '/contact']

export const DEFAULT_SEO = {
  title: 'Streamline South | Gulf Coast Tech Consulting',
  description:
    'Process consulting and AI readiness for Gulf Coast small businesses. Based in Hattiesburg, MS.',
  ogImage: `${SITE_URL}/og-image.png`,
  ogType: 'website',
}

export const PAGE_SEO = {
  '/': {
    title: 'Streamline South | Gulf Coast SMB Tech Consulting',
    description:
      'Hattiesburg-based process consulting & AI readiness for Gulf Coast SMBs. Audits, automation, and training.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  '/smb': {
    title: 'Process Audit & Automation | Mississippi SMBs',
    description:
      'Business process audits, workflow automation, and AI training for small businesses in Hattiesburg and the Gulf Coast.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/corporate': {
    title: 'Corporate Technical Training | Streamline South',
    description:
      'Custom Python, AI, and software upskilling for corporate teams. Built around your tools, not off-the-shelf curriculum.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/about': {
    title: 'About Streamline South | Hattiesburg, MS',
    description:
      '10+ years in software and training. Enterprise apprenticeship experience serving Gulf Coast businesses from Hattiesburg, MS.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  '/contact': {
    title: 'Contact Streamline South | Hattiesburg, MS',
    description:
      'Talk with us about process audits, automation, or AI training for your Gulf Coast business. No pressure, no jargon.',
    priority: '0.8',
    changefreq: 'monthly',
  },
}

export const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Streamline South LLC',
  url: SITE_URL,
  description: DEFAULT_SEO.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hattiesburg',
    addressRegion: 'MS',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'Mississippi' },
    { '@type': 'State', name: 'Alabama' },
    { '@type': 'State', name: 'Louisiana' },
  ],
  serviceType: ['Business Process Consulting', 'Process Automation', 'AI Training'],
}
