import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Breadcrumb } from '@/components/breadcrumb'
import { PortableText } from '@/components/portable-text'
import { generatePageMetadata } from '@/lib/metadata'
import { eventSchema } from '@/lib/schema-markup'
import { sanityFetch, urlFor } from '@/sanity/lib/client'
import { allWebinarsQuery, webinarBySlugQuery } from '@/lib/sanity/queries'
import { Calendar, Clock, Users, Video } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bemdonna.com'

export async function generateStaticParams() {
  const webinars = await sanityFetch<any[]>(allWebinarsQuery)
  return webinars.map((webinar) => ({
    slug: webinar.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const webinar = await sanityFetch<any>(webinarBySlugQuery, { slug: params.slug })
  
  if (!webinar) return {}

  return generatePageMetadata({
    title: webinar.title,
    description: webinar.description,
    path: `/webinars/${params.slug}`,
  })
}

export default async function WebinarPage({ params }: { params: { slug: string } }) {
  const webinar = await sanityFetch<any>(webinarBySlugQuery, { slug: params.slug })

  if (!webinar) {
    notFound()
  }

  const webinarUrl = `${siteUrl}/webinars/${params.slug}`
  const isUpcoming = new Date(webinar.date) > new Date()
  
  const schema = eventSchema({
    name: webinar.title,
    description: webinar.description,
    startDate: webinar.date,
    url: webinarUrl,
    location: 'Online',
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
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isUpcoming ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
              }`}>
                {isUpcoming ? 'Upcoming' : 'Past Webinar'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{webinar.title}</h1>
            
            {webinar.description && (
              <p className="text-xl text-muted-foreground mb-6">{webinar.description}</p>
            )}

            <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(webinar.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              {webinar.duration && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{webinar.duration}</span>
                </div>
              )}
            </div>

            {isUpcoming && webinar.registrationUrl && (
              <a
                href={webinar.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Register Now
              </a>
            )}

            {!isUpcoming && webinar.recordingUrl && (
              <a
                href={webinar.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Video className="h-5 w-5" />
                Watch Recording
              </a>
            )}
          </header>

          {webinar.speakers && webinar.speakers.length > 0 && (
            <section className="mb-12 p-6 bg-muted rounded-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6" />
                Speakers
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {webinar.speakers.map((speaker: any) => (
                  <div key={speaker._id} className="flex items-start gap-4">
                    {speaker.photo && (
                      <Image
                        src={urlFor(speaker.photo).width(80).height(80).url()}
                        alt={speaker.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {webinar.content && (
            <section className="mb-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <PortableText value={webinar.content} />
              </div>
            </section>
          )}
        </article>
      </div>
    </>
  )
}

