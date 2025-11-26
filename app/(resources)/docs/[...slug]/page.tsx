import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { PortableText } from '@/components/portable-text'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allDocumentationQuery, documentationBySlugQuery } from '@/lib/sanity/queries'
import { ChevronRight } from 'lucide-react'

export async function generateStaticParams() {
  const docs = await sanityFetch<any[]>(allDocumentationQuery)
  return docs.map((doc) => ({
    slug: [doc.slug.current],
  }))
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const doc = await sanityFetch<any>(documentationBySlugQuery, { slug: params.slug[0] })
  
  if (!doc) return {}

  return generatePageMetadata({
    title: doc.title,
    description: doc.description,
    path: `/docs/${params.slug.join('/')}`,
  })
}

export default async function DocPage({ params }: { params: { slug: string[] } }) {
  const doc = await sanityFetch<any>(documentationBySlugQuery, { slug: params.slug[0] })

  if (!doc) {
    notFound()
  }

  // Get all docs for sidebar navigation
  const allDocs = await sanityFetch<any[]>(allDocumentationQuery)
  const docsByCategory = allDocs.reduce((acc, d) => {
    const category = d.category || 'General'
    if (!acc[category]) acc[category] = []
    acc[category].push(d)
    return acc
  }, {} as Record<string, any[]>)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <div className="grid lg:grid-cols-4 gap-8 mt-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {Object.entries(docsByCategory).map(([category, categoryDocs]) => (
              <div key={category}>
                <h3 className="font-semibold mb-3 text-sm uppercase text-muted-foreground">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {categoryDocs.map((d) => (
                    <li key={d._id}>
                      <Link
                        href={`/docs/${d.slug.current}`}
                        className={`block text-sm py-1 transition-colors ${
                          d._id === doc._id
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-primary'
                        }`}
                      >
                        {d.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <article className="lg:col-span-3">
          <header className="mb-8">
            {doc.category && (
              <p className="text-sm text-muted-foreground mb-2">{doc.category}</p>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{doc.title}</h1>
            {doc.description && (
              <p className="text-xl text-muted-foreground">{doc.description}</p>
            )}
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText value={doc.content} />
          </div>

          {/* Navigation to next/previous docs */}
          {doc.relatedDocs && doc.relatedDocs.length > 0 && (
            <section className="mt-12 pt-8 border-t">
              <h2 className="text-xl font-bold mb-4">Related Documentation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {doc.relatedDocs.map((related: any) => (
                  <Link
                    key={related._id}
                    href={`/docs/${related.slug.current}`}
                    className="p-4 border rounded-lg hover:border-primary transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {related.title}
                      </span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </div>
  )
}

