import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { PortableText } from '@/components/portable-text'
import { SocialShare } from '@/components/social-share'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allCaseStudiesQuery, caseStudyBySlugQuery } from '@/lib/sanity/queries'
import { TrendingUp, Target, CheckCircle } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bemdonna.com'

export async function generateStaticParams() {
  const studies = await sanityFetch<any[]>(allCaseStudiesQuery)
  return studies.map((study) => ({
    slug: study.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = await sanityFetch<any>(caseStudyBySlugQuery, { slug: params.slug })
  
  if (!study) return {}

  return generatePageMetadata({
    title: `${study.companyName} Case Study`,
    description: study.headline,
    path: `/case-studies/${params.slug}`,
  })
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = await sanityFetch<any>(caseStudyBySlugQuery, { slug: params.slug })

  if (!study) {
    notFound()
  }

  const studyUrl = `${siteUrl}/case-studies/${params.slug}`

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.companyName}</h1>
          <p className="text-2xl text-muted-foreground mb-6">{study.headline}</p>
          {study.industry && (
            <p className="text-sm text-muted-foreground">Industry: {study.industry}</p>
          )}
        </header>

        {/* Results Overview */}
        {study.results && study.results.length > 0 && (
          <section className="mb-12 p-8 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Results at a Glance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {study.results.map((result: any, index: number) => (
                <div key={index} className="text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary mb-2">{result.metric}</p>
                  <p className="text-sm text-muted-foreground">{result.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenge */}
        {study.challenge && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">The Challenge</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <PortableText value={study.challenge} />
            </div>
          </section>
        )}

        {/* Solution */}
        {study.solution && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">The Solution</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <PortableText value={study.solution} />
            </div>
          </section>
        )}

        {/* Results Detail */}
        {study.resultsDetail && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">The Results</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <PortableText value={study.resultsDetail} />
            </div>
          </section>
        )}

        {/* Testimonial */}
        {study.testimonial && (
          <section className="mb-12 p-8 bg-muted rounded-lg">
            <blockquote className="text-xl italic mb-4">"{study.testimonial.quote}"</blockquote>
            <p className="font-semibold">{study.testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
          </section>
        )}

        {/* Share */}
        <div className="border-t pt-8">
          <SocialShare url={studyUrl} title={`${study.companyName} Case Study`} description={study.headline} />
        </div>
      </article>
    </div>
  )
}

