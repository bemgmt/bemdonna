import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Target, TrendingUp, Users, Zap } from 'lucide-react'
import { BeforeAfter } from '@/components/before-after'
import { StatsSection } from '@/components/stats-section'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Lead Nurturing Automation - AI-Powered Campaigns | DONNA',
  description: 'Agentic lead nurturing across channels with personalized follow-ups and escalation.',
  path: '/use-cases/lead-nurturing',
})

export default function LeadNurturingPage() {
  const features = [
    {
      icon: Target,
      title: 'Personalized Campaigns',
      description: 'AI tailors messaging based on lead behavior, interests, and engagement level.',
    },
    {
      icon: Zap,
      title: 'Trigger-Based Automation',
      description: 'Automatically send the right message at the right time based on lead actions.',
    },
    {
      icon: TrendingUp,
      title: 'Lead Scoring',
      description: 'Track engagement and prioritize hot leads for sales team follow-up.',
    },
    {
      icon: Users,
      title: 'Multi-Channel Nurturing',
      description: 'Reach leads via email, SMS, and chat with coordinated messaging.',
    },
  ]

  const beforeItems = [
    'Leads fall through the cracks without follow-up',
    'Generic mass emails get ignored',
    'No visibility into lead engagement',
    'Sales team wastes time on cold leads',
    'Inconsistent nurturing processes',
  ]

  const afterItems = [
    'Every lead gets personalized nurture sequence',
    'AI-powered messaging based on behavior',
    'Real-time engagement tracking and scoring',
    'Hot leads automatically routed to sales',
    'Consistent, automated nurturing at scale',
  ]

  const stats = [
    { value: '50', suffix: '%', label: 'More Sales-Ready Leads*' },
    { value: '20', suffix: '%', label: 'More Sales Opportunities*' },
    { value: '42:1', label: 'Email Marketing ROI**' },
    { value: '24/7', label: 'Automated Nurturing' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Lead Nurturing
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Keep prospects warm with multi-modal, tool-native nurture workflows
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <StatsSection stats={stats} />
          <p className="text-center text-sm text-gray-500 mt-6">
            *Marketo/Forrester research | **DMA industry average
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
          <FeatureGrid features={features} columns={4} />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Transform Your Nurturing</h2>
          <BeforeAfter before={beforeItems} after={afterItems} />
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Nurture Campaign Examples</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#8A2FFF]">New Lead Welcome Series</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-bold text-[#3DE0FF]">Day 1:</div>
                  <div className="text-gray-300">Welcome email with company overview</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-[#3DE0FF]">Day 3:</div>
                  <div className="text-gray-300">Educational content about your solution</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-[#3DE0FF]">Day 7:</div>
                  <div className="text-gray-300">Customer success stories and case studies</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-[#3DE0FF]">Day 14:</div>
                  <div className="text-gray-300">Demo invitation or consultation offer</div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#8A2FFF]">Re-Engagement Campaign</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-bold text-[#3DE0FF]">Week 1:</div>
                  <div className="text-gray-300">"We miss you" message with special offer</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-[#3DE0FF]">Week 2:</div>
                  <div className="text-gray-300">New features and product updates</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-[#3DE0FF]">Week 3:</div>
                  <div className="text-gray-300">Exclusive content or limited-time discount</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-[#3DE0FF]">Week 4:</div>
                  <div className="text-gray-300">Final outreach before list cleanup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

