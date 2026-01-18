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
  description: 'Insights on operational intelligence, agentic workflows, and AI-driven business execution.',
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
          Insights on operational intelligence, workflows, and AI execution
        </p>
      </section>

      <section className="py-12">
        {/* Featured Blog Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
          <Link
            href="/blog/the-real-ai-revolution-isnt-what-you-think"
            className="group block glass-card p-8 rounded-xl hover:border-accent/50 transition-all"
          >
            <div className="flex gap-2 mb-3">
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">AI</span>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Future of Work</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
              The Real AI Revolution Isn't What You Think: 5 Surprising Truths About the Future of Work
            </h3>
            <p className="text-foreground/70 mb-4">
              The most profound changes are happening at a systemic level, where AI assistants start working with each other. This is not just about making one business smarter; it's about creating an intelligent, interconnected economic fabric.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground/60">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
            </div>
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center p-12 border rounded-lg bg-foreground/5">
            <h2 className="text-2xl font-bold mb-4">More Content Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're preparing more insightful articles about AI-powered business operations, network collaboration, and best practices for implementing DONNA in your organization.
            </p>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter to be notified when new content is published.
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

