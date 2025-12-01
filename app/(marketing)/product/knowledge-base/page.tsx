import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Brain, FileText, Search, Lock, GitBranch, Zap } from 'lucide-react'
import { FeatureGrid } from '@/components/feature-grid'

export const metadata: Metadata = generatePageMetadata({
  title: 'Knowledge Base - DonnaBrain AI | DONNA',
  description: 'DonnaBrain is DONNA\'s semantic reasoning engine with document ingestion, versioned KB, and intelligent search capabilities.',
  path: '/product/knowledge-base',
})

export default function KnowledgeBasePage() {
  const features = [
    {
      icon: Brain,
      title: 'Semantic Reasoning',
      description: 'Advanced AI that understands context, intent, and relationships between information.',
    },
    {
      icon: FileText,
      title: 'Document Ingestion',
      description: 'Upload PDFs, Word docs, spreadsheets, and web pages to build your knowledge base.',
    },
    {
      icon: Search,
      title: 'Intelligent Search',
      description: 'Natural language search that finds relevant information even with imprecise queries.',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Track changes, rollback updates, and maintain multiple versions of your KB.',
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Granular permissions to control who can view, edit, and manage knowledge.',
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Changes to your KB are instantly reflected across all DONNA channels.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DonnaBrain Knowledge Base
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The intelligent core that powers DONNA's understanding of your business
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">How DonnaBrain Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Document Processing</h3>
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">1.</span>
                  <span>Upload documents in any format (PDF, DOCX, TXT, HTML, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">2.</span>
                  <span>AI extracts and structures information automatically</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">3.</span>
                  <span>Content is indexed with semantic embeddings</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#3DE0FF]">4.</span>
                  <span>Knowledge becomes instantly searchable and usable</span>
                </li>
              </ol>
            </div>

            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Semantic Search</h3>
              <p className="text-gray-300 mb-4">
                Unlike traditional keyword search, DonnaBrain understands meaning and context:
              </p>
              <div className="space-y-4">
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-2">Question:</div>
                  <div className="text-white">"What's your refund policy?"</div>
                </div>
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-2">Finds:</div>
                  <div className="text-[#3DE0FF]">Money-back guarantee, return procedures, cancellation terms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Supported Content Types</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Documents', items: ['PDFs', 'Word docs', 'Text files', 'Spreadsheets'] },
              { title: 'Web Content', items: ['Website pages', 'Help articles', 'Blog posts', 'FAQs'] },
              { title: 'Structured Data', items: ['Product catalogs', 'Price lists', 'Databases', 'APIs'] },
              { title: 'Media', items: ['Video transcripts', 'Audio files', 'Images with text', 'Presentations'] },
            ].map((category, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#8A2FFF]">{category.title}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {category.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

