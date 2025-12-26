import type { Metadata } from 'next'
import Header from "@/components/header"
import Hero from "@/components/hero"
import Overview from "@/components/overview"
import CorePrinciples from "@/components/core-principles"
import FunctionalDomains from "@/components/functional-domains"
import DonnaNetwork from "@/components/donna-network"
import FutureVision from "@/components/future-vision"
import Outcomes from "@/components/outcomes"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import UseCases from "@/components/use-cases"
import Integrations from "@/components/integrations"
import Security from "@/components/security"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import DemoForm from "@/components/demo-form"
import CTAFooter from "@/components/cta-footer"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { generatePageMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqSchema } from '@/lib/schema-markup'

export const metadata: Metadata = generatePageMetadata({
  title: 'DONNA - The Digital Operations Layer for Your Business',
  description: 'DONNA is a networked AI operations system that executes and coordinates work across all your departments, tools, and partner organizations. Not a chatbot. Not a CRM. An agentic, network-aware AI built to actually get work done.',
  path: '/',
})

export default function Home() {
  // Schema markup for the home page
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      softwareApplicationSchema({
        name: 'DONNA',
        description: 'The Digital Operations Layer for Your Business - A networked AI operations system that executes and coordinates work across departments, tools, and partner organizations.',
        features: [
          'Agentic AI Operations',
          'Network-Aware Collaboration',
          'Tool-Native Integration',
          'Role-Fluid Adaptation',
          'Human-in-the-Loop Control',
          'DONNA-to-DONNA Network',
        ],
      }),
      faqSchema([
        {
          question: 'What is DONNA?',
          answer: 'DONNA is an AI-powered digital operations system that works alongside your team. It can log into your applications, handle communications, and automate workflows – all while securely coordinating with other AI employees in a networked ecosystem. Think of DONNA as a new type of digital team member who takes on the busywork across your organization.',
        },
        {
          question: 'Is DONNA a chatbot?',
          answer: 'No. DONNA is not a chatbot, not a CRM, and not a workflow app. DONNA is a networked AI operations system built to actually get work done. It operates directly within your software tools and APIs, executing tasks autonomously while maintaining human-in-the-loop control.',
        },
        {
          question: 'What are DONNA\'s core operating principles?',
          answer: 'DONNA is built on five key principles: Agentic (reasons and takes action autonomously), Human-in-the-Loop (always keeps you in control), Role-Fluid (adapts to different departments without retraining), Tool-Native (operates directly within your software), and Network-Aware (communicates with other DONNAs across organizations).',
        },
        {
          question: 'What is the DONNA Network?',
          answer: 'The DONNA-to-DONNA Network enables AI agents from different organizations to communicate and collaborate securely. Your DONNA can discover other trusted AI assistants, exchange structured requests, and coordinate tasks directly, system-to-system, turning days of emails into instant AI-to-AI interactions.',
        },
        {
          question: 'Is DONNA secure?',
          answer: 'Yes, DONNA is built with enterprise-grade security, including SOC 2 compliance, GDPR compliance, and end-to-end encryption. All network interactions are opt-in, permission-controlled, and fully auditable.',
        },
      ]),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Overview />
        <CorePrinciples />
        <FunctionalDomains />
        <DonnaNetwork />
        <FutureVision />
        <HowItWorks />
        <UseCases />
        <Integrations />
        <Security />
        <Pricing />
        <FAQ />
        <div id="demo-form">
          <DemoForm />
        </div>
        <CTAFooter />
        <Footer />
        <Chatbot />
      </main>
    </>
  )
}
