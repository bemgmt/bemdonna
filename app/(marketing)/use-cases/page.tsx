import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allUseCasePagesQuery } from '@/lib/sanity/queries'

export const metadata: Metadata = generatePageMetadata({
  title: 'Use Cases',
  description: 'Discover how DONNA can transform your business operations across different use cases.',
  path: '/use-cases',
})

export default async function UseCasesPage() {
  const useCases = await sanityFetch<any[]>(allUseCasePagesQuery)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">DONNA Use Cases</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See how businesses use DONNA to automate communication and grow faster
        </p>
      </section>

      <section className="py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <Link
              key={useCase._id}
              href={`/use-cases/${useCase.slug.current}`}
              className="group p-8 border rounded-lg hover:border-primary hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {useCase.title}
              </h2>
              <p className="text-muted-foreground mb-4">{useCase.description}</p>
              <span className="text-primary font-medium">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

