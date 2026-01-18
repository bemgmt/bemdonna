import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Home, Phone, Mail, Calendar, Users, Shield } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { StatsSection } from '@/components/stats-section'

export const metadata: Metadata = generatePageMetadata({
  title: 'Real Estate AI Solutions - DONNA for Realtors',
  description: 'Operational intelligence for real estate teams that automates inquiries, scheduling, and follow-ups.',
  path: '/industries/real-estate',
})

export default function RealEstatePage() {
  const features = [
    {
      icon: Phone,
      title: 'Instant Lead Response',
      description: 'Respond to property inquiries within seconds, 24/7, before competitors.',
    },
    {
      icon: Calendar,
      title: 'Showing Scheduler',
      description: 'Automate showing bookings with calendar sync and instant confirmations.',
    },
    {
      icon: Mail,
      title: 'Lead Nurturing',
      description: 'Automated follow-ups keep prospects engaged until they\'re ready to buy.',
    },
    {
      icon: Users,
      title: 'Buyer Qualification',
      description: 'Pre-qualify leads with intelligent questions before routing to agents.',
    },
    {
      icon: Home,
      title: 'Property Information',
      description: 'Answer questions about listings using your MLS data and property details.',
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'GDPR and real estate regulation compliant communication.',
    },
  ]

  const stats = [
    { value: '78', suffix: '%', label: 'Buy from First Responder*' },
    { value: '<30s', label: 'AI Response Time' },
    { value: '24/7', label: 'Availability' },
    { value: '5+', label: 'Hours Avg Industry Response*' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA for Real Estate
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Agentic workflows that capture inquiries, schedule showings, and keep your CRM current.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <StatsSection stats={stats} />
          <p className="text-center text-sm text-gray-500 mt-6">
            *Harvard Business Review study
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Built for Real Estate</h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Common Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Property Inquiry',
                description: 'Lead sees listing online and calls with questions',
                donna: 'Answers property details, schedules showing, captures contact info, routes to agent',
              },
              {
                title: 'Showing Request',
                description: 'Buyer wants to see a property this weekend',
                donna: 'Checks agent calendar, books showing, sends confirmation and directions',
              },
              {
                title: 'Price Negotiation',
                description: 'Buyer asks if seller will accept lower offer',
                donna: 'Collects offer details, notifies agent immediately, schedules follow-up call',
              },
              {
                title: 'After-Hours Inquiry',
                description: 'Lead calls at 10 PM with urgent question',
                donna: 'Provides information, qualifies lead, schedules next-day callback',
              },
            ].map((scenario, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-[#8A2FFF]">{scenario.title}</h3>
                <p className="text-gray-400 mb-4 italic">{scenario.description}</p>
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="text-sm text-[#3DE0FF] mb-2">DONNA's Response:</div>
                  <p className="text-gray-300">{scenario.donna}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Integrations</h2>
          <div className="glass-panel p-12 rounded-2xl">
            <p className="text-xl text-gray-300 mb-8 text-center">
              DONNA integrates with your existing real estate tools:
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {['MLS Systems', 'Follow Up Boss', 'kvCORE', 'Zillow', 'Realtor.com', 'Google Calendar', 'CRM Systems', 'Email Platforms'].map((tool, index) => (
                <div key={index} className="bg-black/40 p-4 rounded-lg text-center">
                  <div className="font-semibold text-white">{tool}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-panel p-12 rounded-2xl text-center">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Success Story</h2>
            <blockquote className="text-2xl text-gray-300 italic mb-6">
              "DONNA increased our showing bookings by 5x. We never miss a lead now, even when we're showing properties. 
              Best investment we've made in our business."
            </blockquote>
            <div className="text-[#8A2FFF] font-semibold">— Sarah Johnson, Top Producer, Luxury Realty Group</div>
          </div>
        </div>
      </section>
    </main>
  )
}

