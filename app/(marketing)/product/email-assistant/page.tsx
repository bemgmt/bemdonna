import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Mail, Brain, Zap, Filter, FileText, Users, Video, Mic } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { BeforeAfter } from '@/components/before-after'

export const metadata: Metadata = generatePageMetadata({
  title: 'Email Assistant - AI Email Automation | DONNA',
  description: 'DONNA\'s Email Assistant provides thread-aware automation, intelligent lead classification, and auto-draft responses powered by your knowledge base.',
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
            Transform your inbox into a lead-generating machine with AI-powered email automation
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

      {/* Meeting Integration - Major Differentiator */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-lg bg-gradient-to-br from-[#8A2FFF]/20 to-[#3DE0FF]/20 mb-6">
              <Video className="w-12 h-12 text-[#3DE0FF]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Real-Time Meeting Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A game-changing feature that sets DONNA apart from every competitor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="holo-panel p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#8A2FFF] to-[#6B4FFF] flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">"Hey Donna" Activation</h3>
                  <p className="text-gray-400">Simple voice activation in any meeting</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                DONNA seamlessly joins your video meetings (Zoom, Teams, Google Meet, etc.) and sits quietly in the background, 
                ready to assist whenever you need her. Simply say <strong className="text-[#8A2FFF]">"Hey Donna"</strong> and 
                she instantly activates, ready to answer questions, provide information, or assist with any task.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#3DE0FF] font-bold mt-1">✓</span>
                  <span className="text-gray-300">Works in any video conferencing platform</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#3DE0FF] font-bold mt-1">✓</span>
                  <span className="text-gray-300">Real-time voice interaction with meeting participants</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#3DE0FF] font-bold mt-1">✓</span>
                  <span className="text-gray-300">Accesses your knowledge base instantly</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#3DE0FF] font-bold mt-1">✓</span>
                  <span className="text-gray-300">Answers questions live during presentations and demos</span>
                </div>
              </div>
            </div>

            <div className="holo-panel p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#3DE0FF] to-[#8A2FFF] flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Live Meeting Assistant</h3>
                  <p className="text-gray-400">Intelligent real-time support</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                During client meetings, sales calls, or team presentations, DONNA can instantly answer questions from 
                participants, pull up relevant information from your knowledge base, provide pricing details, explain 
                features, or clarify any aspect of your business—all in real-time, without interrupting the flow of conversation.
              </p>
              <div className="bg-gradient-to-br from-[#8A2FFF]/10 to-[#3DE0FF]/10 p-6 rounded-lg border border-[#8A2FFF]/30">
                <h4 className="font-bold text-[#3DE0FF] mb-3">Example Use Cases:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Client asks about pricing → "Hey Donna, what's our enterprise pricing?"</li>
                  <li>• Prospect needs feature details → "Hey Donna, explain our API integration"</li>
                  <li>• Team member needs data → "Hey Donna, what were last month's conversion rates?"</li>
                  <li>• Customer support question → "Hey Donna, what's our refund policy?"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#8A2FFF]">Why This Sets DONNA Apart</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              No other AI assistant can join your meetings and interact with participants in real-time. While competitors 
              require you to leave the meeting to get information, DONNA is right there with you, ready to assist instantly. 
              This creates a seamless, professional experience that impresses clients and accelerates decision-making.
            </p>
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

