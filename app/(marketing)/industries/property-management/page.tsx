import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Building, Wrench, Users, DollarSign, FileText, Phone } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { StatsSection } from '@/components/stats-section'

export const metadata: Metadata = generatePageMetadata({
  title: 'Property Management AI - DONNA for Property Managers',
  description: 'Operational intelligence for property management: tenant communication, maintenance, and leasing workflows.',
  path: '/industries/property-management',
})

export default function PropertyManagementPage() {
  const features = [
    {
      icon: Wrench,
      title: 'Maintenance Requests',
      description: 'Automate work order creation, routing, and tenant updates.',
    },
    {
      icon: Users,
      title: 'Tenant Communication',
      description: 'Handle inquiries, rent reminders, and lease renewals automatically.',
    },
    {
      icon: Building,
      title: 'Leasing Automation',
      description: 'Schedule tours, answer questions, and process applications 24/7.',
    },
    {
      icon: DollarSign,
      title: 'Rent Collection',
      description: 'Send payment reminders and process late fee notifications.',
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Distribute lease documents, policies, and important notices.',
    },
    {
      icon: Phone,
      title: 'Emergency Response',
      description: 'Route urgent issues to on-call staff immediately.',
    },
  ]

  const stats = [
    { value: '24/7', label: 'AI Tenant Support' },
    { value: '60-80', suffix: '%', label: 'Routine Inquiries Automated*' },
    { value: '12', label: 'Hours Avg Industry Response**' },
    { value: '<30s', label: 'AI Response Time' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA for Property Management
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Automate tenant requests, maintenance updates, and leasing coordination
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <StatsSection stats={stats} />
          <p className="text-center text-sm text-gray-500 mt-6">
            *Gartner research | **Zendesk industry average
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Maintenance Request',
                scenario: 'Tenant reports broken AC unit',
                response: 'DONNA creates work order, notifies maintenance team, sends confirmation to tenant with expected timeline',
              },
              {
                title: 'Leasing Inquiry',
                scenario: 'Prospect asks about available units',
                response: 'DONNA provides unit details, pricing, amenities, schedules tour, and captures application',
              },
              {
                title: 'Rent Reminder',
                scenario: 'Rent due date approaching',
                response: 'DONNA sends automated reminders via SMS and email, provides payment link, confirms receipt',
              },
              {
                title: 'Lease Renewal',
                scenario: 'Lease expiring in 60 days',
                response: 'DONNA initiates renewal conversation, presents options, collects decision, routes to leasing team',
              },
            ].map((useCase, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-[#8A2FFF]">{useCase.title}</h3>
                <p className="text-gray-400 mb-4 italic">{useCase.scenario}</p>
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="text-sm text-[#3DE0FF] mb-2">DONNA's Action:</div>
                  <p className="text-gray-300">{useCase.response}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

