import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Mail, Brain, Zap, Filter, FileText, Users } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { BeforeAfter } from '@/components/before-after'

export const metadata: Metadata = generatePageMetadata({
  title: 'Email Assistant - AI Email Automation | DONNA',
  description: 'Agentic, tool-native email operations with contextual drafting, routing, and escalation.',
  path: '/product/email-assistant',
})

export default function EmailAssistantPage() {
  const features = [
    {
      icon: Brain,
      title: 'Thread-Aware Intelligence',
      description: 'Understands email context and conversation history to provide relevant, contextual responses.',
    },
    {
      icon: FileText,
      title: 'Auto-Draft Responses',
      description: 'Generates professional email drafts based on your knowledge base and communication style.',
    },
    {
      icon: Filter,
      title: 'Lead Classification',
      description: 'Automatically categorizes and prioritizes emails based on intent and urgency.',
    },
    {
      icon: Zap,
      title: 'Smart Routing',
      description: 'Routes emails to the right team member based on content and expertise.',
    },
    {
      icon: Users,
      title: 'Multi-Inbox Support',
      description: 'Manage multiple email accounts and shared inboxes from one unified interface.',
    },
    {
      icon: Brain,
      title: 'KB-Powered Reasoning',
      description: 'Pulls accurate information from your knowledge base to answer customer questions.',
    },
  ]

  const beforeItems = [
    'Hours spent manually responding to repetitive emails',
    'Missed leads due to slow response times',
    'Inconsistent messaging across team members',
    'No visibility into email performance metrics',
    'Manual sorting and prioritization of emails',
  ]

  const afterItems = [
    'Instant AI-generated draft responses for every email',
    'Immediate acknowledgment and routing of all leads',
    'Consistent, on-brand messaging powered by your KB',
    'Complete analytics on response times and conversions',
    'Automatic categorization and smart prioritization',
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Email Assistant
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Thread-aware email operations that execute, route, and escalate with human oversight
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

      {/* Before/After */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">The DONNA Difference</h2>
          <BeforeAfter before={beforeItems} after={afterItems} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">How Email Assistant Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#8A2FFF]">Incoming Email Processing</h3>
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">1.</span>
                  <span>Email arrives and is instantly analyzed for intent and urgency</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">2.</span>
                  <span>DONNA searches your knowledge base for relevant information</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">3.</span>
                  <span>AI generates a contextual draft response in your brand voice</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">4.</span>
                  <span>You review, edit if needed, and send—or let DONNA send automatically</span>
                </li>
              </ol>
            </div>

            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#8A2FFF]">Lead Classification</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="font-bold text-[#3DE0FF] mb-2">Hot Lead</div>
                  <p className="text-sm text-gray-400">Ready to buy, immediate follow-up required</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="font-bold text-[#8A2FFF] mb-2">Warm Lead</div>
                  <p className="text-sm text-gray-400">Interested, needs nurturing and information</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="font-bold text-gray-400 mb-2">Cold Lead</div>
                  <p className="text-sm text-gray-400">General inquiry, add to nurture campaign</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="font-bold text-[#FF6B3D] mb-2">Support Request</div>
                  <p className="text-sm text-gray-400">Existing customer needs assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">See It In Action</h2>
          <div className="glass-panel p-8 rounded-xl">
            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-2">Incoming Email:</div>
              <div className="bg-black/40 p-4 rounded-lg text-gray-300">
                "Hi, I'm interested in your property management services. Do you handle maintenance requests? 
                What are your fees? Can you send me more information?"
              </div>
            </div>
            <div className="mb-6">
              <div className="text-sm text-gray-400 mb-2">DONNA's Analysis:</div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-[#3DE0FF]/20 text-[#3DE0FF] rounded-full text-sm">Warm Lead</span>
                <span className="px-3 py-1 bg-[#8A2FFF]/20 text-[#8A2FFF] rounded-full text-sm">Property Management</span>
                <span className="px-3 py-1 bg-[#8A2FFF]/20 text-[#8A2FFF] rounded-full text-sm">Pricing Inquiry</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Auto-Generated Draft:</div>
              <div className="bg-black/40 p-4 rounded-lg text-gray-300">
                "Thank you for your interest in our property management services! Yes, we handle all maintenance 
                requests through our 24/7 portal and emergency hotline. Our management fee is 8% of monthly rent, 
                which includes tenant screening, rent collection, maintenance coordination, and monthly financial 
                reporting. I've attached our complete service brochure. Would you like to schedule a call to discuss 
                your specific needs?"
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

