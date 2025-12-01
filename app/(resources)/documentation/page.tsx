import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Book, Code, Webhook, Plug, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'Documentation - API Reference & Developer Guides | DONNA',
  description: 'Complete API documentation, webhooks, SDKs, and developer resources for integrating DONNA into your applications.',
  path: '/documentation',
})

export default function DocumentationPage() {
  const sections = [
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete REST API documentation with endpoints, parameters, and examples',
      links: [
        { name: 'Authentication', href: '/documentation/api/authentication' },
        { name: 'Conversations', href: '/documentation/api/conversations' },
        { name: 'Knowledge Base', href: '/documentation/api/knowledge-base' },
        { name: 'Contacts', href: '/documentation/api/contacts' },
      ],
    },
    {
      icon: Webhook,
      title: 'Webhooks',
      description: 'Real-time event notifications for your application',
      links: [
        { name: 'Setup Guide', href: '/documentation/webhooks/setup' },
        { name: 'Event Types', href: '/documentation/webhooks/events' },
        { name: 'Security', href: '/documentation/webhooks/security' },
        { name: 'Examples', href: '/documentation/webhooks/examples' },
      ],
    },
    {
      icon: Plug,
      title: 'Widget Embedding',
      description: 'Add DONNA chat widget to your website or application',
      links: [
        { name: 'Quick Start', href: '/documentation/widget/quick-start' },
        { name: 'Customization', href: '/documentation/widget/customization' },
        { name: 'Events & Callbacks', href: '/documentation/widget/events' },
        { name: 'Advanced Options', href: '/documentation/widget/advanced' },
      ],
    },
    {
      icon: Zap,
      title: 'Voice Gateway',
      description: 'Integrate DONNA voice capabilities into your phone system',
      links: [
        { name: 'SIP Integration', href: '/documentation/voice/sip' },
        { name: 'Twilio Setup', href: '/documentation/voice/twilio' },
        { name: 'Call Routing', href: '/documentation/voice/routing' },
        { name: 'Voice Customization', href: '/documentation/voice/customization' },
      ],
    },
    {
      icon: Book,
      title: 'SDKs & Libraries',
      description: 'Official SDKs for popular programming languages',
      links: [
        { name: 'JavaScript/Node.js', href: '/documentation/sdks/javascript' },
        { name: 'Python', href: '/documentation/sdks/python' },
        { name: 'PHP', href: '/documentation/sdks/php' },
        { name: 'Ruby', href: '/documentation/sdks/ruby' },
      ],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Security best practices and compliance information',
      links: [
        { name: 'Authentication', href: '/documentation/security/authentication' },
        { name: 'Rate Limiting', href: '/documentation/security/rate-limiting' },
        { name: 'Data Privacy', href: '/documentation/security/privacy' },
        { name: 'Compliance', href: '/documentation/security/compliance' },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Documentation
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Everything you need to integrate and customize DONNA
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div key={index} className="glass-panel p-8 rounded-xl">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#8A2FFF] to-[#FF1F99] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{section.title}</h3>
                  <p className="text-gray-400 mb-6">{section.description}</p>
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="text-[#8A2FFF] hover:text-[#FF1F99] transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3DE0FF]"></span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Quick Start</h2>
          <div className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-white">Get Your API Key</h3>
            <ol className="space-y-4 text-gray-300 mb-8">
              <li className="flex gap-3">
                <span className="font-bold text-[#3DE0FF]">1.</span>
                <span>Log in to your DONNA dashboard</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#3DE0FF]">2.</span>
                <span>Navigate to Settings → API Keys</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#3DE0FF]">3.</span>
                <span>Click "Generate New API Key"</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#3DE0FF]">4.</span>
                <span>Copy your key and keep it secure</span>
              </li>
            </ol>

            <h3 className="text-2xl font-bold mb-4 text-white">Make Your First API Call</h3>
            <div className="bg-black/60 p-6 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">
                <pre>{`curl https://api.donna.ai/v1/conversations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, DONNA!",
    "contact_id": "contact_123"
  }'`}</pre>
              </code>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

