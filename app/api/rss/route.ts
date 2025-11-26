import { NextResponse } from 'next/server'
import { sanityFetch } from '@/sanity/lib/client'
import { allBlogPostsQuery } from '@/lib/sanity/queries'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bemdonna.com'

export async function GET() {
  try {
    const posts = await sanityFetch<any[]>(allBlogPostsQuery)

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DONNA Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Latest insights on AI-powered business communication</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/api/rss" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug.current}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug.current}</guid>
      <description><![CDATA[${post.excerpt || ''}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      ${post.author ? `<author>${post.author.email || 'noreply@bemdonna.com'} (${post.author.name})</author>` : ''}
      ${post.categories ? post.categories.map((cat: any) => `<category>${cat.title}</category>`).join('\n      ') : ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

    return new NextResponse(rss, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('RSS feed error:', error)
    return new NextResponse('Error generating RSS feed', { status: 500 })
  }
}

