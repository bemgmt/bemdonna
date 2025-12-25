import type { Metadata } from 'next'
import Breadcrumb from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { Download, FileText, BookOpen, Video, Code } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Downloads',
  description: 'Download whitepapers, guides, templates, and other resources.',
  path: '/downloads',
})

const downloads = [
  {
    category: 'Whitepapers',
    icon: FileText,
    items: [
      {
        title: 'The Future of AI in Business Communication',
        description: 'A comprehensive guide to AI-powered communication platforms',
        size: '2.4 MB',
        format: 'PDF',
        url: '#',
      },
      {
        title: 'ROI of AI Automation: A Data-Driven Analysis',
        description: 'Real-world data on cost savings and efficiency gains',
        size: '1.8 MB',
        format: 'PDF',
        url: '#',
      },
    ],
  },
  {
    category: 'Guides & Templates',
    icon: BookOpen,
    items: [
      {
        title: 'DONNA Implementation Checklist',
        description: 'Step-by-step guide to deploying DONNA in your organization',
        size: '450 KB',
        format: 'PDF',
        url: '#',
      },
      {
        title: 'Custom Workflow Templates',
        description: 'Pre-built workflows for common business scenarios',
        size: '1.2 MB',
        format: 'ZIP',
        url: '#',
      },
    ],
  },
  {
    category: 'Developer Resources',
    icon: Code,
    items: [
      {
        title: 'API Documentation',
        description: 'Complete API reference and integration guides',
        size: '3.5 MB',
        format: 'PDF',
        url: '/docs',
      },
      {
        title: 'SDK & Code Examples',
        description: 'Sample code and SDKs for popular languages',
        size: '5.2 MB',
        format: 'ZIP',
        url: '#',
      },
    ],
  },
  {
    category: 'Video Resources',
    icon: Video,
    items: [
      {
        title: 'Product Demo Videos',
        description: 'Watch DONNA in action across different use cases',
        size: 'Streaming',
        format: 'Video',
        url: '/tutorials',
      },
      {
        title: 'Webinar Recordings',
        description: 'Past webinar sessions and training materials',
        size: 'Streaming',
        format: 'Video',
        url: '/webinars',
      },
    ],
  },
]

export default function DownloadsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Downloads</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Access whitepapers, guides, templates, and other resources to help you succeed with DONNA
        </p>
      </section>

      <section className="py-12">
        <div className="space-y-12">
          {downloads.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.category}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-primary" />
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.title}
                      className="border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
                    >
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{item.format}</span>
                          <span>•</span>
                          <span>{item.size}</span>
                        </div>
                        <a
                          href={item.url}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-12 bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Looking for Something Else?</h2>
        <p className="text-muted-foreground mb-6">
          Can't find the resource you need? Let us know and we'll help you out.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}

