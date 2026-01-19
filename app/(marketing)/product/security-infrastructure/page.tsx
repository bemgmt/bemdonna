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

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Security &amp; Infrastructure
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Built for business security with encryption, access controls, and reliable uptime you can trust.
          </p>
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
