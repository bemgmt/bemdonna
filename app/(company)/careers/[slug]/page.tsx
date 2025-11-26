import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { PortableText } from '@/components/portable-text'
import { generatePageMetadata } from '@/lib/metadata'
import { jobPostingSchema } from '@/lib/schema-markup'
import { sanityFetch } from '@/sanity/lib/client'
import { careersQuery, careerBySlugQuery } from '@/lib/sanity/queries'
import { MapPin, Briefcase, Clock, DollarSign } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bemdonna.com'

export async function generateStaticParams() {
  const jobs = await sanityFetch<any[]>(careersQuery)
  return jobs.map((job) => ({
    slug: job.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const job = await sanityFetch<any>(careerBySlugQuery, { slug: params.slug })
  
  if (!job) return {}

  return generatePageMetadata({
    title: `${job.title} - Careers`,
    description: job.summary,
    path: `/careers/${params.slug}`,
  })
}

export default async function JobPage({ params }: { params: { slug: string } }) {
  const job = await sanityFetch<any>(careerBySlugQuery, { slug: params.slug })

  if (!job) {
    notFound()
  }

  const jobUrl = `${siteUrl}/careers/${params.slug}`
  
  const schema = jobPostingSchema({
    title: job.title,
    description: job.summary,
    location: job.location,
    employmentType: job.employmentType,
    datePosted: job._createdAt,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
            
            {job.summary && (
              <p className="text-xl text-muted-foreground mb-6">{job.summary}</p>
            )}

            <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span>{job.employmentType}</span>
              </div>
              {job.experienceLevel && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{job.experienceLevel}</span>
                </div>
              )}
              {job.salaryRange && (
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  <span>{job.salaryRange}</span>
                </div>
              )}
            </div>

            <a
              href={job.applicationUrl || `mailto:careers@bemdonna.com?subject=Application for ${job.title}`}
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Apply Now
            </a>
          </header>

          {job.description && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About the Role</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <PortableText value={job.description} />
              </div>
            </section>
          )}

          {job.responsibilities && job.responsibilities.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {job.requirements && job.requirements.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {job.benefits && job.benefits.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="space-y-2">
                {job.benefits.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="border-t pt-8">
            <a
              href={job.applicationUrl || `mailto:careers@bemdonna.com?subject=Application for ${job.title}`}
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Apply for this Position
            </a>
          </section>
        </article>
      </div>
    </>
  )
}

