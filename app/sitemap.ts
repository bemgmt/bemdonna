import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://donna.business'

const staticRoutes = [
  '/',
  '/about',
  '/product',
  '/features',
  '/pricing',
  '/contact',
  '/industries',
  '/verticals',
  '/use-cases',
  '/documentation',
  '/blog',
  '/case-studies',
  '/webinars',
  '/downloads',
  '/careers',
  '/press',
  '/investors',
  '/system-brief',
  '/donna-network',
  '/tutorials',
  '/terms',
  '/privacy',
  '/gdpr',
  '/acceptable-use',
]

const pressSlugs = [
  'series-a-funding',
  'multi-language-launch',
  'soc2-certification',
  '10k-users-milestone',
]

const productSlugs = [
  'voice-receptionist',
  'email-assistant',
  'chatbot',
  'secretary-bot',
  'marketing-bot',
  'knowledge-base',
  'integrations',
  'security',
]

const useCaseSlugs = [
  'appointment-scheduling',
  'customer-support',
  'lead-nurturing',
  'lead-response',
]

const industrySlugs = [
  'health-beauty',
  'hospitality',
  'real-estate',
  'property-management',
  'insurance',
  'nightlife',
  'nonprofits',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls = [
    ...staticRoutes,
    ...pressSlugs.map((slug) => `/press/${slug}`),
    ...productSlugs.map((slug) => `/product/${slug}`),
    ...useCaseSlugs.map((slug) => `/use-cases/${slug}`),
    ...industrySlugs.map((slug) => `/industries/${slug}`),
  ]

  return urls.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }))
}

