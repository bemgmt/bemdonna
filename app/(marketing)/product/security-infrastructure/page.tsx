import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Shield, Lock, Server, Activity, FileCheck, Users } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Security & Infrastructure - Enterprise Controls | DONNA',
  description: 'Security and infrastructure built for business: encrypted data, access controls, monitoring, and reliable uptime.',
  path: '/product/security-infrastructure',
})

export default function SecurityInfrastructurePage() {
  const safeguards = [
    {
      icon: Shield,
      title: 'Encryption Everywhere',
      description: 'All data is encrypted so customer details are protected in transit and at rest.',
    },
    {
      icon: Lock,
      title: 'Access Controls',
      description: 'Control who can see and approve messages with role-based access and audit logs.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Ready',
      description: 'Support for data retention, policy controls, and regulated workflows.',
    },
    {
      icon: Activity,
      title: 'Monitoring & Alerts',
      description: 'Live monitoring and alerts keep teams informed if anything unusual happens.',
    },
    {
      icon: Server,
      title: 'Resilient Infrastructure',
      description: 'Reliable infrastructure keeps DONNA available for always-on customer support.',
    },
    {
      icon: Users,
      title: 'Privacy Controls',
      description: 'Redact sensitive information and limit what DONNA can share.',
    },
  ]

  const securityLayerFeatures = [
    "PII Detection",
    "Credential Blocking",
    "MNPI Protection",
    "Code Scanning",
    "Audit Logging",
    "<50ms Latency",
  ]

  return (
    <main className="min-h-screen bg-black">
      {/* Security Layer hero - DONNA-DEMO block */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-[1000px] text-center">
          <p className="text-xs font-semibold text-[#34D399] uppercase tracking-widest mb-6">
            The Security Layer
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[rgba(6,182,212,0.15)] to-[rgba(6,182,212,0.08)] border-2 border-[#06B6D4] px-6 py-3 rounded-full text-sm font-semibold text-[#22d3ee] mb-6">
            Built-in, not bolted on
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            All This Power.
            <br />
            <span className="text-[#22d3ee]">Completely Protected.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every interaction scanned. Every risk blocked. Every action logged.
            <br className="hidden sm:block" />
            Enterprise security that&apos;s invisible to your team.
          </p>

          <div className="mb-10">
            <div className="w-[200px] h-[200px] mx-auto rounded-full bg-gradient-to-br from-slate-900 to-slate-800 border-4 border-[#06B6D4] flex flex-col items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.25)] animate-shield-pulse">
              <svg viewBox="0 0 48 48" width={56} height={56} fill="none" stroke="currentColor" strokeWidth={1.5} className="text-[#22d3ee] mb-2">
                <path d="M24 4L6 12v12c0 11 7 21 18 24 11-3 18-13 18-24V12L24 4z" />
              </svg>
              <span className="text-sm font-bold text-[#22d3ee] uppercase tracking-wider">Protected</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {securityLayerFeatures.map((feature) => (
              <div
                key={feature}
                className="px-5 py-3 rounded-lg bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.3)] text-sm font-medium text-[#22d3ee]"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Security Safeguards</h2>
          <FeatureGrid features={safeguards} columns={3} />
        </div>
      </section>

      {/* Infrastructure Principles */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Infrastructure Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Reliability First',
                description: 'Redundancy and failover keep DONNA online even during outages.',
              },
              {
                step: '02',
                title: 'Compliance Built-In',
                description: 'Audit logs and retention rules are built in to meet compliance needs.',
              },
              {
                step: '03',
                title: 'Secure by Design',
                description: 'Security reviews and monitoring are part of everyday operations.',
              },
            ].map((item) => (
              <div key={item.step} className="glass-panel p-8 rounded-xl">
                <div className="text-6xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Practical Examples</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Secure Customer Data',
                description:
                  'A caller shares personal details. DONNA encrypts the data and limits access to approved staff.',
              },
              {
                title: 'Audit-Ready Logs',
                description:
                  'A manager needs a record of responses. DONNA provides a full audit trail of every interaction.',
              },
              {
                title: 'Always-On Support',
                description:
                  'Your team is offline overnight. DONNA stays available to answer questions and log requests.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-panel p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
