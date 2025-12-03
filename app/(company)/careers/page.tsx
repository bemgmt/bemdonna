import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { MapPin, Briefcase, Clock } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Careers',
  description: 'Join the DONNA team and help transform business communication with AI.',
  path: '/careers',
})

export default async function CareersPage() {
  const jobs: any[] = []

  // Group jobs by department
  const jobsByDepartment = jobs.reduce((acc, job) => {
    const dept = job.department || 'Other'
    if (!acc[dept]) acc[dept] = []
    acc[dept].push(job)
    return acc
  }, {} as Record<string, any[]>)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Help us build the future of AI-powered business communication
        </p>
      </section>

      <section className="py-12 max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert mb-12">
          <h2>Why Work at DONNA?</h2>
          <ul>
            <li>Work on cutting-edge AI technology</li>
            <li>Competitive salary and equity</li>
            <li>Comprehensive health benefits</li>
            <li>Flexible remote work</li>
            <li>Unlimited PTO</li>
            <li>Professional development budget</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>

        {Object.keys(jobsByDepartment).length === 0 ? (
          <div className="text-center p-12 border rounded-lg">
            <p className="text-lg text-muted-foreground mb-4">
              We don't have any open positions at the moment, but we're always looking for talented people.
            </p>
            <p className="text-muted-foreground">
              Send your resume to{' '}
              <a href="mailto:derek@bem.studio" className="text-primary hover:underline">
                derek@bem.studio
              </a>
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(jobsByDepartment).map(([department, departmentJobs]) => (
              <div key={department}>
                <h3 className="text-2xl font-semibold mb-4">{department}</h3>
                <div className="space-y-4">
                  {departmentJobs.map((job) => (
                    <Link
                      key={job._id}
                      href={`/careers/${job.slug.current}`}
                      className="block p-6 border rounded-lg hover:border-primary hover:shadow-lg transition-all"
                    >
                      <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.employmentType}</span>
                        </div>
                        {job.experienceLevel && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.experienceLevel}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-muted-foreground">{job.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

