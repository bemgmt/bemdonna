import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Use Cases',
  description: 'Discover how DONNA can transform your business operations across different use cases.',
  path: '/use-cases',
})

export default async function UseCasesPage() {
  const useCases: any[] = []

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
        {useCases.length === 0 ? (
          <div className="text-center p-12 border rounded-lg">
            <p className="text-lg text-muted-foreground">
              Use case examples coming soon.
            </p>
          </div>
        ) : (
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
        )}
      </section>
    </div>
  )
}

