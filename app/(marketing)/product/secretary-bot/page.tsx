import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Bot, Calendar, Clock, Users, FileText, Briefcase, Zap, Brain, Video, Mic } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { BeforeAfter } from '@/components/before-after'
import { WorkflowDiagram } from '@/components/workflow-diagram'
import { StatsSection } from '@/components/stats-section'

export const metadata: Metadata = generatePageMetadata({
  title: 'Secretary Bot - AI Executive Assistant | DONNA',
  description: 'Role-fluid executive assistant that schedules, coordinates, and executes admin workflows.',
  path: '/product/secretary-bot',
})

export default function SecretaryBotPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Calendar Management',
      description: 'Intelligent scheduling that understands availability, preferences, and priorities to optimize your calendar.',
    },
    {
      icon: Users,
      title: 'Meeting Coordination',
      description: 'Automatically finds meeting times across multiple participants and time zones with smart conflict resolution.',
    },
    {
      icon: Clock,
      title: 'Task & Reminder Management',
      description: 'Tracks deadlines, sends timely reminders, and ensures nothing falls through the cracks.',
    },
    {
      icon: FileText,
      title: 'Email Triage & Prioritization',
      description: 'Automatically sorts, prioritizes, and flags important emails so you focus on what matters most.',
    },
    {
      icon: Briefcase,
      title: 'Document Organization',
      description: 'Keeps your documents organized, searchable, and accessible with intelligent categorization.',
    },
    {
      icon: Zap,
      title: 'Travel Booking Assistance',
      description: 'Handles flight bookings, hotel reservations, and itinerary management based on your preferences.',
    },
  ]

  const workflowSteps = [
    {
      icon: Calendar,
      title: 'Request Received',
      description: 'DONNA receives scheduling request via email, chat, or voice',
    },
    {
      icon: Brain,
      title: 'Intelligent Analysis',
      description: 'Analyzes availability, preferences, and priorities',
    },
    {
      icon: Users,
      title: 'Multi-Party Coordination',
      description: 'Finds optimal time slots across all participants',
    },
    {
      icon: Zap,
      title: 'Automated Scheduling',
      description: 'Books calendar, sends confirmations, and sets reminders',
    },
    {
      icon: FileText,
      title: 'Follow-Up Management',
      description: 'Tracks action items and sends timely reminders',
    },
  ]

  const beforeItems = [
    'Manual calendar juggling and back-and-forth emails',
    'Missed meetings due to scheduling conflicts',
    'Hours spent on administrative tasks',
    'Forgotten deadlines and missed follow-ups',
    'Disorganized documents and lost information',
  ]

  const afterItems = [
    'Automated scheduling with zero back-and-forth',
    'Perfect calendar coordination across teams',
    'AI handles all administrative tasks 24/7',
    'Never miss a deadline with intelligent reminders',
    'Organized, searchable document management',
  ]

  const stats = [
    { value: '24/7', label: 'Availability' },
    { value: '<2min', label: 'AI Scheduling Time' },
    { value: '20-30', suffix: '%', label: 'Industry No-Show Rate*' },
    { value: '10-15', suffix: '%', label: 'Reduction with Reminders**' },
  ]

  return (
    <main className="min-h-screen bg-[#030314] bg-radial-glow relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Secretary Bot
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            An AI executive assistant that coordinates schedules, follows up, and executes tasks with human oversight
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <StatsSection stats={stats} />
          <p className="text-center text-sm text-gray-500 mt-6">
            *Industry standard | **Automated reminder studies
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

      {/* Workflow */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">How It Works</h2>
          <WorkflowDiagram steps={workflowSteps} />
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Transform Your Workflow</h2>
          <BeforeAfter before={beforeItems} after={afterItems} />
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

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: 'Executive Assistants',
                description: 'Free up time for strategic work by automating routine tasks',
              },
              {
                icon: Users,
                title: 'Team Leaders',
                description: 'Coordinate team meetings and manage group calendars effortlessly',
              },
              {
                icon: Calendar,
                title: 'Sales Teams',
                description: 'Automate client appointment scheduling and follow-ups',
              },
              {
                icon: FileText,
                title: 'Busy Professionals',
                description: 'Stay organized and never miss a deadline or meeting',
              },
            ].map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div key={index} className="holo-panel p-6 rounded-xl hover-lift">
                  <div className="mb-4 inline-block p-4 rounded-lg bg-gradient-to-br from-[#8A2FFF]/20 to-[#3DE0FF]/20">
                    <Icon className="w-8 h-8 text-[#3DE0FF]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="holo-panel p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Automate Your Administrative Tasks?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let DONNA handle your scheduling, reminders, and administrative work so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors text-lg font-medium"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="px-8 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 transition-colors text-lg font-medium"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

