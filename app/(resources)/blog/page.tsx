import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { Calendar, Clock, User } from 'lucide-react'
import { getAllBlogPosts, getFeaturedBlogPosts } from '@/lib/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Insights, tips, and best practices for AI-powered business communication.',
  path: '/blog',
})

export default async function BlogPage() {
  let posts: any[] = []
  let featuredPosts: any[] = []

  try {
    posts = await getAllBlogPosts()
    featuredPosts = await getFeaturedBlogPosts()
  } catch (error) {
    console.log('CMS not configured, showing empty blog')
  }

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
        {posts.length === 0 ? (
          <div className="text-center p-12 border rounded-lg">
            <p className="text-lg text-muted-foreground">
              Blog posts coming soon.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
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
        )}
      </section>
    </div>
  )
}

