import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Mail, MessageSquare, Target, Calendar, Zap, CheckCircle2, Users, Phone } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'DONNA Tools & Features - Operations Toolkit | DONNA',
  description: 'Simple tools for email, chat handoffs, lead generation, and scheduling that help teams respond faster and win more customers.',
  path: '/product/donna-tools',
})

export default function DonnaToolsPage() {
  const coreTools = [
    {
      icon: Mail,
      title: 'Email Center',
      description: 'One shared inbox where DONNA drafts replies, tags the topic, and routes messages to the right person.',
    },
    {
      icon: MessageSquare,
      title: 'Live Agent Chatbot Handoff',
      description: 'When a customer needs a human, DONNA hands the chat to an agent with the full history attached.',
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Capture new leads from calls, chat, and email, then qualify them with smart questions.',
    },
    {
      icon: Calendar,
      title: 'Secretary',
      description: 'Books meetings, sends reminders, and follows up automatically so nothing slips through.',
    },
  ]

  const supportingCapabilities = [
    {
      icon: Zap,
      title: 'Automation Rules',
      description: 'Set simple rules like “urgent messages go to the manager” or “send a follow-up after 24 hours.”',
    },
    {
      icon: CheckCircle2,
      title: 'Playbooks & Templates',
      description: 'Prewritten responses keep answers consistent and on brand, even across large teams.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Teams can add internal notes, approve drafts, and see who owns each conversation.',
    },
    {
      icon: Phone,
      title: 'Conversation Summaries',
      description: 'Every call, chat, and email ends with a clear summary and next steps.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA Tools &amp; Features
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Easy-to-use tools that help your team answer faster, follow up automatically, and never miss a lead.
          </p>
        </div>
      </section>

      {/* Core Tools */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Core Tools</h2>
          <FeatureGrid features={coreTools} columns={2} />
        </div>
      </section>

      {/* Supporting Capabilities */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Supporting Capabilities</h2>
          <FeatureGrid features={supportingCapabilities} columns={2} />
        </div>
      </section>

      {/* Practical Examples */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Practical Examples</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Email Center in Action',
                description:
                  'A customer asks for pricing. DONNA drafts a response, pulls the correct plan details, and notifies a manager to approve before sending.',
              },
              {
                title: 'Live Agent Handoff',
                description:
                  'A chat visitor wants a custom quote. DONNA gathers key details, then hands the chat to sales with a full summary.',
              },
              {
                title: 'Secretary for Scheduling',
                description:
                  'A client requests a meeting. DONNA checks calendars, proposes times, and sends the confirmed invite with reminders.',
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
