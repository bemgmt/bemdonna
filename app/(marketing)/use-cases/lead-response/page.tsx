import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Clock, TrendingUp, Users, Zap } from 'lucide-react'
import { BeforeAfter } from '@/components/before-after'
import { StatsSection } from '@/components/stats-section'
import { WorkflowDiagram } from '@/components/workflow-diagram'
import { Phone, Mail, MessageSquare, Database, CheckCircle } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Lead Response Automation - Instant Follow-Up | DONNA',
  description: 'Respond to leads instantly with DONNA\'s automated lead response system. Never miss an opportunity with 24/7 AI-powered follow-up.',
  path: '/use-cases/lead-response',
})

export default function LeadResponsePage() {
  const beforeItems = [
    'Leads wait hours or days for initial response',
    'Manual qualification wastes sales team time',
    'Inconsistent follow-up processes',
    'Leads go cold before contact is made',
    'No visibility into response times',
  ]

  const afterItems = [
    'Instant automated response within seconds',
    'AI qualifies leads before routing to sales',
    'Consistent, professional engagement every time',
    'Hot leads are prioritized and routed immediately',
    'Complete analytics on response performance',
  ]

  const stats = [
    { value: '5+', label: 'Hours Avg Industry Response' },
    { value: '78', suffix: '%', label: 'Buy from First Responder*' },
    { value: '100x', label: 'More Likely to Connect**' },
    { value: '24/7', label: 'AI Availability' },
  ]

  const workflowSteps = [
    {
      icon: Phone,
      title: 'Lead Arrives',
      description: 'From any channel',
    },
    {
      icon: Database,
      title: 'AI Analysis',
      description: 'Intent & urgency',
    },
    {
      icon: MessageSquare,
      title: 'Instant Response',
      description: 'Personalized reply',
    },
    {
      icon: Users,
      title: 'Qualification',
      description: 'Gather key info',
    },
    {
      icon: CheckCircle,
      title: 'Route to Sales',
      description: 'Hot leads first',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Lead Response Automation
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Convert more leads with instant, intelligent responses that never sleep
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <StatsSection stats={stats} />
          <p className="text-center text-sm text-gray-500 mt-6">
            *Harvard Business Review study | **InsideSales.com research
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">The Problem</h2>
          <div className="glass-panel p-12 rounded-2xl max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Studies show that <strong className="text-[#8A2FFF]">78% of customers buy from the company that responds first</strong>. 
              Yet most businesses take hours or even days to follow up with new leads.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              By the time your sales team gets to a lead, they've already moved on to a competitor who responded faster. 
              You're losing deals not because of your product or price, but because of slow response times.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">The DONNA Solution</h2>
          <BeforeAfter before={beforeItems} after={afterItems} />
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">How It Works</h2>
          <WorkflowDiagram steps={workflowSteps} />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Real Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'Real Estate Agency',
                result: '5x increase in showings booked',
                quote: 'DONNA responds to leads while we sleep. We never miss an opportunity now.',
              },
              {
                company: 'Insurance Broker',
                result: '391% increase in quote requests',
                quote: 'Instant responses transformed our lead conversion. Best ROI of any tool we use.',
              },
              {
                company: 'Property Management',
                result: '100% lead follow-up rate',
                quote: 'Every single inquiry gets a response within 30 seconds. Game changer.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl">
                <div className="text-2xl font-bold gradient-text mb-4">{testimonial.result}</div>
                <div className="text-gray-400 mb-4 italic">"{testimonial.quote}"</div>
                <div className="text-sm text-[#8A2FFF] font-semibold">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

