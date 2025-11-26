import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allWebinarsQuery } from '@/lib/sanity/queries'
import { Calendar, Clock, Users } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Webinars',
  description: 'Join our live webinars and watch recordings to learn more about DONNA.',
  path: '/webinars',
})

export default async function WebinarsPage() {
  const webinars = await sanityFetch<any[]>(allWebinarsQuery)

  // Separate upcoming and past webinars
  const now = new Date()
  const upcoming = webinars.filter((w) => new Date(w.date) > now)
  const past = webinars.filter((w) => new Date(w.date) <= now)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Webinars</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn from experts and get the most out of DONNA
        </p>
      </section>

      {upcoming.length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">Upcoming Webinars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcoming.map((webinar) => (
              <Link
                key={webinar._id}
                href={`/webinars/${webinar.slug.current}`}
                className="group border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Upcoming
                  </span>
                  {webinar.duration && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{webinar.duration}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {webinar.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">{webinar.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(webinar.date).toLocaleDateString()}</span>
                  </div>
                  {webinar.speakers && webinar.speakers.length > 0 && (
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{webinar.speakers.length} speaker{webinar.speakers.length > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">Past Webinars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((webinar) => (
              <Link
                key={webinar._id}
                href={`/webinars/${webinar.slug.current}`}
                className="group border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {webinar.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {webinar.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(webinar.date).toLocaleDateString()}</span>
                </div>
                
                {webinar.recordingUrl && (
                  <div className="mt-4 text-primary text-sm font-medium">
                    Watch Recording →
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

