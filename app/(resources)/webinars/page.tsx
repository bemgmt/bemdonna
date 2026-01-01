import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Calendar, Clock, Users, Play } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'Webinars - Live Training & On-Demand Sessions | DONNA',
  description: 'Join live webinars or watch on-demand sessions to learn best practices for AI automation and business communication.',
  path: '/webinars',
})

export default function WebinarsPage() {
  const upcomingWebinars = [
    {
      title: 'AI Automation for Real Estate Agents',
      date: 'February 15, 2025',
      time: '2:00 PM EST',
      duration: '60 min',
      presenter: 'Sarah Johnson, Real Estate Expert',
      attendees: 247,
      description: 'Learn how top-producing agents use DONNA to respond to leads instantly and book more showings.',
    },
    {
      title: 'Maximizing ROI with Marketing Automation',
      date: 'February 22, 2025',
      time: '1:00 PM EST',
      duration: '45 min',
      presenter: 'Michael Chen, Marketing Director',
      attendees: 189,
      description: 'Discover strategies to increase conversions and reduce costs with AI-powered marketing campaigns.',
    },
    {
      title: 'Customer Support Automation Best Practices',
      date: 'March 1, 2025',
      time: '3:00 PM EST',
      duration: '60 min',
      presenter: 'Emily Rodriguez, Support Operations',
      attendees: 156,
      description: 'Build a scalable support system that delights customers while reducing costs.',
    },
  ]

  const onDemandWebinars = [
    {
      title: 'Getting Started with DONNA',
      duration: '45 min',
      views: 1247,
      date: 'January 2025',
      description: 'Complete walkthrough of DONNA setup and configuration for new users.',
    },
    {
      title: 'Advanced Workflow Automation',
      duration: '60 min',
      views: 892,
      date: 'December 2024',
      description: 'Create complex automation workflows with triggers, conditions, and multi-step sequences.',
    },
    {
      title: 'Lead Nurturing Strategies That Convert',
      duration: '50 min',
      views: 1534,
      date: 'December 2024',
      description: 'Proven tactics for nurturing leads from first contact to closed deal.',
    },
    {
      title: 'Integration Deep Dive: CRM & Calendar Sync',
      duration: '40 min',
      views: 678,
      date: 'November 2024',
      description: 'Step-by-step guide to connecting DONNA with your existing business tools.',
    },
    {
      title: 'Voice AI: The Future of Business Communication',
      duration: '55 min',
      views: 2103,
      date: 'November 2024',
      description: 'Explore how voice AI is transforming customer interactions across industries.',
    },
    {
      title: 'Analytics & Reporting Masterclass',
      duration: '45 min',
      views: 543,
      date: 'October 2024',
      description: 'Learn to track, measure, and optimize your AI automation performance.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Webinars
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Learn from experts and master AI automation
          </p>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Upcoming Live Webinars</h2>
          <div className="grid gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="glass-panel p-8 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-3xl font-bold mb-4 text-white">{webinar.title}</h3>
                    <p className="text-gray-300 mb-6">{webinar.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#3DE0FF]" />
                        {webinar.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#8A2FFF]" />
                        {webinar.time} ({webinar.duration})
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#FF1F99]" />
                        {webinar.attendees} registered
                      </div>
                    </div>
                    <div className="text-gray-400 mb-6">
                      Presented by <span className="text-[#8A2FFF] font-semibold">{webinar.presenter}</span>
                    </div>
                    <span className="inline-block px-8 py-4 bg-gradient-to-r from-[#8A2FFF]/50 to-[#6B4FFF]/50 rounded-lg font-semibold text-white/70 cursor-not-allowed">
                      Registration coming soon
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-br from-[#8A2FFF]/20 to-[#FF1F99]/20 rounded-xl p-12 text-center">
                      <Calendar className="w-20 h-20 text-white mx-auto mb-4" />
                      <div className="text-2xl font-bold text-white">{webinar.date.split(',')[0]}</div>
                      <div className="text-gray-400">{webinar.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand Webinars */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text">On-Demand Webinars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onDemandWebinars.map((webinar, index) => {
              // Webinar detail pages don't exist yet
              const hasDetailPage = false // Set to true when detail pages are created
              return (
                <div key={index} className="block group">
                  {hasDetailPage ? (
                    <Link href={`/webinars/watch/${webinar.title.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                <div className="glass-panel p-6 rounded-xl hover:border-[#8A2FFF] transition-all h-full flex flex-col">
                  <div className="bg-gradient-to-br from-[#8A2FFF]/20 to-[#FF1F99]/20 rounded-lg aspect-video flex items-center justify-center mb-4 group-hover:from-[#8A2FFF]/30 group-hover:to-[#FF1F99]/30 transition-all">
                    <Play className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow text-sm">
                    {webinar.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {webinar.views} views
                    </div>
                  </div>
                </div>
                  ) : (
                    <div className="glass-panel p-6 rounded-xl hover:border-[#8A2FFF] transition-all h-full flex flex-col">
                      <div className="bg-gradient-to-br from-[#8A2FFF]/20 to-[#FF1F99]/20 rounded-lg aspect-video flex items-center justify-center mb-4 group-hover:from-[#8A2FFF]/30 group-hover:to-[#FF1F99]/30 transition-all">
                        <Play className="w-16 h-16 text-white opacity-80" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                        {webinar.title}
                      </h3>
                      <p className="text-gray-400 mb-4 flex-grow text-sm">
                        {webinar.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {webinar.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {webinar.views} views
                        </div>
                      </div>
                      <div className="mt-4 text-xs text-gray-500 italic">
                        Coming soon
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

