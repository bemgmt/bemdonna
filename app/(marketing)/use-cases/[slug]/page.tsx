import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/breadcrumb'
import { PortableText } from '@/components/portable-text'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allUseCasePagesQuery, useCasePageBySlugQuery } from '@/lib/sanity/queries'
import { Check, X } from 'lucide-react'

export async function generateStaticParams() {
  const useCases = await sanityFetch<any[]>(allUseCasePagesQuery)
  return useCases.map((useCase) => ({
    slug: useCase.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const useCase = await sanityFetch<any>(useCasePageBySlugQuery, { slug: params.slug })
  
  if (!useCase) return {}

  return generatePageMetadata({
    title: useCase.seo?.metaTitle || useCase.title,
    description: useCase.seo?.metaDescription || useCase.description,
    path: `/use-cases/${params.slug}`,
  })
}

export default async function UseCaseDetailPage({ params }: { params: { slug: string } }) {
  const useCase = await sanityFetch<any>(useCasePageBySlugQuery, { slug: params.slug })

  if (!useCase) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      {/* Hero */}
      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{useCase.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{useCase.description}</p>
        <Button size="lg" asChild>
          <Link href="/#demo-form">Get Started</Link>
        </Button>
      </section>

      {/* Introduction */}
      {useCase.introduction && (
        <section className="py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText value={useCase.introduction} />
          </div>
        </section>
      )}

      {/* Before/After Comparison */}
      {useCase.beforeScenario && useCase.afterScenario && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Before & After DONNA</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-destructive/50 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <X className="h-6 w-6 text-destructive" />
                <h3 className="text-2xl font-semibold">Before</h3>
              </div>
              <div className="prose dark:prose-invert">
                <PortableText value={useCase.beforeScenario} />
              </div>
            </div>
            <div className="p-8 border border-primary/50 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Check className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">After</h3>
              </div>
              <div className="prose dark:prose-invert">
                <PortableText value={useCase.afterScenario} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Implementation Steps */}
      {useCase.implementationSteps && useCase.implementationSteps.length > 0 && (
        <section className="py-12 bg-muted rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8">How to Implement</h2>
          <div className="space-y-6">
            {useCase.implementationSteps.map((step: any, index: number) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {useCase.relatedCaseStudies && useCase.relatedCaseStudies.length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCase.relatedCaseStudies.map((study: any) => (
              <Link
                key={study._id}
                href={`/case-studies/${study.slug.current}`}
                className="p-6 border rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{study.companyName}</h3>
                <p className="text-lg text-primary mb-2">{study.headline}</p>
                <p className="text-muted-foreground">Read case study →</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 text-center bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-6">
          Implement this use case in your business today.
        </p>
        <Button size="lg" asChild>
          <Link href="/#demo-form">Start Free Trial</Link>
        </Button>
      </section>
    </div>
  )
}

