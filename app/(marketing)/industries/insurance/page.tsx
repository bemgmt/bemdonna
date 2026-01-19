import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Shield, Phone, FileText, TrendingUp, Users, Clock } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { StatsSection } from '@/components/stats-section'

export const metadata: Metadata = generatePageMetadata({
  title: 'Insurance AI Solutions - DONNA for Insurance Agents',
  description: 'Insurance AI for quotes, renewals, and policy support with compliant client communication.',
  path: '/industries/insurance',
})

export default function InsurancePage() {
  const operations = [
    {
      title: 'Communications Layer',
      description: 'Handle policy questions and claims inquiries across phone, SMS, and chat.',
    },
    {
      title: 'Email Center',
      description: 'Automate quote follow-ups, renewals, and documentation requests.',
    },
    {
      title: 'Chatbot + Live Handoff',
      description: 'Qualify prospects and route complex coverage questions to agents.',
    },
    {
      title: 'Knowledge Base',
      description: 'Surface policy details, coverage FAQs, and regulatory guidance.',
    },
    {
      title: 'Lead Generation',
      description: 'Capture intent signals and prioritize high-value insurance leads.',
    },
    {
      title: 'Secretary Features',
      description: 'Coordinate appointments, reminders, and policy reviews.',
    },
  ]
  const features = [
    {
      icon: FileText,
      title: 'Quote Automation',
      description: 'Collect information and generate quotes instantly for prospects.',
    },
    {
      icon: Phone,
      title: 'Lead Qualification',
      description: 'Pre-qualify leads before routing to agents based on coverage needs.',
    },
    {
      icon: Users,
      title: 'Policy Support',
      description: 'Answer common policy questions and route complex issues to agents.',
    },
    {
      icon: Clock,
      title: 'Renewal Reminders',
      description: 'Automate policy renewal outreach and retention campaigns.',
    },
    {
      icon: TrendingUp,
      title: 'Cross-Sell Opportunities',
      description: 'Identify and pursue cross-sell opportunities automatically.',
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'Maintain compliance with insurance regulations and documentation.',
    },
  ]

  const stats = [
    { value: '78', suffix: '%', label: 'Buy from First Responder*' },
    { value: '<2min', label: 'AI Quote Response Time' },
    { value: '24/7', label: 'Lead Capture' },
    { value: '5+', label: 'Hours Avg Industry Response*' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA for Insurance
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Automate quote requests, policy support, and renewals with human oversight
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

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Insurance Operations Layer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operations.map((item) => (
              <div key={item.title} className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
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
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Insurance Types</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Auto Insurance',
              'Home Insurance',
              'Life Insurance',
              'Health Insurance',
              'Business Insurance',
              'Renters Insurance',
              'Umbrella Policies',
              'Specialty Coverage',
            ].map((type, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl text-center">
                <Shield className="w-10 h-10 text-[#3DE0FF] mx-auto mb-3" />
                <div className="font-semibold text-white">{type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

