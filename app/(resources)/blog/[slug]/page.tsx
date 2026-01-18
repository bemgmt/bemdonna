import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumb from '@/components/breadcrumb'

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return generatePageMetadata({
    title: `${title} - Blog | DONNA`,
    description: `Read about ${title.toLowerCase()} and operational intelligence with DONNA.`,
    path: `/blog/${params.slug}`,
  })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  return (
    <main className="min-h-screen bg-[#030314]">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        
        <section className="py-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            This article is coming soon. Check back for insights on {title.toLowerCase()} and operational intelligence.
          </p>
          
          <div className="mt-12 p-8 glass-panel rounded-xl">
            <p className="text-gray-400 mb-4">
              While you wait, explore our <a href="/blog" className="text-[#8A2FFF] hover:underline">blog</a> for the latest articles and updates.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

