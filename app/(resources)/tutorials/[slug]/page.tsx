import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { PortableText } from '@/components/portable-text'
import { SocialShare } from '@/components/social-share'
import { generatePageMetadata } from '@/lib/metadata'
import { howToSchema } from '@/lib/schema-markup'
import { sanityFetch } from '@/sanity/lib/client'
import { allTutorialsQuery, tutorialBySlugQuery } from '@/lib/sanity/queries'
import { Clock, CheckCircle } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bemdonna.com'

export async function generateStaticParams() {
  const tutorials = await sanityFetch<any[]>(allTutorialsQuery)
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tutorial = await sanityFetch<any>(tutorialBySlugQuery, { slug: params.slug })
  
  if (!tutorial) return {}

  return generatePageMetadata({
    title: tutorial.title,
    description: tutorial.description,
    path: `/tutorials/${params.slug}`,
  })
}

export default async function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = await sanityFetch<any>(tutorialBySlugQuery, { slug: params.slug })

  if (!tutorial) {
    notFound()
  }

  const tutorialUrl = `${siteUrl}/tutorials/${params.slug}`
  
  const schema = tutorial.steps ? howToSchema({
    name: tutorial.title,
    description: tutorial.description,
    steps: tutorial.steps.map((step: any) => ({
      name: step.title,
      text: step.description || '',
    })),
    totalTime: tutorial.estimatedTime,
  }) : null

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
        />
      )}

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {tutorial.difficulty && (
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {tutorial.difficulty}
                </span>
              )}
              {tutorial.category && (
                <span className="text-sm text-muted-foreground">{tutorial.category}</span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tutorial.title}</h1>
            
            {tutorial.description && (
              <p className="text-xl text-muted-foreground mb-6">{tutorial.description}</p>
            )}

            {tutorial.estimatedTime && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>Estimated time: {tutorial.estimatedTime}</span>
              </div>
            )}
          </header>

          {tutorial.steps && tutorial.steps.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Steps</h2>
              <div className="space-y-6">
                {tutorial.steps.map((step: any, index: number) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    {step.description && (
                      <div className="prose prose-lg dark:prose-invert max-w-none mb-4">
                        <PortableText value={step.description} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {tutorial.content && (
            <section className="mb-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <PortableText value={tutorial.content} />
              </div>
            </section>
          )}

          <div className="border-t pt-8">
            <SocialShare url={tutorialUrl} title={tutorial.title} description={tutorial.description} />
          </div>
        </article>
      </div>
    </>
  )
}

