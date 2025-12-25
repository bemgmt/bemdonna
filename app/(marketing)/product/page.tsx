import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Breadcrumb from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { productSchema } from '@/lib/schema-markup'
import { Phone, Mail, MessageSquare, Zap, Database, Shield, Puzzle, Bot } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Product Overview',
  description: 'Discover DONNA\'s comprehensive AI-powered communication platform. Voice, email, chat, and more.',
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
      description: 'AI-powered phone assistant that never sleeps, answers calls instantly, and handles scheduling 24/7.',
      slug: { current: 'voice-receptionist' },
      icon: 'phone',
    },
    {
      _id: 'email-assistant',
      title: 'Email Assistant',
      description: 'Thread-aware email automation with intelligent lead classification and auto-draft responses.',
      slug: { current: 'email-assistant' },
      icon: 'mail',
    },
    {
      _id: 'chatbot',
      title: 'AI Chatbot',
      description: 'Embedded chat widget with lead capture, funnel logic, and white-label branding for your website.',
      slug: { current: 'chatbot' },
      icon: 'message-square',
    },
    {
      _id: 'secretary-bot',
      title: 'Secretary Bot',
      description: 'AI executive assistant that manages schedules, coordinates meetings, and handles administrative tasks 24/7.',
      slug: { current: 'secretary-bot' },
      icon: 'bot',
    },
    {
      _id: 'marketing-bot',
      title: 'Marketing Bot',
      description: 'Automate campaigns across SMS, email, and chat with intelligent lead scoring and personalization.',
      slug: { current: 'marketing-bot' },
      icon: 'zap',
    },
    {
      _id: 'knowledge-base',
      title: 'Knowledge Base',
      description: 'Centralized knowledge management system that powers all DONNA interactions with accurate, up-to-date information.',
      slug: { current: 'knowledge-base' },
      icon: 'database',
    },
    {
      _id: 'integrations',
      title: 'Integrations',
      description: 'Seamlessly connect with your existing tools: CRM, calendar, email, and hundreds of other platforms.',
      slug: { current: 'integrations' },
      icon: 'puzzle',
    },
    {
      _id: 'security',
      title: 'Security',
      description: 'Enterprise-grade security with SOC 2 compliance, GDPR compliance, and end-to-end encryption.',
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
            The Complete AI Communication Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            DONNA combines voice, email, chat, and knowledge base into one powerful platform
            that works 24/7 to grow your business.
          </p>
          <Button size="lg" asChild>
            <Link href="/#demo-form">Start Free Trial</Link>
          </Button>
        </section>

        {/* Why DONNA Exists */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why DONNA Exists</h2>
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <p>
              Every day, businesses lose thousands of dollars because they can't respond to leads fast enough.
              Customers expect instant answers, but hiring 24/7 staff is expensive and inefficient.
            </p>
            <p>
              DONNA was built to solve this problem. Our AI-powered platform handles customer communication
              across all channels—voice, email, and chat—so you never miss an opportunity.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Start your free trial today. No credit card required.
          </p>
          <Button size="lg" asChild>
            <Link href="/#demo-form">Get Started Free</Link>
          </Button>
        </section>
      </div>
    </>
  )
}

