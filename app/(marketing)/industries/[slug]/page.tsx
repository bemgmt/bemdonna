import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/breadcrumb'
import { PortableText } from '@/components/portable-text'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allIndustryPagesQuery, industryPageBySlugQuery } from '@/lib/sanity/queries'

export async function generateStaticParams() {
  const industries = await sanityFetch<any[]>(allIndustryPagesQuery)
  return industries.map((industry) => ({
    slug: industry.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = await sanityFetch<any>(industryPageBySlugQuery, { slug: params.slug })
  
  if (!industry) return {}

  return generatePageMetadata({
    title: industry.seo?.metaTitle || `${industry.title} Solutions`,
    description: industry.seo?.metaDescription || industry.description,
    path: `/industries/${params.slug}`,
  })
}

export default async function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = await sanityFetch<any>(industryPageBySlugQuery, { slug: params.slug })

  if (!industry) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      {/* Hero */}
      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">DONNA for {industry.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{industry.description}</p>
        <Button size="lg" asChild>
          <Link href="/#demo-form">Start Onboarding</Link>
        </Button>
      </section>

      {/* Introduction */}
      {industry.introduction && (
        <section className="py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText value={industry.introduction} />
          </div>
        </section>
      )}

      {/* Pain Points */}
      {industry.painPoints && industry.painPoints.length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">Common Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.painPoints.map((point: any, index: number) => (
              <div key={index} className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Prebuilt Workflows */}
      {industry.workflows && industry.workflows.length > 0 && (
        <section className="py-12 bg-muted rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Prebuilt DONNA Workflows</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.workflows.map((workflow: any, index: number) => (
              <div key={index} className="p-6 bg-background border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{workflow.name}</h3>
                <p className="text-sm text-muted-foreground">{workflow.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Compliance */}
      {industry.complianceNotes && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6">Compliance & Security</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText value={industry.complianceNotes} />
          </div>
        </section>
      )}

      {/* Case Studies */}
      {industry.caseStudies && industry.caseStudies.length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.caseStudies.map((study: any) => (
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
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your {industry.title} Business?</h2>
        <p className="text-xl text-muted-foreground mb-6">
          Start your free trial today with industry-specific workflows.
        </p>
        <Button size="lg" asChild>
          <Link href="/#demo-form">Get Started Free</Link>
        </Button>
      </section>
    </div>
  )
}

