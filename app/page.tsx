import type { Metadata } from 'next'
import Link from 'next/link'
import Header from "@/components/header"
import Hero from "@/components/hero"
import DemoForm from "@/components/demo-form"
import CTAFooter from "@/components/cta-footer"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { generatePageMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqSchema } from '@/lib/schema-markup'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'DONNA - The Digital Operations Layer for Your Business',
  description: 'One AI. Every industry. DONNA is the operational intelligence layer that runs workflows, communication, and decision support across your business.',
  path: '/',
})

export default function Home() {
  const sections = [
    {
      title: 'Platform Foundations',
      href: '/product',
      description: 'Explore communications, tool-native execution, and core architecture.',
    },
    {
      title: 'DONNA Network',
      href: '/donna-network',
      description: 'See how DONNAs coordinate securely across teams and partner organizations.',
    },
    {
      title: 'Use Cases',
      href: '/use-cases',
      description: 'Review operational playbooks for lead response, support, scheduling, and more.',
    },
    {
      title: 'Security & Infrastructure',
      href: '/product/security-infrastructure',
      description: 'Understand governance, permissions, and infrastructure-level trust controls.',
    },
    {
      title: 'Pricing',
      href: '/pricing',
      description: 'Compare plans and choose deployment depth based on your operational needs.',
    },
    {
      title: 'About DONNA',
      href: '/about',
      description: 'Learn the mission, product philosophy, and differentiators behind DONNA.',
    },
  ]

  const homeSectionLinks = [
    { label: 'Core Operating Principles', href: '/product' },
    { label: 'Functional Domains', href: '/use-cases' },
    { label: 'DONNA Network', href: '/donna-network' },
    { label: 'Security', href: '/product/security-infrastructure' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ]

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
        <section id="explore" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-8 md:mb-12">
              <p className="text-sm uppercase tracking-[0.22em] text-indigo-300 mb-3">Explore by section</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Navigate directly to the area you need
              </h2>
              <p className="text-foreground/70 text-base md:text-lg">
                DONNA now lives across dedicated pages instead of one long landing screen.
                Use these entry points to go deeper into each operating layer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="glass-card rounded-xl p-6 border border-indigo-400/20 hover:border-indigo-300/40 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                    <ArrowRight className="h-5 w-5 text-indigo-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{section.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="linked-sections" className="pb-10 md:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto glass-card rounded-xl p-6 md:p-8 border border-indigo-400/20">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Connected section map</h3>
            <p className="text-foreground/70 mb-5 text-sm md:text-base">
              These homepage themes link to their corresponding dedicated sections.
            </p>
            <div className="flex flex-wrap gap-3">
              {homeSectionLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full text-sm border border-indigo-300/30 text-indigo-200 hover:bg-indigo-500/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
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
