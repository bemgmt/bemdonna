import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Play, Clock, BookOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'Tutorials - Learn DONNA | Video Guides & How-Tos',
  description: 'Step-by-step video tutorials and guides to help you get the most out of DONNA\'s AI platform.',
  path: '/tutorials',
})

export default function TutorialsPage() {
  const tutorials = [
    {
      title: 'Getting Started with DONNA',
      description: 'Complete onboarding guide from account setup to your first automation',
      duration: '15 min',
      level: 'Beginner',
      category: 'Getting Started',
      lessons: 5,
    },
    {
      title: 'Building Your Knowledge Base',
      description: 'Learn how to upload documents and structure your DonnaBrain knowledge base',
      duration: '20 min',
      level: 'Beginner',
      category: 'Knowledge Base',
      lessons: 6,
    },
    {
      title: 'Setting Up Voice Receptionist',
      description: 'Configure your AI phone assistant with custom greetings and call routing',
      duration: '12 min',
      level: 'Intermediate',
      category: 'Voice',
      lessons: 4,
    },
    {
      title: 'Email Assistant Configuration',
      description: 'Set up automated email responses and lead classification',
      duration: '18 min',
      level: 'Intermediate',
      category: 'Email',
      lessons: 5,
    },
    {
      title: 'Chatbot Widget Customization',
      description: 'Design and embed your branded chat widget on your website',
      duration: '10 min',
      level: 'Beginner',
      category: 'Chat',
      lessons: 3,
    },
    {
      title: 'Creating Marketing Campaigns',
      description: 'Build multi-channel drip campaigns with lead scoring',
      duration: '25 min',
      level: 'Advanced',
      category: 'Marketing',
      lessons: 7,
    },
    {
      title: 'Integration Setup Guide',
      description: 'Connect DONNA to your CRM, calendar, and other business tools',
      duration: '15 min',
      level: 'Intermediate',
      category: 'Integrations',
      lessons: 4,
    },
    {
      title: 'Advanced Workflow Automation',
      description: 'Create complex automation workflows with triggers and conditions',
      duration: '30 min',
      level: 'Advanced',
      category: 'Automation',
      lessons: 8,
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track performance metrics and generate custom reports',
      duration: '12 min',
      level: 'Intermediate',
      category: 'Analytics',
      lessons: 4,
    },
  ]

  const categories = ['All', 'Getting Started', 'Knowledge Base', 'Voice', 'Email', 'Chat', 'Marketing', 'Integrations', 'Automation', 'Analytics']

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Tutorials
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Master DONNA with step-by-step video guides
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-[#8A2FFF] to-[#6B4FFF] text-white'
                    : 'glass-panel text-gray-300 hover:border-[#8A2FFF]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => {
              // Tutorial detail pages don't exist yet, so link to main tutorials page
              const tutorialSlug = tutorial.title.toLowerCase().replace(/\s+/g, '-')
              const hasDetailPage = false // Set to true when detail pages are created
              return (
                <div key={index} className="block group">
                  {hasDetailPage ? (
                    <Link href={`/tutorials/${tutorialSlug}`} className="block">
                <div className="glass-panel p-6 rounded-xl hover:border-[#8A2FFF] transition-all h-full flex flex-col">
                  <div className="bg-gradient-to-br from-[#8A2FFF]/20 to-[#FF1F99]/20 rounded-lg aspect-video flex items-center justify-center mb-4 group-hover:from-[#8A2FFF]/30 group-hover:to-[#FF1F99]/30 transition-all">
                    <Play className="w-16 h-16 text-white opacity-80" />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#8A2FFF]/20 text-[#8A2FFF] rounded-full text-xs font-semibold">
                      {tutorial.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tutorial.level === 'Beginner' ? 'bg-[#3DE0FF]/20 text-[#3DE0FF]' :
                      tutorial.level === 'Intermediate' ? 'bg-[#FF1F99]/20 text-[#FF1F99]' :
                      'bg-[#FF6B3D]/20 text-[#FF6B3D]'
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                    {tutorial.title}
                  </h3>

                  <p className="text-gray-400 mb-4 flex-grow text-sm">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {tutorial.lessons} lessons
                    </div>
                  </div>
                </div>
                    </Link>
                  ) : (
                    <div className="glass-panel p-6 rounded-xl hover:border-[#8A2FFF] transition-all h-full flex flex-col">
                      <div className="bg-gradient-to-br from-[#8A2FFF]/20 to-[#FF1F99]/20 rounded-lg aspect-video flex items-center justify-center mb-4 group-hover:from-[#8A2FFF]/30 group-hover:to-[#FF1F99]/30 transition-all">
                        <Play className="w-16 h-16 text-white opacity-80" />
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-[#8A2FFF]/20 text-[#8A2FFF] rounded-full text-xs font-semibold">
                          {tutorial.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tutorial.level === 'Beginner' ? 'bg-[#3DE0FF]/20 text-[#3DE0FF]' :
                          tutorial.level === 'Intermediate' ? 'bg-[#FF1F99]/20 text-[#FF1F99]' :
                          'bg-[#FF6B3D]/20 text-[#FF6B3D]'
                        }`}>
                          {tutorial.level}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                        {tutorial.title}
                      </h3>

                      <p className="text-gray-400 mb-4 flex-grow text-sm">
                        {tutorial.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {tutorial.lessons} lessons
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

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-panel p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#8A2FFF] to-[#6B4FFF] rounded-lg font-semibold text-white hover:scale-105 transition-transform"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

