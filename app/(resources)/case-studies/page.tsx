import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { TrendingUp, Download } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Case Studies - Customer Success Stories | DONNA',
  description: 'See how businesses across industries use DONNA to automate communications and drive growth. Real results, real ROI.',
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: 'Luxury Realty Group',
      industry: 'Real Estate',
      challenge: 'Missing 60% of leads due to slow response times',
      solution: 'Implemented DONNA for instant lead response and showing scheduling',
      results: [
        '5x increase in showings booked',
        '78% improvement in lead conversion',
        '$2.4M additional revenue in first year',
        '100% lead follow-up rate',
      ],
      quote: 'DONNA transformed our business. We never miss a lead now, even when we\'re showing properties.',
      author: 'Sarah Johnson, Top Producer',
      slug: 'luxury-realty-group',
    },
    {
      company: 'Premier Insurance Agency',
      industry: 'Insurance',
      challenge: 'Overwhelmed with quote requests, slow response times',
      solution: 'Automated quote collection and lead qualification with DONNA',
      results: [
        '391% increase in quote requests',
        '65% higher policy retention',
        '50% reduction in admin time',
        '<2 minute average response time',
      ],
      quote: 'The ROI was immediate. DONNA pays for itself many times over every single month.',
      author: 'Michael Chen, Agency Owner',
      slug: 'premier-insurance',
    },
    {
      company: 'Sunset Spa & Wellness',
      industry: 'Health & Beauty',
      challenge: 'High no-show rates and limited booking hours',
      solution: 'Enabled 24/7 booking and automated reminders with DONNA',
      results: [
        '80% reduction in no-shows',
        '3x more appointments booked',
        '95% client satisfaction score',
        '$180K additional annual revenue',
      ],
      quote: 'Our schedule is always full now. DONNA books appointments while we sleep.',
      author: 'Emily Rodriguez, Owner',
      slug: 'sunset-spa',
    },
    {
      company: 'Metro Property Management',
      industry: 'Property Management',
      challenge: 'Tenant support calls overwhelming small team',
      solution: 'Automated maintenance requests and tenant communications',
      results: [
        '70% fewer support calls',
        '3x faster response time',
        '50% more lease renewals',
        '24/7 tenant support coverage',
      ],
      quote: 'DONNA handles routine requests so our team can focus on complex issues. Game changer.',
      author: 'David Kim, Operations Manager',
      slug: 'metro-property',
    },
    {
      company: 'Grand Hotel & Resort',
      industry: 'Hospitality',
      challenge: 'Missing reservations during off-hours',
      solution: 'Implemented 24/7 reservation system with DONNA',
      results: [
        '40% increase in direct bookings',
        '95% guest satisfaction',
        '60% reduction in call volume',
        '$500K additional annual revenue',
      ],
      quote: 'Guests love the instant service. We capture bookings we used to lose to OTAs.',
      author: 'Lisa Martinez, General Manager',
      slug: 'grand-hotel',
    },
    {
      company: 'Downtown Chamber of Commerce',
      industry: 'Nonprofit',
      challenge: 'Limited staff for member services and events',
      solution: 'Automated member communications and event registration',
      results: [
        '60% more event registrations',
        '45% higher member retention',
        '3x volunteer engagement',
        '100% member inquiry response rate',
      ],
      quote: 'DONNA lets us serve our members like a much larger organization.',
      author: 'James Wilson, Executive Director',
      slug: 'downtown-chamber',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Case Studies
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Real businesses. Real results. Real ROI.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass-panel p-10 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-3xl font-bold text-white">{study.company}</h2>
                      <span className="px-4 py-1 bg-[#8A2FFF]/20 text-[#8A2FFF] rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#FF6B3D] mb-2">The Challenge</h3>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#3DE0FF] mb-2">The Solution</h3>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>

                    <div className="bg-black/40 p-6 rounded-xl mb-6">
                      <blockquote className="text-xl text-gray-300 italic mb-4">
                        "{study.quote}"
                      </blockquote>
                      <div className="text-[#8A2FFF] font-semibold">— {study.author}</div>
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8A2FFF] to-[#FF1F99] rounded-lg font-semibold text-white hover:scale-105 transition-transform"
                    >
                      Read Full Case Study
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#3DE0FF]" />
                      Results
                    </h3>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#3DE0FF] text-2xl font-bold">✓</span>
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 p-4 bg-gradient-to-br from-[#8A2FFF]/10 to-[#FF1F99]/10 rounded-lg border border-[#8A2FFF]/30">
                      <button className="flex items-center gap-2 text-[#8A2FFF] font-semibold hover:text-[#FF1F99] transition-colors">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

