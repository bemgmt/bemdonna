import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allCaseStudiesQuery } from '@/lib/sanity/queries'
import { TrendingUp, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Case Studies',
  description: 'See how businesses are transforming their operations with DONNA.',
  path: '/case-studies',
})

export default async function CaseStudiesPage() {
  const caseStudies = await sanityFetch<any[]>(allCaseStudiesQuery)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Success Stories</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See how businesses are transforming their operations with DONNA
        </p>
      </section>

      <section className="py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study._id}
              href={`/case-studies/${study.slug.current}`}
              className="group border rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {study.companyName}
                  </h2>
                  {study.industry && (
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  )}
                </div>
              </div>

              <p className="text-lg font-medium mb-6">{study.headline}</p>

              {study.results && study.results.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.slice(0, 3).map((result: any, index: number) => {
                    const Icon = index === 0 ? TrendingUp : index === 1 ? Users : DollarSign
                    return (
                      <div key={index} className="text-center">
                        <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="text-2xl font-bold text-primary">{result.metric}</p>
                        <p className="text-xs text-muted-foreground">{result.label}</p>
                      </div>
                    )
                  })}
                </div>
              )}

              <span className="text-primary font-medium">Read Case Study →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

