import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Scissors, Calendar, Bell, Star, CreditCard, Users } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { StatsSection } from '@/components/stats-section'

export const metadata: Metadata = generatePageMetadata({
  title: 'Health & Beauty AI - DONNA for Salons & Spas',
  description: 'DONNA automates appointment booking, client communications, and reminders for salons, spas, and wellness centers.',
  path: '/industries/health-beauty',
})

export default function HealthBeautyPage() {
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
    { value: '80', suffix: '%', label: 'Fewer No-Shows' },
    { value: '3x', label: 'More Bookings' },
    { value: '24/7', label: 'Booking Availability' },
    { value: '95', suffix: '%', label: 'Client Satisfaction' },
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
            Fill your schedule and reduce no-shows with intelligent automation
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

