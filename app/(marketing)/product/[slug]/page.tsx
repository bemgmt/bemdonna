import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/breadcrumb'
import { PortableText } from '@/components/portable-text'
import { generatePageMetadata } from '@/lib/metadata'
import { softwareApplicationSchema } from '@/lib/schema-markup'
import { sanityFetch } from '@/sanity/lib/client'
import { allProductPagesQuery, productPageBySlugQuery } from '@/lib/sanity/queries'

export async function generateStaticParams() {
  const products = await sanityFetch<any[]>(allProductPagesQuery)
  return products.map((product) => ({
    slug: product.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await sanityFetch<any>(productPageBySlugQuery, { slug: params.slug })
  
  if (!product) return {}

  return generatePageMetadata({
    title: product.seo?.metaTitle || product.title,
    description: product.seo?.metaDescription || product.description,
    path: `/product/${params.slug}`,
    image: product.seo?.ogImage,
  })
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await sanityFetch<any>(productPageBySlugQuery, { slug: params.slug })

  if (!product) {
    notFound()
  }

  const schema = softwareApplicationSchema({
    name: product.title,
    description: product.description,
    features: product.features?.map((f: any) => f.title) || [],
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{product.heroHeadline || product.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {product.heroDescription || product.description}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#demo-form">Start Free Trial</Link>
            </Button>
            {product.demoUrl && (
              <Button size="lg" variant="outline" asChild>
                <Link href={product.demoUrl} target="_blank">
                  Watch Demo
                </Link>
              </Button>
            )}
          </div>
        </section>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature: any, index: number) => (
                <div key={index} className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Specifications */}
        {product.technicalSpecs && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <PortableText value={product.technicalSpecs} />
            </div>
          </section>
        )}

        {/* Related Products */}
        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {product.relatedProducts.map((related: any) => (
                <Link
                  key={related._id}
                  href={`/product/${related.slug.current}`}
                  className="p-6 border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{related.title}</h3>
                  <p className="text-muted-foreground">{related.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 text-center bg-muted rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Try {product.title} free for 14 days. No credit card required.
          </p>
          <Button size="lg" asChild>
            <Link href="/#demo-form">Start Free Trial</Link>
          </Button>
        </section>
      </div>
    </>
  )
}

