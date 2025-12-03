import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Download, ExternalLink, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'Press & Media - DONNA Newsroom',
  description: 'Latest news, press releases, and media resources for DONNA AI. Download press kit, logos, and screenshots.',
  path: '/press',
})

export default function PressPage() {
  const pressReleases = [
    {
      title: 'DONNA Raises $15M Series A to Expand AI Communication Platform',
      date: 'January 20, 2025',
      excerpt: 'Leading AI communication platform secures funding to accelerate product development and market expansion.',
      link: '/press/series-a-funding',
    },
    {
      title: 'DONNA Launches Multi-Language Support for Global Businesses',
      date: 'January 5, 2025',
      excerpt: 'Platform now supports 50+ languages with real-time translation capabilities for international communication.',
      link: '/press/multi-language-launch',
    },
    {
      title: 'DONNA Achieves SOC 2 Type II Certification',
      date: 'December 15, 2024',
      excerpt: 'Enterprise-grade security certification demonstrates commitment to data protection and privacy.',
      link: '/press/soc2-certification',
    },
    {
      title: 'DONNA Surpasses 10,000 Active Business Users',
      date: 'November 28, 2024',
      excerpt: 'Milestone reflects growing adoption of AI automation across industries and company sizes.',
      link: '/press/10k-users-milestone',
    },
  ]

  const mediaKit = [
    { name: 'Company Logo (PNG)', size: '2.4 MB', type: 'logo' },
    { name: 'Company Logo (SVG)', size: '156 KB', type: 'logo' },
    { name: 'Product Screenshots', size: '8.7 MB', type: 'screenshots' },
    { name: 'Brand Guidelines', size: '1.2 MB', type: 'guidelines' },
    { name: 'Executive Headshots', size: '5.3 MB', type: 'photos' },
    { name: 'Company Fact Sheet', size: '245 KB', type: 'document' },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Press & Media
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Latest news and media resources
          </p>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-panel p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Media Inquiries</h2>
            <p className="text-xl text-gray-300 mb-8">
              For press inquiries, interviews, or media requests, please contact our PR team:
            </p>
            <a
              href="mailto:derek@bem.studio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8A2FFF] to-[#6B4FFF] rounded-lg font-semibold text-white hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5" />
              derek@bem.studio
            </a>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Press Releases</h2>
          <div className="grid gap-6">
            {pressReleases.map((release, index) => (
              <Link key={index} href={release.link} className="block group">
                <div className="glass-panel p-8 rounded-xl hover:border-[#8A2FFF] transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-[#8A2FFF] mb-2">{release.date}</div>
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                        {release.title}
                      </h3>
                      <p className="text-gray-400">{release.excerpt}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#8A2FFF] transition-colors flex-shrink-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Media Kit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.name}</h3>
                    <div className="text-sm text-gray-400">{item.size}</div>
                  </div>
                  <button className="p-2 bg-[#8A2FFF]/20 rounded-lg hover:bg-[#8A2FFF]/30 transition-colors">
                    <Download className="w-5 h-5 text-[#8A2FFF]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#8A2FFF] to-[#6B4FFF] rounded-lg font-semibold text-white hover:scale-105 transition-transform">
              Download Complete Press Kit
            </button>
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Company Facts</h2>
          <div className="glass-panel p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#8A2FFF]">About DONNA</h3>
                <p className="text-gray-300 mb-4">
                  DONNA (Digital Office Neural Network Assistant) is an AI-powered business communication platform 
                  that automates voice, email, and chat interactions for businesses of all sizes.
                </p>
                <p className="text-gray-300">
                  Founded in 2023, DONNA serves over 10,000 businesses across real estate, hospitality, property 
                  management, insurance, and other industries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#FF1F99]">Key Metrics</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><strong className="text-white">Founded:</strong> 2023</li>
                  <li><strong className="text-white">Headquarters:</strong> San Francisco, CA</li>
                  <li><strong className="text-white">Active Users:</strong> 10,000+ businesses</li>
                  <li><strong className="text-white">Funding:</strong> $15M Series A</li>
                  <li><strong className="text-white">Team Size:</strong> 50+ employees</li>
                  <li><strong className="text-white">Certifications:</strong> SOC 2 Type II, GDPR Compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

