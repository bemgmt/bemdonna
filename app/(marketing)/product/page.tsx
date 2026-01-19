import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Breadcrumb from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { productSchema } from '@/lib/schema-markup'
import { Phone, Mail, MessageSquare, Zap, Database, Shield, Puzzle, Bot } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Product Overview',
  description: 'Industry-ready AI products for communication, scheduling, and lead response across real estate, hospitality, healthcare, and more.',
  path: '/product',
})

const iconMap: Record<string, any> = {
  phone: Phone,
  mail: Mail,
  'message-square': MessageSquare,
  zap: Zap,
  database: Database,
  shield: Shield,
  puzzle: Puzzle,
  bot: Bot,
}

export default async function ProductPage() {
  const products = [
    {
      _id: 'voice-receptionist',
      title: 'Voice Receptionist',
      description: 'Always-on call handling with intelligent routing, booking, and industry-specific intake.',
      slug: { current: 'voice-receptionist' },
      icon: 'phone',
    },
    {
      _id: 'email-assistant',
      title: 'Email Assistant',
      description: 'Goal-based email drafting, follow-ups, and approvals that preserve brand voice.',
      slug: { current: 'email-assistant' },
      icon: 'mail',
    },
    {
      _id: 'chatbot',
      title: 'AI Chatbot',
      description: 'Web chat that captures intent, qualifies leads, and hands off to humans seamlessly.',
      slug: { current: 'chatbot' },
      icon: 'message-square',
    },
    {
      _id: 'secretary-bot',
      title: 'Secretary Bot',
      description: 'Scheduling, reminders, and coordination that keep teams aligned without bottlenecks.',
      slug: { current: 'secretary-bot' },
      icon: 'bot',
    },
    {
      _id: 'marketing-bot',
      title: 'Marketing Bot',
      description: 'Campaign automation across SMS, email, and chat aligned to industry intent signals.',
      slug: { current: 'marketing-bot' },
      icon: 'zap',
    },
    {
      _id: 'knowledge-base',
      title: 'Knowledge Base',
      description: 'Living knowledge system with industry-specific segmentation and access controls.',
      slug: { current: 'knowledge-base' },
      icon: 'database',
    },
    {
      _id: 'integrations',
      title: 'Integrations',
      description: 'Tool-native integrations across CRM, calendar, email, and operational systems.',
      slug: { current: 'integrations' },
      icon: 'puzzle',
    },
    {
      _id: 'security',
      title: 'Security',
      description: 'Enterprise-grade security with role-based access, encryption, and compliance readiness.',
      slug: { current: 'security' },
      icon: 'shield',
    },
  ]

  const schema = productSchema({
    name: 'DONNA Platform',
    description: 'AI-Powered Business Communication Platform',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Digital Operations Layer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            DONNA connects to your tools, coordinates across channels, and executes industry workflows with human-in-the-loop control.
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
              Businesses run on fragmented tools and manual handoffs. DONNA was built as the operational layer that
              coordinates work across departments, industries, and systems.
            </p>
            <p>
              It takes action inside your existing stack, escalates exceptions, and keeps humans in control of outcomes.
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

        {/* CTA Section */}
        <section className="py-12 text-center bg-muted rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy DONNA?</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Join the waitlist or request a demo to see industry-specific workflows in action.
          </p>
          <Button size="lg" asChild>
            <Link href="/#demo-form">Join the Waitlist</Link>
          </Button>
        </section>
      </div>
    </>
  )
}

