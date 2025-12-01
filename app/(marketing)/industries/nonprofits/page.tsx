import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Heart, Users, Calendar, DollarSign, Mail, Phone } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { StatsSection } from '@/components/stats-section'

export const metadata: Metadata = generatePageMetadata({
  title: 'Nonprofit AI Solutions - DONNA for Nonprofits & Chambers',
  description: 'DONNA helps nonprofits and chambers of commerce automate member communications, event registration, and donor outreach.',
  path: '/industries/nonprofits',
})

export default function NonprofitsPage() {
  const features = [
    {
      icon: Users,
      title: 'Member Management',
      description: 'Automate member inquiries, renewals, and engagement communications.',
    },
    {
      icon: Calendar,
      title: 'Event Registration',
      description: 'Handle event RSVPs, ticket sales, and attendee communications.',
    },
    {
      icon: DollarSign,
      title: 'Donor Outreach',
      description: 'Nurture donor relationships with personalized communication campaigns.',
    },
    {
      icon: Phone,
      title: 'Volunteer Coordination',
      description: 'Recruit, schedule, and communicate with volunteers automatically.',
    },
    {
      icon: Mail,
      title: 'Newsletter Automation',
      description: 'Send updates, announcements, and impact stories to your community.',
    },
    {
      icon: Heart,
      title: 'Impact Reporting',
      description: 'Share success stories and impact metrics with stakeholders.',
    },
  ]

  const stats = [
    { value: '60', suffix: '%', label: 'More Event Registrations' },
    { value: '45', suffix: '%', label: 'Higher Member Retention' },
    { value: '24/7', label: 'Member Support' },
    { value: '3x', label: 'Volunteer Engagement' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA for Nonprofits & Chambers
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Amplify your impact with AI-powered member and donor engagement
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
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: 'Chambers of Commerce',
                uses: ['Member onboarding', 'Event management', 'Business directory', 'Networking coordination'],
              },
              {
                type: 'Nonprofit Organizations',
                uses: ['Donor cultivation', 'Volunteer management', 'Program registration', 'Impact reporting'],
              },
              {
                type: 'Professional Associations',
                uses: ['Member services', 'Certification tracking', 'Conference registration', 'Continuing education'],
              },
              {
                type: 'Community Organizations',
                uses: ['Event planning', 'Volunteer recruitment', 'Community outreach', 'Program enrollment'],
              },
            ].map((org, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#8A2FFF]">{org.type}</h3>
                <ul className="space-y-3">
                  {org.uses.map((use, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0FF]"></span>
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

