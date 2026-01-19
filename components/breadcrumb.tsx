'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { breadcrumbSchema } from '@/lib/schema-markup'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://donna.business'

const pathMap: Record<string, string> = {
  '/': 'Home',
  '/product': 'Product',
  '/industries': 'Industries',
  '/use-cases': 'Use Cases',
  '/pricing': 'Pricing',
  '/about': 'About',
  '/contact': 'Contact',
  '/blog': 'Blog',
  '/case-studies': 'Case Studies',
  '/tutorials': 'Tutorials',
  '/documentation': 'Documentation',
  '/webinars': 'Webinars',
  '/downloads': 'Downloads',
  '/investors': 'Investors',
  '/terms': 'Terms of Service',
  '/privacy': 'Privacy Policy',
  '/acceptable-use': 'Acceptable Use',
  '/gdpr': 'GDPR',
}

export default function Breadcrumb() {
  const pathname = usePathname()
  
  // Don't show breadcrumb on home page
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    ...segments.map((segment, index) => {
      const path = '/' + segments.slice(0, index + 1).join('/')
      const name = pathMap[path] || segment.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
      return { name, url: path }
    }),
  ]

  const absoluteItems = breadcrumbItems.map((item) => ({
    ...item,
    url: new URL(item.url, siteUrl).toString(),
  }))
  const schema = {
    '@context': 'https://schema.org',
    ...breadcrumbSchema(absoluteItems),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        className="container mx-auto px-4 py-4 text-sm"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-2 flex-wrap">
          {breadcrumbItems.map((item, index) => (
            <li key={item.url} className="flex items-center gap-2">
              {index === 0 ? (
                <Link
                  href={item.url}
                  className="text-foreground/70 hover:text-accent transition-colors"
                  aria-label="Home"
                >
                  <Home className="h-4 w-4" />
                </Link>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4 text-foreground/50" />
                  {index === breadcrumbItems.length - 1 ? (
                    <span className="text-foreground/90 font-medium" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url}
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
