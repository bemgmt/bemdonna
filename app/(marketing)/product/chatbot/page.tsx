import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { MessageSquare, Palette, Code, Zap, Users, BarChart } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'AI Chatbot - Embedded Chat Widget | DONNA',
  description: 'DONNA\'s AI Chatbot provides embedded chat widgets with lead capture, funnel logic, and white-label branding for your website.',
  path: '/product/chatbot',
})

export default function ChatbotPage() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Embedded Widget',
      description: 'Beautiful, customizable chat widget that seamlessly integrates with your website.',
    },
    {
      icon: Zap,
      title: 'Funnel Logic',
      description: 'Intelligent conversation flows that guide visitors through your sales funnel.',
    },
    {
      icon: Users,
      title: 'Lead Capture',
      description: 'Automatically collect contact information and qualify leads during conversations.',
    },
    {
      icon: Palette,
      title: 'White-Label Branding',
      description: 'Fully customizable design to match your brand colors, fonts, and style.',
    },
    {
      icon: Code,
      title: 'Easy Integration',
      description: 'Simple one-line code snippet to add DONNA to any website or platform.',
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Track conversations, conversion rates, and visitor engagement in real-time.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            AI Chatbot
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Convert website visitors into qualified leads with intelligent chat automation
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      {/* Widget Demo */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Customizable Design</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Branding Options</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#3DE0FF]">✓</span>
                  <span>Custom colors and gradients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3DE0FF]">✓</span>
                  <span>Your logo and brand assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3DE0FF]">✓</span>
                  <span>Custom fonts and typography</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3DE0FF]">✓</span>
                  <span>Position and size controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3DE0FF]">✓</span>
                  <span>Welcome message customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3DE0FF]">✓</span>
                  <span>Mobile-responsive design</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Integration Methods</h3>
              <div className="space-y-4">
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="font-bold text-[#8A2FFF] mb-2">JavaScript Snippet</div>
                  <code className="text-sm text-gray-400 block overflow-x-auto">
                    {`<script src="https://donna.ai/widget.js" 
  data-key="your-api-key">
</script>`}
                  </code>
                </div>
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="font-bold text-[#8A2FFF] mb-2">WordPress Plugin</div>
                  <p className="text-sm text-gray-400">One-click installation for WordPress sites</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="font-bold text-[#8A2FFF] mb-2">Shopify App</div>
                  <p className="text-sm text-gray-400">Native integration for e-commerce stores</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="font-bold text-[#8A2FFF] mb-2">API Integration</div>
                  <p className="text-sm text-gray-400">Full API access for custom implementations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Logic */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Intelligent Funnel Logic</h2>
          <div className="glass-panel p-8 rounded-xl">
            <p className="text-xl text-gray-300 mb-8">
              DONNA's chatbot doesn't just answer questions—it guides visitors through your sales funnel with intelligent conversation flows:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/40 p-6 rounded-lg">
                <div className="text-3xl font-bold gradient-text mb-3">1. Engage</div>
                <p className="text-gray-400">Greet visitors and identify their needs with natural conversation</p>
              </div>
              <div className="bg-black/40 p-6 rounded-lg">
                <div className="text-3xl font-bold gradient-text mb-3">2. Qualify</div>
                <p className="text-gray-400">Ask qualifying questions to understand budget, timeline, and fit</p>
              </div>
              <div className="bg-black/40 p-6 rounded-lg">
                <div className="text-3xl font-bold gradient-text mb-3">3. Convert</div>
                <p className="text-gray-400">Schedule demos, collect contact info, or route to sales team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

