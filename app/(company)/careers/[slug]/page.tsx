import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/metadata'
import { jobPostingSchema } from '@/lib/schema-markup'
import { getCareerBySlug, getAllCareers } from '@/lib/sanity/queries'
import PortableText from '@/components/portable-text'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, Briefcase, Clock, Calendar } from 'lucide-react'

export async function generateStaticParams() {
  try {
    const careers = await getAllCareers()
    if (Array.isArray(careers) && careers.length > 0) {
      return careers.map((career: any) => ({
        slug: career.slug?.current || career.slug,
      }))
    }
  } catch (error) {
    console.log('CMS not configured')
  }
  return []
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const job = await getCareerBySlug(params.slug)
    if (job) {
      return generatePageMetadata({
        title: `${job.title} - Careers`,
        description: job.description?.[0]?.children?.[0]?.text || `Join DONNA as a ${job.title}`,
        path: `/careers/${params.slug}`,
      })
    }
  } catch (error) {
    // Fall through
  }

  return generatePageMetadata({
    title: `Career Opportunity - ${params.slug}`,
    description: 'Join the DONNA team',
    path: `/careers/${params.slug}`,
  })
}

export default async function JobPage({ params }: { params: { slug: string } }) {
  let job: any = null

  try {
    job = await getCareerBySlug(params.slug)
  } catch (error) {
    console.log('CMS not configured')
  }

  if (!job) {
    notFound()
  }

  const schema = jobPostingSchema({
    title: job.title,
    description: Array.isArray(job.description) 
      ? job.description.map((block: any) => block.children?.map((child: any) => child.text).join(' ')).join(' ')
      : job.description || '',
    location: job.location || 'Remote',
    employmentType: job.employmentType || 'Full-time',
    datePosted: job.datePosted || new Date().toISOString(),
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/careers"
              className="text-sm text-accent hover:underline mb-4 inline-block"
            >
              ← Back to Careers
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-foreground/70 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span>{job.employmentType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Posted {job.datePosted ? new Date(job.datePosted).toLocaleDateString() : 'Recently'}</span>
              </div>
            </div>
          </div>

          {/* Job Description */}
          {job.description && (
            <section className="mb-8 prose prose-lg dark:prose-invert max-w-none">
              <PortableText content={job.description} />
            </section>
          )}

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
              <ul className="space-y-2 list-disc list-inside">
                {job.responsibilities.map((responsibility: string, index: number) => (
                  <li key={index} className="text-foreground/90">{responsibility}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-2 list-disc list-inside">
                {job.requirements.map((requirement: string, index: number) => (
                  <li key={index} className="text-foreground/90">{requirement}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Nice to Have */}
          {job.niceToHave && job.niceToHave.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Nice to Have</h2>
              <ul className="space-y-2 list-disc list-inside">
                {job.niceToHave.map((item: string, index: number) => (
                  <li key={index} className="text-foreground/90">{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Application CTA */}
          <section className="mt-12 p-8 rounded-lg border border-white/10 bg-white/5">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-foreground/70 mb-6">
              Send your resume and cover letter to{' '}
              <a href="mailto:derek@bem.studio" className="text-accent hover:underline">
                derek@bem.studio
              </a>
              {job.applicationUrl && (
                <>
                  {' '}or apply directly{' '}
                  <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    here
                  </a>
                </>
              )}
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href={`mailto:derek@bem.studio?subject=Application for ${job.title}`}>
                  Apply Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/careers">View Other Positions</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
