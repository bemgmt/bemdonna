import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Database, FileText, Brain, ShieldCheck, GitBranch, Search } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Custom Knowledge Base - DonnaBrain Intelligence | DONNA',
  description: 'Build a custom knowledge base so DONNA can answer questions accurately with approved, up-to-date business information.',
  path: '/product/custom-knowledge-base',
})

export default function CustomKnowledgeBasePage() {
  const features = [
    {
      icon: Database,
      title: 'Structured Ingestion',
      description: 'Upload documents, FAQs, policies, and webpages so DONNA always has the right facts.',
    },
    {
      icon: Brain,
      title: 'Semantic Reasoning',
      description: 'DONNA finds the best answer based on your approved content, not random internet results.',
    },
    {
      icon: Search,
      title: 'Precision Retrieval',
      description: 'Fast search blends keyword and semantic matching to return accurate answers quickly.',
    },
    {
      icon: GitBranch,
      title: 'Versioned Knowledge',
      description: 'Track edits and approvals so teams know which version of content is live.',
    },
    {
      icon: ShieldCheck,
      title: 'Policy-Aware Responses',
      description: 'Sensitive or regulated data is protected with rules you control.',
    },
    {
      icon: FileText,
      title: 'Source Transparency',
      description: 'Show which document an answer came from to build trust and compliance.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            Custom Knowledge Base
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A simple way to keep your answers accurate, approved, and consistent across every channel.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">DonnaBrain Capabilities</h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Collect',
                description: 'Add your policies, pricing sheets, product docs, and FAQs in one place.',
              },
              {
                step: '02',
                title: 'Curate',
                description: 'Review and approve what DONNA can say, then organize it by topic.',
              },
              {
                step: '03',
                title: 'Activate',
                description: 'DONNA uses that knowledge to answer questions on phone, email, and chat.',
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
                title: 'Accurate Pricing Answers',
                description:
                  'A customer asks about pricing. DONNA answers with the latest approved rates from your pricing sheet.',
              },
              {
                title: 'Policy Questions',
                description:
                  'A client asks about refunds. DONNA cites your official refund policy and offers next steps.',
              },
              {
                title: 'Product Support',
                description:
                  'A user needs help with setup. DONNA pulls instructions from your product guide and sends the exact steps.',
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
