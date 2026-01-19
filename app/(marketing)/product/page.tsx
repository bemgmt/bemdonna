import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Breadcrumb from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { productSchema } from '@/lib/schema-markup'
import { Layers, Zap, Database, Shield, Puzzle, Bot } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Product Overview',
  description: 'Simple, AI-powered communication tools for calls, email, chat, knowledge, integrations, and security.',
  path: '/product',
})

const iconMap: Record<string, any> = {
  layers: Layers,
  tools: Zap,
  database: Database,
  puzzle: Puzzle,
  shield: Shield,
  bot: Bot,
}

export default async function ProductPage() {
  const products = [
    {
      _id: 'communications-layer',
      title: 'Communications Layer',
      description: 'One place for calls, emails, and chats. Example: a missed call becomes a follow-up email automatically.',
      slug: { current: 'communications-layer' },
      icon: 'layers',
    },
    {
      _id: 'donna-tools',
      title: 'DONNA Tools/Features',
      description: 'Email Center, live agent handoff, lead generation, and scheduling in plain language.',
      slug: { current: 'donna-tools' },
      icon: 'tools',
    },
    {
      _id: 'custom-knowledge-base',
      title: 'Custom Knowledge Base',
      description: 'Approved answers from your docs. Example: policy questions get the official response every time.',
      slug: { current: 'custom-knowledge-base' },
      icon: 'database',
    },
    {
      _id: 'integrations-architecture',
      title: 'Integrations & Architecture',
      description: 'Connect CRM, calendar, and helpdesk. Example: a lead is logged to your CRM instantly.',
      slug: { current: 'integrations-architecture' },
      icon: 'puzzle',
    },
    {
      _id: 'security-infrastructure',
      title: 'Security & Infrastructure',
      description: 'Encrypted data, access controls, and reliable uptime for customer communication.',
      slug: { current: 'security-infrastructure' },
      icon: 'shield',
    },
  ]

  const faqItems = [
    {
      question: 'What does the DONNA Communications Layer do?',
      answer:
        'It connects calls, emails, and chats into one system so nothing gets lost. Example: a missed call can automatically trigger a follow-up email with the call summary.',
    },
    {
      question: 'How does DONNA help non-technical teams?',
      answer:
        'DONNA uses plain-language tools like shared inboxes, smart routing, and simple automation rules so teams can respond quickly without learning new software.',
    },
    {
      question: 'Can DONNA use our existing tools like CRM and calendars?',
      answer:
        'Yes. DONNA integrates with popular CRMs, calendars, and helpdesks, and can connect to custom tools through APIs.',
    },
    {
      question: 'How does the Custom Knowledge Base work?',
      answer:
        'You upload your policies, pricing, FAQs, and guides. DONNA answers questions using only approved information so responses stay accurate and compliant.',
    },
    {
      question: 'Is DONNA secure for customer data?',
      answer:
        'Yes. Data is encrypted, access is controlled by roles, and activity is logged for compliance and audits.',
    },
    {
      question: 'What is a real example of DONNA in action?',
      answer:
        'A customer asks for pricing on chat, DONNA confirms their needs, creates a lead in your CRM, schedules a call, and sends a summary to your team.',
    },
  ]

  const schema = productSchema({
    name: 'DONNA Platform',
    description: 'AI-Powered Business Communication Platform',
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Communications Layer for Every Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            DONNA helps you answer calls, emails, and chats faster, with simple tools that keep your team in control.
          </p>
          <Button size="lg" asChild>
            <Link href="/#demo-form">Join the Waitlist</Link>
          </Button>
        </section>

        {/* Why DONNA Exists */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why DONNA Exists</h2>
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <p>
              Most businesses juggle phones, inboxes, and chat tools that do not talk to each other. DONNA connects
              them so customers get quick answers and your team sees the full story.
            </p>
            <p>
              It automates the busywork, routes requests to the right person, and keeps humans in control of every outcome.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const Icon = iconMap[product.icon] || Bot
              return (
                <Link
                  key={product._id}
                  href={`/product/${product.slug.current}`}
                  className="group p-6 border rounded-lg hover:border-primary transition-colors"
                >
                  <Icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto grid gap-6">
            {faqItems.map((item) => (
              <div key={item.question} className="p-6 border rounded-lg bg-background">
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 text-center bg-muted rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy DONNA?</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Join the waitlist or request a demo to see DONNA handle real calls, emails, and chats for your business.
          </p>
          <Button size="lg" asChild>
            <Link href="/#demo-form">Join the Waitlist</Link>
          </Button>
        </section>
      </div>
    </>
  )
}

