import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { BeforeAfter } from '@/components/before-after'
import { StatsSection } from '@/components/stats-section'
import { Clock, HeadphonesIcon, TrendingDown, Smile } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Support Automation - 24/7 AI Support | DONNA',
  description: 'Provide instant customer support 24/7 with DONNA\'s AI-powered support automation. Reduce costs while improving satisfaction.',
  path: '/use-cases/customer-support',
})

export default function CustomerSupportPage() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never leave customers waiting. DONNA provides instant support around the clock.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Multi-Channel Support',
      description: 'Handle support requests via phone, email, chat, and SMS from one platform.',
    },
    {
      icon: TrendingDown,
      title: 'Reduce Costs',
      description: 'Automate 80% of common inquiries and free up your team for complex issues.',
    },
    {
      icon: Smile,
      title: 'Improve Satisfaction',
      description: 'Faster response times and consistent service quality boost customer happiness.',
    },
  ]

  const beforeItems = [
    'Long wait times frustrate customers',
    'Support team overwhelmed with repetitive questions',
    'Limited hours leave customers stranded',
    'Inconsistent answers from different agents',
    'High support costs with limited scalability',
  ]

  const afterItems = [
    'Instant responses to common questions 24/7',
    'AI handles routine inquiries automatically',
    'Round-the-clock support without hiring night shifts',
    'Consistent, accurate answers from knowledge base',
    'Scale support without proportional cost increases',
  ]

  const stats = [
    { value: '80', suffix: '%', label: 'Tickets Automated' },
    { value: '<1min', label: 'Average Response Time' },
    { value: '24/7', label: 'Support Coverage' },
    { value: '95', suffix: '%', label: 'Customer Satisfaction' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Customer Support Automation
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Deliver exceptional support experiences at scale with AI-powered automation
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <StatsSection stats={stats} />
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Benefits</h2>
          <FeatureGrid features={features} columns={4} />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Transform Your Support</h2>
          <BeforeAfter before={beforeItems} after={afterItems} />
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Common Support Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                scenario: 'Account Questions',
                examples: ['Password resets', 'Billing inquiries', 'Account updates', 'Feature access'],
              },
              {
                scenario: 'Product Information',
                examples: ['How-to guides', 'Feature explanations', 'Pricing details', 'Compatibility'],
              },
              {
                scenario: 'Order Status',
                examples: ['Tracking information', 'Delivery updates', 'Return requests', 'Refund status'],
              },
              {
                scenario: 'Technical Issues',
                examples: ['Troubleshooting steps', 'Error messages', 'Integration help', 'Bug reports'],
              },
            ].map((item, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#8A2FFF]">{item.scenario}</h3>
                <ul className="space-y-2">
                  {item.examples.map((example, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0FF]"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

