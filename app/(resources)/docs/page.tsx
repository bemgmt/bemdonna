import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allDocumentationQuery } from '@/lib/sanity/queries'
import { BookOpen, Search } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Documentation',
  description: 'Complete documentation for DONNA platform.',
  path: '/docs',
})

export default async function DocsPage() {
  const docs = await sanityFetch<any[]>(allDocumentationQuery)

  // Group docs by category
  const docsByCategory = docs.reduce((acc, doc) => {
    const category = doc.category || 'General'
    if (!acc[category]) acc[category] = []
    acc[category].push(doc)
    return acc
  }, {} as Record<string, any[]>)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Everything you need to know about using DONNA
        </p>
        
        {/* Search placeholder - can be enhanced with actual search */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border bg-background"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(docsByCategory).map(([category, categoryDocs]) => (
            <div key={category} className="border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                {category}
              </h2>
              <ul className="space-y-3">
                {categoryDocs.map((doc) => (
                  <li key={doc._id}>
                    <Link
                      href={`/docs/${doc.slug.current}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="text-muted-foreground mb-6">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Contact Support
        </Link>
      </section>
    </div>
  )
}

