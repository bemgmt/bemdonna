import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch, urlFor } from '@/sanity/lib/client'
import { blogCategoriesQuery, blogPostsByCategoryQuery } from '@/lib/sanity/queries'
import { Calendar, Clock, User } from 'lucide-react'

export async function generateStaticParams() {
  const categories = await sanityFetch<any[]>(blogCategoriesQuery)
  return categories.map((category) => ({
    slug: category.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const posts = await sanityFetch<any[]>(blogPostsByCategoryQuery, { category: params.slug })
  const category = posts[0]?.categories?.find((c: any) => c.slug.current === params.slug)
  
  if (!category) return {}

  return generatePageMetadata({
    title: `${category.title} - Blog`,
    description: category.description || `Articles about ${category.title}`,
    path: `/blog/category/${params.slug}`,
  })
}

export default async function BlogCategoryPage({ params }: { params: { slug: string } }) {
  const posts = await sanityFetch<any[]>(blogPostsByCategoryQuery, { category: params.slug })

  if (posts.length === 0) {
    notFound()
  }

  const category = posts[0]?.categories?.find((c: any) => c.slug.current === params.slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{category?.title || 'Category'}</h1>
        {category?.description && (
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {category.description}
          </p>
        )}
      </section>

      <section className="py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {post.featuredImage && (
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={urlFor(post.featuredImage).width(600).height(400).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <div className="p-6">
                {post.categories && post.categories.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {post.categories.slice(0, 2).map((cat: any) => (
                      <span
                        key={cat._id}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {post.author && (
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author.name}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  {post.readingTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime} min</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

