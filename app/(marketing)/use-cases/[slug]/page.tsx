import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/breadcrumb'

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return generatePageMetadata({
    title: `${title} - Use Case | DONNA`,
    description: `See how DONNA executes ${title.toLowerCase()} workflows with agentic, tool-native control.`,
    path: `/use-cases/${params.slug}`,
  })
}

export default async function UseCaseDetailPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  return (
    <main className="min-h-screen bg-[#030314]">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        
        <section className="py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            A real-world workflow powered by DONNA’s operational intelligence and human-in-the-loop governance.
          </p>
          
          <div className="mt-12 p-8 glass-panel rounded-xl">
            <p className="text-gray-400">
              We’re expanding detailed playbooks for {title}. Visit our <a href="/use-cases" className="text-[#8A2FFF] hover:underline">use cases page</a> to see how DONNA adapts across roles and teams.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

