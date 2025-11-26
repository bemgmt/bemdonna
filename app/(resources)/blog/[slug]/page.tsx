import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { PortableText } from '@/components/portable-text'
import { SocialShare } from '@/components/social-share'
import { generatePageMetadata } from '@/lib/metadata'
import { articleSchema } from '@/lib/schema-markup'
import { sanityFetch, urlFor } from '@/sanity/lib/client'
import { allBlogPostsQuery, blogPostBySlugQuery } from '@/lib/sanity/queries'
import { Calendar, Clock, User } from 'lucide-react'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bemdonna.com'

export async function generateStaticParams() {
  const posts = await sanityFetch<any[]>(allBlogPostsQuery)
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await sanityFetch<any>(blogPostBySlugQuery, { slug: params.slug })
  
  if (!post) return {}

  return generatePageMetadata({
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    path: `/blog/${params.slug}`,
    image: post.seo?.ogImage || post.featuredImage,
  })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await sanityFetch<any>(blogPostBySlugQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  const postUrl = `${siteUrl}/blog/${params.slug}`
  
  const schema = articleSchema({
    title: post.title,
    description: post.excerpt,
    publishedAt: post.publishedAt,
    modifiedAt: post._updatedAt,
    author: post.author?.name || 'DONNA Team',
    image: post.featuredImage ? urlFor(post.featuredImage).url() : undefined,
    url: postUrl,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            {post.categories && post.categories.length > 0 && (
              <div className="flex gap-2 mb-4">
                {post.categories.map((category: any) => (
                  <Link
                    key={category._id}
                    href={`/blog/category/${category.slug.current}`}
                    className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            )}

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              )}
            </div>

            {post.featuredImage && (
              <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
                <Image
                  src={urlFor(post.featuredImage).width(1200).height(675).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <PortableText value={post.body} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span key={tag} className="text-sm px-3 py-1 bg-muted rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share */}
          <div className="border-t pt-8 mb-12">
            <SocialShare url={postUrl} title={post.title} description={post.excerpt} />
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <section className="border-t pt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {post.relatedPosts.map((related: any) => (
                  <Link
                    key={related._id}
                    href={`/blog/${related.slug.current}`}
                    className="p-6 border rounded-lg hover:border-primary transition-colors"
                  >
                    <h3 className="text-lg font-semibold mb-2">{related.title}</h3>
                    <p className="text-muted-foreground text-sm">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </>
  )
}

