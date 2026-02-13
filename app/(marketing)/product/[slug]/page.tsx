import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/metadata'
import { productSchema } from '@/lib/schema-markup'
import { getProductPageBySlug, getAllProductPages } from '@/lib/sanity/queries'
import PortableText from '@/components/portable-text'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

const productSlugs = [
  'voice-receptionist',
  'email-assistant',
  'chatbot',
  'secretary-bot',
  'marketing-bot',
  'knowledge-base',
  'integrations',
  'security',
]

export async function generateStaticParams() {
  // Try to get from CMS first, fallback to static list
  try {
    const products = await getAllProductPages()
    if (Array.isArray(products) && products.length > 0) {
      return products.map((product: any) => ({
        slug: product.slug?.current || product.slug,
      }))
    }
  } catch (error) {
    console.log('CMS not configured, using static product list')
  }
  
  return productSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const product = await getProductPageBySlug(params.slug)
    if (product) {
      return generatePageMetadata({
        title: product.title,
        description: product.description,
        path: `/product/${params.slug}`,
      })
    }
  } catch (error) {
    // Fall through to default
  }

  return generatePageMetadata({
    title: `${params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
    description: `Explore how DONNA runs ${params.slug.replace('-', ' ')} workflows with agentic, tool-native execution.`,
    path: `/product/${params.slug}`,
  })
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  let product: any = null
  
  // Try to fetch from CMS
  try {
    product = await getProductPageBySlug(params.slug)
  } catch (error) {
    console.log('CMS not configured, product page will use fallback content')
  }

  // If not found in CMS and slug doesn't match known products, show 404
  if (!product && !productSlugs.includes(params.slug)) {
    notFound()
  }

  // Fallback content for when CMS is not configured
  const fallbackContent: Record<string, any> = {
    'voice-receptionist': {
      title: 'Voice Receptionist',
      description: 'Multi-modal voice operations with context-aware routing, scheduling, and escalation.',
      features: [
        { title: '24/7 Coverage', description: 'Always-on call handling without missed opportunities.' },
        { title: 'Context-Aware Routing', description: 'Transfers calls with full conversation history.' },
        { title: 'Human-in-the-Loop', description: 'Escalates when judgment is required.' },
      ],
    },
    'email-assistant': {
      title: 'Email Operations',
      description: 'Thread-aware email operations with task execution and approvals.',
      features: [
        { title: 'Context Memory', description: 'Understands full conversation history.' },
        { title: 'Tool-Native Actions', description: 'Updates CRM records and triggers workflows.' },
        { title: 'Escalation Controls', description: 'Routes exceptions for approval.' },
      ],
    },
    'chatbot': {
      title: 'AI Chatbot',
      description: 'Always-on web chat that qualifies, routes, and executes follow-ups.',
      features: [
        { title: 'Lead Qualification', description: 'Captures intent and schedules next steps.' },
        { title: 'Multi-Modal Handoff', description: 'Seamlessly moves to email or SMS.' },
        { title: 'Brand Voice', description: 'Keeps tone consistent with your business.' },
      ],
    },
  }

  const content = product || fallbackContent[params.slug] || {
    title: params.slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: 'Learn more about this DONNA feature',
    features: [],
  }

  const schema = productSchema({
    name: content.title,
    description: content.description,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="py-12 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            {content.title}
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            {content.description}
          </p>
          {content.heroImage && (
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={urlFor(content.heroImage).width(1200).height(600).url()}
                alt={content.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </section>

        {/* Features Section */}
        {content.features && content.features.length > 0 && (
          <section className="py-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.features.map((feature: any, index: number) => (
                <div key={index} className="p-6 rounded-lg border border-white/10 bg-white/5">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description || feature.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Workflow Section */}
        {product?.workflow && (
          <section className="py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <PortableText content={product.workflow} />
            </div>
          </section>
        )}

        {/* Demo Section */}
        {product?.demoUrl && (
          <section className="py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">See It In Action</h2>
            <div className="aspect-video rounded-lg overflow-hidden border border-white/10">
              {product.demoType === 'video' ? (
                <iframe
                  src={product.demoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  <p className="text-foreground/70">Demo coming soon</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 text-center bg-white/5 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy DONNA?</h2>
          <p className="text-xl text-foreground/70 mb-6">
            Join the waitlist or request a demo to see this capability in action.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#demo-form">Join the Waitlist</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
