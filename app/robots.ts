import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://donna.business'

export default function robots(): MetadataRoute.Robots {
  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/523dd404-685e-4f69-8de8-31375ba15ef3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'audit-run',hypothesisId:'A',location:'app/robots.ts:6',message:'robots:entry',data:{siteUrl},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  const payload = {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/523dd404-685e-4f69-8de8-31375ba15ef3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'audit-run',hypothesisId:'A',location:'app/robots.ts:18',message:'robots:return',data:{rulesCount:payload.rules.length,sitemap:payload.sitemap},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  return payload
}

