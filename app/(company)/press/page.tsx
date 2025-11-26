import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch, urlFor } from '@/sanity/lib/client'
import { pressReleasesQuery } from '@/lib/sanity/queries'
import { Calendar, Download, Mail, FileText } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Press Kit',
  description: 'Media resources, press releases, and brand assets for DONNA.',
  path: '/press',
})

export default async function PressPage() {
  const pressReleases = await sanityFetch<any[]>(pressReleasesQuery)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Press Kit</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Media resources and press information for DONNA
        </p>
      </section>

      {/* Media Contact */}
      <section className="py-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              Media Contact
            </h2>
            <p className="text-muted-foreground mb-4">
              For press inquiries, interviews, and media requests:
            </p>
            <a href="mailto:press@bemdonna.com" className="text-primary hover:underline font-medium">
              press@bemdonna.com
            </a>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Download className="h-6 w-6 text-primary" />
              Brand Assets
            </h2>
            <p className="text-muted-foreground mb-4">
              Download our logos, brand guidelines, and media kit:
            </p>
            <a href="#" className="text-primary hover:underline font-medium">
              Download Media Kit (ZIP)
            </a>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About DONNA</h2>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            DONNA is an AI-powered business communication platform that helps companies never miss a lead.
            Our platform handles voice calls, emails, and chat messages 24/7, ensuring businesses can
            respond to customers instantly, even outside business hours.
          </p>
          <p>
            Founded in 2023, DONNA serves thousands of businesses across real estate, hospitality,
            property management, and other industries. Our mission is to democratize AI-powered
            communication, making it accessible and affordable for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Key Facts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">2023</p>
            <p className="text-muted-foreground">Founded</p>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">1000+</p>
            <p className="text-muted-foreground">Businesses Served</p>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">95%</p>
            <p className="text-muted-foreground">Lead Capture Rate</p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      {pressReleases && pressReleases.length > 0 && (
        <section className="py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((release) => (
              <div key={release._id} className="border rounded-lg p-6 hover:border-primary transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                    <p className="text-muted-foreground mb-3">{release.summary}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(release.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  {release.pdfUrl && (
                    <a
                      href={release.pdfUrl}
                      className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:border-primary transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">PDF</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

