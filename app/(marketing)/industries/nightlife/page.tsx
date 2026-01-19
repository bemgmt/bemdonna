import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Music, Users, Calendar, CreditCard, Star, MessageSquare } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { StatsSection } from '@/components/stats-section'

export const metadata: Metadata = generatePageMetadata({
  title: 'Nightlife AI Solutions - DONNA for Clubs & Entertainment',
  description: 'Nightlife AI for reservations, VIP guest lists, and event coordination across clubs and lounges.',
  path: '/industries/nightlife',
})

export default function NightlifePage() {
  const operations = [
    {
      title: 'Communications Layer',
      description: 'Capture VIP requests and event questions across SMS, chat, and phone.',
    },
    {
      title: 'Email Center',
      description: 'Automate confirmations, promotions, and deposit reminders.',
    },
    {
      title: 'Chatbot + Live Handoff',
      description: 'Handle high-volume inquiries and route high-spend guests to staff.',
    },
    {
      title: 'Knowledge Base',
      description: 'Answer questions about lineups, policies, dress code, and hours.',
    },
    {
      title: 'Lead Generation',
      description: 'Identify repeat VIPs and segment promotions by intent.',
    },
    {
      title: 'Secretary Features',
      description: 'Coordinate bookings, reminders, and door lists.',
    },
  ]
  const features = [
    {
      icon: Calendar,
      title: 'Table Reservations',
      description: 'Automate VIP table bookings, bottle service, and event reservations.',
    },
    {
      icon: Users,
      title: 'Guest List Management',
      description: 'Handle guest list submissions, confirmations, and door coordination.',
    },
    {
      icon: MessageSquare,
      title: 'Event Promotion',
      description: 'Send targeted promotions for events, special nights, and performances.',
    },
    {
      icon: CreditCard,
      title: 'Deposit Collection',
      description: 'Secure table deposits and minimum spend commitments automatically.',
    },
    {
      icon: Star,
      title: 'VIP Services',
      description: 'Provide personalized service to high-value guests and regulars.',
    },
    {
      icon: Music,
      title: 'Event Information',
      description: 'Answer questions about DJs, performers, dress code, and hours.',
    },
  ]

  const stats = [
    { value: '24/7', label: 'Reservation Availability' },
    { value: '20-30', suffix: '%', label: 'Industry No-Show Rate*' },
    { value: '10-15', suffix: '%', label: 'Reduction with Reminders**' },
    { value: '<30s', label: 'AI Response Time' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA for Nightlife
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Automate reservations, guest lists, and event coordination with human oversight
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
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Nightlife Operations Layer</h2>
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
              { type: 'Nightclubs', features: ['VIP tables', 'Bottle service', 'Guest lists', 'Event tickets'] },
              { type: 'Bars & Lounges', features: ['Reservations', 'Happy hour promos', 'Private events', 'Loyalty programs'] },
              { type: 'Entertainment Venues', features: ['Show tickets', 'VIP packages', 'Group bookings', 'Membership sales'] },
            ].map((venue, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#8A2FFF]">{venue.type}</h3>
                <ul className="space-y-3">
                  {venue.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0FF]"></span>
                      {feature}
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

