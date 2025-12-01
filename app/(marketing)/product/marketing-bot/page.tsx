import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Target, Mail, MessageSquare, BarChart, Zap, Users } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Marketing Bot - Multi-Channel Campaigns | DONNA',
  description: 'DONNA\'s Marketing Bot automates campaigns across SMS, email, and chat with intelligent lead scoring and personalization.',
  path: '/product/marketing-bot',
})

export default function MarketingBotPage() {
  const features = [
    {
      icon: Target,
      title: 'Campaign Builder',
      description: 'Visual campaign builder with drag-and-drop automation workflows.',
    },
    {
      icon: Users,
      title: 'Lead Scoring',
      description: 'AI-powered lead scoring based on engagement, behavior, and demographics.',
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel',
      description: 'Reach customers via SMS, email, and chat from one unified platform.',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Trigger-based automation for drip campaigns, follow-ups, and nurturing.',
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Real-time campaign performance tracking with detailed metrics.',
    },
    {
      icon: Mail,
      title: 'Personalization',
      description: 'Dynamic content personalization based on customer data and behavior.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Marketing Bot
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Automate your marketing campaigns across all channels with AI-powered personalization
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Multi-Channel Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-xl">
              <MessageSquare className="w-12 h-12 text-[#3DE0FF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">SMS Campaigns</h3>
              <p className="text-gray-400 mb-4">Powered by Verizon for reliable delivery</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Two-way conversations</li>
                <li>• Automated responses</li>
                <li>• Delivery tracking</li>
                <li>• Opt-out management</li>
              </ul>
            </div>
            <div className="glass-panel p-8 rounded-xl">
              <Mail className="w-12 h-12 text-[#8A2FFF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Email Marketing</h3>
              <p className="text-gray-400 mb-4">Professional email campaigns at scale</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Beautiful templates</li>
                <li>• A/B testing</li>
                <li>• Open & click tracking</li>
                <li>• Spam score optimization</li>
              </ul>
            </div>
            <div className="glass-panel p-8 rounded-xl">
              <MessageSquare className="w-12 h-12 text-[#FF1F99] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Chat Campaigns</h3>
              <p className="text-gray-400 mb-4">Proactive chat engagement</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Behavior-triggered messages</li>
                <li>• Exit-intent popups</li>
                <li>• Personalized offers</li>
                <li>• Conversion tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Lead Scoring</h2>
          <div className="glass-panel p-8 rounded-xl">
            <p className="text-xl text-gray-300 mb-8">
              DONNA automatically scores leads based on multiple factors to help you prioritize follow-ups:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#8A2FFF]">Engagement Signals</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Email opens and clicks</li>
                  <li>• Website visit frequency</li>
                  <li>• Content downloads</li>
                  <li>• Chat interactions</li>
                  <li>• Social media engagement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#FF1F99]">Demographic Data</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Company size and industry</li>
                  <li>• Job title and seniority</li>
                  <li>• Budget indicators</li>
                  <li>• Geographic location</li>
                  <li>• Technology stack</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

