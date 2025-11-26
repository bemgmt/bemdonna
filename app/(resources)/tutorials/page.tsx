import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allTutorialsQuery } from '@/lib/sanity/queries'
import { Clock, BookOpen } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Tutorials',
  description: 'Step-by-step guides to help you get the most out of DONNA.',
  path: '/tutorials',
})

export default async function TutorialsPage() {
  const tutorials = await sanityFetch<any[]>(allTutorialsQuery)

  // Group tutorials by category
  const tutorialsByCategory = tutorials.reduce((acc, tutorial) => {
    const category = tutorial.category || 'Getting Started'
    if (!acc[category]) acc[category] = []
    acc[category].push(tutorial)
    return acc
  }, {} as Record<string, any[]>)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Tutorials</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Step-by-step guides to help you master DONNA
        </p>
      </section>

      <section className="py-12">
        {Object.entries(tutorialsByCategory).map(([category, categoryTutorials]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryTutorials.map((tutorial) => (
                <Link
                  key={tutorial._id}
                  href={`/tutorials/${tutorial.slug.current}`}
                  className="group border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    {tutorial.difficulty && (
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {tutorial.difficulty}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {tutorial.description}
                  </p>
                  {tutorial.estimatedTime && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{tutorial.estimatedTime}</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

