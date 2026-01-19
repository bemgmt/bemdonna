import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Phone, Mail, MessageSquare, Share2, Layers, BarChart3 } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Communications Layer - Omnichannel Orchestration | DONNA',
  description: 'Unify voice, email, and chat into one easy-to-manage communications layer that routes, escalates, and resolves customer requests in real time.',
  path: '/product/communications-layer',
})

export default function CommunicationsLayerPage() {
  const features = [
    {
      icon: Layers,
      title: 'Unified Channel Orchestration',
      description: 'All customer conversations live in one place so your team never loses track of who said what.',
    },
    {
      icon: Share2,
      title: 'Context Hand-Off',
      description: 'When a chat becomes a call or email, DONNA carries the full history so customers do not repeat themselves.',
    },
    {
      icon: Phone,
      title: 'Real-Time Routing',
      description: 'Route each request to the right person or queue based on topic, urgency, and availability.',
    },
    {
      icon: Mail,
      title: 'Thread-Aware Automation',
      description: 'Draft replies, acknowledge messages, and escalate issues with human approval options.',
    },
    {
      icon: MessageSquare,
      title: 'Conversational Intelligence',
      description: 'Summaries and action items appear after every interaction so follow-ups are fast and accurate.',
    },
    {
      icon: BarChart3,
      title: 'Performance Insights',
      description: 'See how fast you respond, where customers drop off, and which channel performs best.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Communications Layer
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A simple, unified way to manage calls, emails, and chats so every customer gets a fast, helpful response.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Core Capabilities</h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Operational Flow</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Capture',
                description: 'Calls, emails, and chats come into one inbox where DONNA labels and prioritizes them.',
              },
              {
                step: '02',
                title: 'Orchestrate',
                description: 'DONNA routes each request, suggests responses, and fills in missing details.',
              },
              {
                step: '03',
                title: 'Execute',
                description: 'Your team takes action or lets DONNA send the response, with full context attached.',
              },
            ].map((item) => (
              <div key={item.step} className="glass-panel p-8 rounded-xl">
                <div className="text-6xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Practical Examples</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Missed Call to Email Follow-Up',
                description:
                  'A caller asks about pricing after hours. DONNA captures the call, sends a branded email summary, and schedules a follow-up for the next morning.',
              },
              {
                title: 'Chat to Live Agent',
                description:
                  'A website visitor asks a complex question. DONNA answers basics, then hands the chat to a human with the full chat history attached.',
              },
              {
                title: 'Lead Inquiry Routing',
                description:
                  'A new lead emails about enterprise plans. DONNA tags it as high value and routes it to the sales director instantly.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-panel p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
