'use client'

import { Phone, Clock, Users, Zap, Calendar, MessageCircle, Brain, Database } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'
import { WorkflowDiagram } from '@/components/workflow-diagram'
import { TabbedContent } from '@/components/tabbed-content'

export default function VoiceReceptionistPage() {
  const features = [
    {
      icon: Phone,
      title: 'Real-Time Voice AI',
      description: 'Natural conversation with advanced speech recognition and synthesis for human-like interactions.',
    },
    {
      icon: Zap,
      title: 'Intelligent Routing',
      description: 'Smart call routing based on caller intent, urgency, and availability of your team.',
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description: 'Automatically book appointments, send confirmations, and manage your calendar.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a call. DONNA answers every call instantly, day or night.',
    },
    {
      icon: Users,
      title: 'Multi-Language Support',
      description: 'Communicate with customers in their preferred language with real-time translation.',
    },
    {
      icon: MessageCircle,
      title: 'Call Transcription',
      description: 'Every call is transcribed and logged with key insights and action items.',
    },
  ]

  const workflowSteps = [
    {
      icon: Phone,
      title: 'Call Received',
      description: 'DONNA answers instantly',
    },
    {
      icon: Brain,
      title: 'Intent Analysis',
      description: 'Understands caller needs',
    },
    {
      icon: Database,
      title: 'KB Lookup',
      description: 'Retrieves relevant info',
    },
    {
      icon: MessageCircle,
      title: 'Response',
      description: 'Provides accurate answer',
    },
    {
      icon: Zap,
      title: 'Action',
      description: 'Routes or schedules',
    },
  ]

  const industryExamples = [
    {
      id: 'real-estate',
      label: 'Real Estate',
      content: (
        <div className="glass-panel p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-white">Real Estate Use Case</h3>
          <p className="text-gray-300 mb-6">
            A potential buyer calls asking about a property listing. DONNA:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Answers questions about the property using listing details from the knowledge base</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Schedules a showing based on agent availability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Sends confirmation email and SMS with directions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Logs the lead in your CRM with call transcript and intent</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'hospitality',
      label: 'Hospitality',
      content: (
        <div className="glass-panel p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-white">Hospitality Use Case</h3>
          <p className="text-gray-300 mb-6">
            A guest calls to make a reservation. DONNA:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Checks room availability in real-time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Provides pricing and amenity information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Processes the booking and payment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Sends confirmation with check-in details</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'healthcare',
      label: 'Health & Beauty',
      content: (
        <div className="glass-panel p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-white">Health & Beauty Use Case</h3>
          <p className="text-gray-300 mb-6">
            A client calls to book a spa appointment. DONNA:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Asks about preferred services and therapist</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Checks availability and books the appointment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Sends pre-appointment instructions and reminders</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DE0FF]">•</span>
              <span>Handles cancellations and rescheduling automatically</span>
            </li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Voice Receptionist
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Multi-modal voice operations that route, schedule, and execute with human-in-the-loop controls
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

      {/* Industry Examples */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Industry Examples</h2>
          <TabbedContent tabs={industryExamples} />
        </div>
      </section>
    </main>
  )
}

