import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Scissors, Calendar, Bell, Star, CreditCard, Users } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { StatsSection } from '@/components/stats-section'

export const metadata: Metadata = generatePageMetadata({
  title: 'Health & Beauty AI - DONNA for Salons & Spas',
  description: 'Health and beauty AI for salons, spas, and wellness centers across booking, reminders, and client care.',
  path: '/industries/health-beauty',
})

export default function HealthBeautyPage() {
  const operations = [
    {
      title: 'Communications Layer',
      description: 'Handle inquiries across phone, SMS, and chat with consistent tone and context.',
    },
    {
      title: 'Email Center',
      description: 'Automate confirmations, reschedules, and follow-ups with goal-based messaging.',
    },
    {
      title: 'Chatbot + Live Handoff',
      description: 'Guide new clients to the right services, then route VIP requests to staff.',
    },
    {
      title: 'Knowledge Base',
      description: 'Answer service, pricing, and availability questions instantly.',
    },
    {
      title: 'Lead Generation',
      description: 'Identify high-intent clients and prep intake details for your team.',
    },
    {
      title: 'Secretary Features',
      description: 'Coordinate calendars, reminders, and retention outreach.',
    },
  ]
  const features = [
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Clients book services 24/7 with automatic calendar sync and confirmations.',
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Reduce no-shows by 80% with automated SMS and email reminders.',
    },
    {
      icon: Users,
      title: 'Client Preferences',
      description: 'Remember client preferences, service history, and favorite stylists.',
    },
    {
      icon: Star,
      title: 'Review Collection',
      description: 'Automatically request reviews after appointments to build your reputation.',
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Collect deposits and process payments securely.',
    },
    {
      icon: Scissors,
      title: 'Service Information',
      description: 'Answer questions about services, pricing, and availability.',
    },
  ]

  const stats = [
    { value: '24/7', label: 'Booking Availability' },
    { value: '20-30', suffix: '%', label: 'Industry No-Show Rate*' },
    { value: '10-15', suffix: '%', label: 'Reduction with Reminders**' },
    { value: '<30s', label: 'AI Booking Time' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA for Health & Beauty
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Automate bookings, reminders, and client communication with human oversight
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <StatsSection stats={stats} />
          <p className="text-center text-sm text-gray-500 mt-6">
            *Industry standard | **Automated reminder studies
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Health & Beauty Operations Layer</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: 'Salons', services: ['Hair styling', 'Coloring', 'Extensions', 'Treatments'] },
              { type: 'Spas', services: ['Massages', 'Facials', 'Body treatments', 'Wellness'] },
              { type: 'Med Spas', services: ['Botox', 'Fillers', 'Laser treatments', 'Skin care'] },
              { type: 'Nail Salons', services: ['Manicures', 'Pedicures', 'Nail art', 'Extensions'] },
              { type: 'Barbershops', services: ['Haircuts', 'Shaves', 'Beard trims', 'Styling'] },
              { type: 'Wellness Centers', services: ['Yoga', 'Pilates', 'Therapy', 'Nutrition'] },
            ].map((business, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#8A2FFF]">{business.type}</h3>
                <ul className="space-y-2">
                  {business.services.map((service, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0FF]"></span>
                      {service}
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

