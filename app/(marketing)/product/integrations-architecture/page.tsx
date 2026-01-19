import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Plug, Database, Phone, Mail, Calendar, Layers } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Integrations & Architecture - Systems Connectivity | DONNA',
  description: 'Connect DONNA to your CRM, calendar, helpdesk, and data tools so every conversation updates the right system.',
  path: '/product/integrations-architecture',
})

export default function IntegrationsArchitecturePage() {
  const integrations = [
    {
      icon: Plug,
      title: 'CRM & Sales',
      description: 'Automatically log new leads, notes, and follow-ups in your CRM.',
    },
    {
      icon: Calendar,
      title: 'Scheduling',
      description: 'Book meetings and events directly in your existing calendar tools.',
    },
    {
      icon: Mail,
      title: 'Email Systems',
      description: 'Connect shared inboxes so DONNA can read and respond with full context.',
    },
    {
      icon: Phone,
      title: 'Telephony',
      description: 'Use your current phone system while DONNA answers and routes calls.',
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Send conversation data to analytics tools for reporting and insights.',
    },
    {
      icon: Layers,
      title: 'Custom APIs',
      description: 'Connect custom systems with API access and workflow triggers.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Integrations &amp; Architecture
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Plug DONNA into the tools you already use so every interaction updates the right system automatically.
          </p>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Integration Coverage</h2>
          <FeatureGrid features={integrations} columns={3} />
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Reference Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect',
                description: 'Authenticate your tools and map key fields like contacts, deals, and tickets.',
              },
              {
                step: '02',
                title: 'Orchestrate',
                description: 'Set rules for routing, automation, and when to involve a human.',
              },
              {
                step: '03',
                title: 'Deliver',
                description: 'Push results back to your CRM, analytics, and internal workflows.',
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
                title: 'CRM Updates',
                description:
                  'A chat lead requests a demo. DONNA creates a new lead in the CRM and assigns it to sales.',
              },
              {
                title: 'Calendar Booking',
                description:
                  'A caller wants an appointment. DONNA finds availability and books the meeting automatically.',
              },
              {
                title: 'Support Ticket Sync',
                description:
                  'A customer reports an issue. DONNA opens a helpdesk ticket and attaches the transcript.',
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
