import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Shield, Lock, Eye, FileCheck, Server, AlertTriangle } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Security & Compliance - Enterprise-Grade Protection | DONNA',
  description: 'DONNA provides SOC 2 compliant security with end-to-end encryption, GDPR compliance, and enterprise-grade data protection.',
  path: '/product/security',
})

export default function SecurityPage() {
  const features = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256).',
    },
    {
      icon: Shield,
      title: 'SOC 2 Type II',
      description: 'Independently audited and certified for security, availability, and confidentiality.',
    },
    {
      icon: Eye,
      title: 'Privacy First',
      description: 'We never train AI models on your data. Your information stays yours.',
    },
    {
      icon: FileCheck,
      title: 'GDPR Compliant',
      description: 'Full compliance with GDPR, CCPA, and other privacy regulations.',
    },
    {
      icon: Server,
      title: 'Data Residency',
      description: 'Choose where your data is stored with regional data centers.',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: '24/7 security monitoring with rapid incident response protocols.',
    },
  ]

  const complianceStandards = [
    'SOC 2 Type II',
    'GDPR',
    'CCPA',
    'HIPAA (Healthcare)',
    'PCI DSS (Payments)',
    'ISO 27001',
    'FERPA (Education)',
    'GLBA (Financial)',
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Security & Compliance
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Enterprise-grade security and privacy protection for your business
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Security Features</h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Data Protection</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Encryption</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#3DE0FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">In Transit</div>
                    <div className="text-sm text-gray-400">TLS 1.3 encryption for all data transmission</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#3DE0FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">At Rest</div>
                    <div className="text-sm text-gray-400">AES-256 encryption for stored data</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#3DE0FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Key Management</div>
                    <div className="text-sm text-gray-400">AWS KMS for secure key storage and rotation</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Access Control</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#8A2FFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Role-Based Access</div>
                    <div className="text-sm text-gray-400">Granular permissions for team members</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#8A2FFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Multi-Factor Auth</div>
                    <div className="text-sm text-gray-400">Required for all user accounts</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#8A2FFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">SSO Integration</div>
                    <div className="text-sm text-gray-400">SAML 2.0 for enterprise authentication</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Compliance Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl text-center">
                <FileCheck className="w-10 h-10 text-[#3DE0FF] mx-auto mb-3" />
                <div className="font-bold text-white">{standard}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Privacy Commitment</h2>
          <div className="glass-panel p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="space-y-6 text-gray-300 text-lg">
              <p className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-[#3DE0FF] flex-shrink-0 mt-1" />
                <span><strong className="text-white">No Training on Your Data:</strong> We never use your business data, conversations, or documents to train our AI models.</span>
              </p>
              <p className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-[#3DE0FF] flex-shrink-0 mt-1" />
                <span><strong className="text-white">Data Ownership:</strong> You own your data. You can export or delete it at any time.</span>
              </p>
              <p className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-[#3DE0FF] flex-shrink-0 mt-1" />
                <span><strong className="text-white">Transparency:</strong> Clear documentation of how we collect, use, and protect your information.</span>
              </p>
              <p className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-[#3DE0FF] flex-shrink-0 mt-1" />
                <span><strong className="text-white">Right to be Forgotten:</strong> Full GDPR compliance including data deletion requests.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

