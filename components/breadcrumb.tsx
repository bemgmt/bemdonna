'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { breadcrumbSchema } from '@/lib/schema-markup'

export function Breadcrumb() {
  const pathname = usePathname()
  
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    ...segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      return { name, url: path }
    }),
  ]

  const schema = breadcrumbSchema(
    breadcrumbItems.map(item => ({
      name: item.name,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bemdonna.com'}${item.url}`,
    }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          {breadcrumbItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
              {index === breadcrumbItems.length - 1 ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-foreground transition-colors flex items-center"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

