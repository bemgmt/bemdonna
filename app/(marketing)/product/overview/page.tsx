import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Brain, MessageSquare, Mail, Phone, Database, Zap } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { StatsSection } from '@/components/stats-section'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'Product Overview - DONNA AI Platform',
  description: 'Explore the operational intelligence layer that runs workflows across voice, email, and chat.',
  path: '/product/overview',
})

export default function ProductOverviewPage() {
  const features = [
    {
      icon: Phone,
      title: 'Voice Receptionist',
      description: 'Real-time AI voice operations that handle calls, route inquiries, and schedule appointments 24/7.',
    },
    {
      icon: Mail,
      title: 'Email Operations',
      description: 'Thread-aware email automation with intelligent lead classification and auto-draft responses.',
    },
    {
      icon: MessageSquare,
      title: 'Chatbot',
      description: 'Embedded AI chat widget with lead capture, funnel logic, and white-label branding.',
    },
    {
      icon: Database,
      title: 'Knowledge Base',
      description: 'DonnaBrain semantic reasoning engine with document ingestion and versioned KB.',
    },
    {
      icon: Zap,
      title: 'Marketing Bot',
      description: 'Multi-channel campaign automation with lead scoring across SMS, email, and chat.',
    },
    {
      icon: Brain,
      title: 'AI Workflows',
      description: 'Intelligent automation that learns from your business processes and adapts over time.',
    },
  ]

  const stats = [
    { value: '99.9', suffix: '%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'AI Availability' },
    { value: '<2s', label: 'Response Time' },
    { value: '50+', label: 'Integrations' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />

        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet animate-fade-in">
              DONNA Product Overview
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-slide-up">
              The digital operations layer that executes workflows across every channel
            </p>
          </div>

          <StatsSection stats={stats} className="mb-16" />
        </div>
      </section>

      {/* Why DONNA Exists */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-panel p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6 gradient-text-violet">Why DONNA Exists</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Businesses waste countless hours on repetitive communication tasks—answering the same questions, 
              routing calls, responding to emails, and managing leads across multiple platforms. DONNA was built 
              to solve this problem by creating a unified AI operations layer that handles all your communication channels 
              with intelligence and context.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Unlike traditional chatbots or simple automation tools, DONNA understands your business through its 
              advanced knowledge base, maintains context across all interactions, and continuously learns to provide 
              better service to your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Architecture */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Core Architecture</h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your Data',
                description: 'Upload your business documents, FAQs, and knowledge to DonnaBrain. Connect your email, phone, and chat channels.',
              },
              {
                step: '02',
                title: 'Configure Workflows',
                description: 'Set up intelligent routing rules, response templates, and automation workflows tailored to your business.',
              },
              {
                step: '03',
                title: 'Go Live & Scale',
                description: 'DONNA handles all incoming communications 24/7, learning and improving with every interaction.',
              },
            ].map((item, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl">
                <div className="text-6xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-panel p-12 rounded-2xl border-[#8A2FFF]">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start automating your communications today with DONNA's AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#8A2FFF] to-[#6B4FFF] rounded-lg font-semibold text-white hover:scale-105 transition-transform"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 glass-panel rounded-lg font-semibold text-white hover:border-[#8A2FFF] transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

