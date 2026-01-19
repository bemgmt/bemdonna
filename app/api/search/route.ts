import { NextRequest, NextResponse } from 'next/server'
import { getAllProductPages, getAllIndustryPages, getAllUseCasePages } from '@/lib/sanity/queries'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q') || ''

    if (!query.trim()) {
      return NextResponse.json({ results: [] })
    }

    const searchTerm = query.toLowerCase()

    // Search across different content types
    const [productPages, industryPages, useCasePages] = await Promise.all([
      getAllProductPages().catch(() => []),
      getAllIndustryPages().catch(() => []),
      getAllUseCasePages().catch(() => []),
    ])

    const results: any[] = []

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

    // Limit results
    return NextResponse.json({ results: results.slice(0, 20) })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ results: [] }, { status: 500 })
  }
}

