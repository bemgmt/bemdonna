import type { Metadata } from 'next'
import Header from "@/components/header"
import Hero from "@/components/hero"
import Overview from "@/components/overview"
import TrustPositioning from "@/components/trust-positioning"
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
  description: 'One AI. Every industry. DONNA is the operational intelligence layer that runs workflows, communication, and decision support across your business.',
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
          answer: 'DONNA is a digital operations layer that connects to your tools, runs workflows, and coordinates communication across departments. It is infrastructure your business runs on.',
        },
        {
          question: 'Is DONNA a chatbot?',
          answer: 'No. DONNA is an AI operator that executes work inside your tools and escalates when human judgment is required.',
        },
        {
          question: 'What are DONNA\'s core operating principles?',
          answer: 'Agentic execution, human-in-the-loop governance, role-fluid deployment, tool-native control, and network-aware coordination.',
        },
        {
          question: 'What is the DONNA Network?',
          answer: 'A secure, permissioned network where DONNAs coordinate across teams, vendors, and partners to automate inter-company workflows.',
        },
        {
          question: 'Is DONNA secure?',
          answer: 'Yes. DONNA includes enterprise-grade security, SOC 2 and GDPR practices, encryption, and auditable controls.',
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
        <TrustPositioning />
        <CorePrinciples />
        <FunctionalDomains />
        <DonnaNetwork />
        <FutureVision />
        <Outcomes />
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
