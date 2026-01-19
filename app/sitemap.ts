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
  '/investors',
  '/system-brief',
  '/donna-network',
  '/tutorials',
  '/terms',
  '/privacy',
  '/gdpr',
  '/acceptable-use',
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
  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/523dd404-685e-4f69-8de8-31375ba15ef3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'audit-run',hypothesisId:'B',location:'app/sitemap.ts:68',message:'sitemap:entry',data:{siteUrl,staticRoutes:staticRoutes.length,productSlugs:productSlugs.length,useCaseSlugs:useCaseSlugs.length,industrySlugs:industrySlugs.length},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  const now = new Date()
  const urls = [
    ...staticRoutes,
    ...productSlugs.map((slug) => `/product/${slug}`),
    ...useCaseSlugs.map((slug) => `/use-cases/${slug}`),
    ...industrySlugs.map((slug) => `/industries/${slug}`),
  ]

  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/523dd404-685e-4f69-8de8-31375ba15ef3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'audit-run',hypothesisId:'B',location:'app/sitemap.ts:83',message:'sitemap:urls',data:{urlCount:urls.length,sample:urls.slice(0,5)},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  return urls.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }))
}

