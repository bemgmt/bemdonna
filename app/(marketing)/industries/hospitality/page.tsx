import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Hotel, Phone, Calendar, Star, CreditCard, MessageSquare } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { StatsSection } from '@/components/stats-section'

export const metadata: Metadata = generatePageMetadata({
  title: 'Hospitality AI Solutions - DONNA for Hotels & Resorts',
  description: 'DONNA automates reservations, guest services, and inquiries for hotels, resorts, and vacation rentals.',
  path: '/industries/hospitality',
})

export default function HospitalityPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Reservation Management',
      description: 'Automate bookings, check availability, and process reservations 24/7.',
    },
    {
      icon: Phone,
      title: 'Guest Services',
      description: 'Answer questions about amenities, services, and local attractions.',
    },
    {
      icon: MessageSquare,
      title: 'Concierge Assistant',
      description: 'Help guests with restaurant reservations, activities, and recommendations.',
    },
    {
      icon: Star,
      title: 'Review Management',
      description: 'Collect feedback and encourage positive reviews automatically.',
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure payment collection and deposit handling.',
    },
    {
      icon: Hotel,
      title: 'Room Information',
      description: 'Provide details on room types, rates, and availability.',
    },
  ]

  const stats = [
    { value: '40', suffix: '%', label: 'More Direct Bookings' },
    { value: '24/7', label: 'Guest Support' },
    { value: '95', suffix: '%', label: 'Guest Satisfaction' },
    { value: '60', suffix: '%', label: 'Reduced Call Volume' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA for Hospitality
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Deliver exceptional guest experiences with AI-powered automation
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
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Guest Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 'Pre-Arrival', tasks: ['Booking inquiries', 'Reservation confirmations', 'Pre-check-in info', 'Special requests'] },
              { phase: 'Check-In', tasks: ['Arrival notifications', 'Room assignments', 'Welcome messages', 'Amenity info'] },
              { phase: 'During Stay', tasks: ['Service requests', 'Concierge help', 'Dining reservations', 'Activity bookings'] },
              { phase: 'Post-Stay', tasks: ['Checkout reminders', 'Feedback collection', 'Review requests', 'Return offers'] },
            ].map((stage, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#8A2FFF]">{stage.phase}</h3>
                <ul className="space-y-2">
                  {stage.tasks.map((task, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0FF]"></span>
                      {task}
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

