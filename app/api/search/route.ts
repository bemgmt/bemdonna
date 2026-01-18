import { NextRequest, NextResponse } from 'next/server'
import { getAllBlogPosts, getAllProductPages, getAllIndustryPages, getAllUseCasePages, getAllDocumentation } from '@/lib/sanity/queries'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q') || ''

    if (!query.trim()) {
      return NextResponse.json({ results: [] })
    }

    const searchTerm = query.toLowerCase()

    // Search across different content types
    const [blogPosts, productPages, industryPages, useCasePages, docs] = await Promise.all([
      getAllBlogPosts().catch(() => []),
      getAllProductPages().catch(() => []),
      getAllIndustryPages().catch(() => []),
      getAllUseCasePages().catch(() => []),
      getAllDocumentation().catch(() => []),
    ])

    const results: any[] = []

    // Search blog posts
    if (Array.isArray(blogPosts)) {
      blogPosts.forEach((post: any) => {
        if (
          post.title?.toLowerCase().includes(searchTerm) ||
          post.excerpt?.toLowerCase().includes(searchTerm) ||
          post.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm))
        ) {
          results.push({
            type: 'Blog Post',
            title: post.title,
            description: post.excerpt,
            url: `/blog/${post.slug?.current || post.slug}`,
          })
        }
      })
    }

    // Search product pages
    if (Array.isArray(productPages)) {
      productPages.forEach((page: any) => {
        if (
          page.title?.toLowerCase().includes(searchTerm) ||
          page.description?.toLowerCase().includes(searchTerm)
        ) {
          results.push({
            type: 'Product',
            title: page.title,
            description: page.description,
            url: `/product/${page.slug?.current || page.slug}`,
          })
        }
      })
    }

    // Search industry pages
    if (Array.isArray(industryPages)) {
      industryPages.forEach((page: any) => {
        if (
          page.title?.toLowerCase().includes(searchTerm) ||
          page.description?.toLowerCase().includes(searchTerm)
        ) {
          results.push({
            type: 'Industry',
            title: page.title,
            description: page.description,
            url: `/industries/${page.slug?.current || page.slug}`,
          })
        }
      })
    }

    // Search use case pages
    if (Array.isArray(useCasePages)) {
      useCasePages.forEach((page: any) => {
        if (page.title?.toLowerCase().includes(searchTerm)) {
          results.push({
            type: 'Use Case',
            title: page.title,
            description: '',
            url: `/use-cases/${page.slug?.current || page.slug}`,
          })
        }
      })
    }

    // Search documentation
    if (Array.isArray(docs)) {
      docs.forEach((doc: any) => {
        if (
          doc.title?.toLowerCase().includes(searchTerm) ||
          doc.description?.toLowerCase().includes(searchTerm)
        ) {
          results.push({
            type: 'Documentation',
            title: doc.title,
            description: doc.description,
            url: `/documentation/${doc.slug?.current || doc.slug}`,
          })
        }
      })
    }

    // Limit results
    return NextResponse.json({ results: results.slice(0, 20) })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ results: [] }, { status: 500 })
  }
}

