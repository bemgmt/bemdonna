import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Plug, Zap, Code, Database } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'Integrations - Connect Your Tools | DONNA',
  description: 'Tool-native integration across CRM, calendar, email, and operations systems.',
  path: '/product/integrations',
})

export default function IntegrationsPage() {
  const features = [
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Sync leads, contacts, and activities with Salesforce, HubSpot, Pipedrive, and more.',
    },
    {
      icon: Plug,
      title: 'Calendar Sync',
      description: 'Connect Google Calendar, Outlook, and other scheduling tools for seamless booking.',
    },
    {
      icon: Code,
      title: 'API Access',
      description: 'Full REST API for custom integrations and workflow automation.',
    },
    {
      icon: Zap,
      title: 'Zapier & Make',
      description: 'Connect to 5,000+ apps through Zapier and Make.com integrations.',
    },
  ]

  const integrationCategories = [
    {
      name: 'CRM & Sales',
      tools: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Close', 'Copper'],
    },
    {
      name: 'Communication',
      tools: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Twilio', 'SendGrid'],
    },
    {
      name: 'Calendar & Scheduling',
      tools: ['Google Calendar', 'Outlook Calendar', 'Calendly', 'Acuity', 'Cal.com'],
    },
    {
      name: 'Marketing',
      tools: ['Mailchimp', 'ActiveCampaign', 'Constant Contact', 'ConvertKit', 'Drip'],
    },
    {
      name: 'E-Commerce',
      tools: ['Shopify', 'WooCommerce', 'BigCommerce', 'Stripe', 'Square'],
    },
    {
      name: 'Real Estate',
      tools: ['MLS', 'Zillow', 'Realtor.com', 'Follow Up Boss', 'kvCORE'],
    },
    {
      name: 'Property Management',
      tools: ['AppFolio', 'Buildium', 'Rent Manager', 'Yardi', 'TenantCloud'],
    },
    {
      name: 'Analytics',
      tools: ['Google Analytics', 'Mixpanel', 'Segment', 'Amplitude', 'Heap'],
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Integrations
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Tool-native control across the systems you already run
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Integration Capabilities</h2>
          <FeatureGrid features={features} columns={4} />
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Supported Integrations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationCategories.map((category, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#8A2FFF]">{category.name}</h3>
                <ul className="space-y-2">
                  {category.tools.map((tool, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0FF]"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Example Workflows</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Lead Capture → CRM</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">1.</span>
                  <span>Visitor chats with DONNA on your website</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">2.</span>
                  <span>DONNA qualifies the lead and collects contact info</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">3.</span>
                  <span>Lead is automatically created in your CRM</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">4.</span>
                  <span>Sales team is notified for immediate follow-up</span>
                </li>
              </ol>
            </div>

            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Appointment Booking</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">1.</span>
                  <span>Customer requests appointment via phone or chat</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">2.</span>
                  <span>DONNA checks calendar availability in real-time</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">3.</span>
                  <span>Appointment is booked and added to calendar</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">4.</span>
                  <span>Confirmation sent via email and SMS</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-panel p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Need a Custom Integration?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our API and webhook system makes it easy to build custom integrations with any platform.
            </p>
            <Link
              href="/documentation"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#8A2FFF] to-[#6B4FFF] rounded-lg font-semibold text-white hover:scale-105 transition-transform"
            >
              View API Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

