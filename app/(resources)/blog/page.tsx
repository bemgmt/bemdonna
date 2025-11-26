import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch, urlFor } from '@/sanity/lib/client'
import { allBlogPostsQuery } from '@/lib/sanity/queries'
import { Calendar, Clock, User } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Insights, tips, and best practices for AI-powered business communication.',
  path: '/blog',
})

export default async function BlogPage() {
  const posts = await sanityFetch<any[]>(allBlogPostsQuery)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">DONNA Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Insights, tips, and best practices for AI-powered business communication
        </p>
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
                    {post.categories.slice(0, 2).map((category: any) => (
                      <span
                        key={category._id}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {category.title}
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

