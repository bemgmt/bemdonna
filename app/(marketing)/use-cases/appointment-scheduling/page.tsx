import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Calendar, Clock, Bell, CheckCircle } from 'lucide-react'
import { BeforeAfter } from '@/components/before-after'
import { StatsSection } from '@/components/stats-section'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Appointment Scheduling Automation - AI Booking | DONNA',
  description: 'Agentic scheduling across channels with confirmations, reminders, and escalation.',
  path: '/use-cases/appointment-scheduling',
})

export default function AppointmentSchedulingPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI checks availability and books appointments based on your calendar and preferences.',
    },
    {
      icon: Bell,
      title: 'Auto Reminders',
      description: 'Automated SMS and email reminders reduce no-shows by up to 80%.',
    },
    {
      icon: Clock,
      title: 'Rescheduling',
      description: 'Customers can reschedule or cancel appointments without calling your office.',
    },
    {
      icon: CheckCircle,
      title: 'Confirmations',
      description: 'Instant booking confirmations sent via email and SMS with calendar invites.',
    },
  ]

  const beforeItems = [
    'Phone tag wastes time for staff and customers',
    'Double bookings and scheduling conflicts',
    'High no-show rates hurt revenue',
    'After-hours calls go to voicemail',
    'Manual calendar management is error-prone',
  ]

  const afterItems = [
    'Customers book instantly via phone, chat, or web',
    'Real-time calendar sync prevents conflicts',
    'Automated reminders reduce no-shows by 80%',
    '24/7 booking availability increases appointments',
    'AI manages your calendar automatically',
  ]

  const stats = [
    { value: '24/7', label: 'Booking Availability' },
    { value: '20-30', suffix: '%', label: 'Industry No-Show Rate*' },
    { value: '10-15', suffix: '%', label: 'Reduction with Reminders**' },
    { value: '<30s', label: 'Average Booking Time' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Appointment Scheduling
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Schedule across channels with human-in-the-loop approvals when needed
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

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
          <FeatureGrid features={features} columns={4} />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">The Difference</h2>
          <BeforeAfter before={beforeItems} after={afterItems} />
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Healthcare',
                uses: ['Patient appointments', 'Consultation bookings', 'Follow-up scheduling', 'Telehealth sessions'],
              },
              {
                industry: 'Real Estate',
                uses: ['Property showings', 'Client consultations', 'Open house RSVPs', 'Inspection scheduling'],
              },
              {
                industry: 'Services',
                uses: ['Salon appointments', 'Spa bookings', 'Fitness classes', 'Consultation calls'],
              },
            ].map((item, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#8A2FFF]">{item.industry}</h3>
                <ul className="space-y-3">
                  {item.uses.map((use, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#3DE0FF] flex-shrink-0" />
                      {use}
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

