import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bemdonna.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/product`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/use-cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/webinars`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/downloads`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/press`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Try to fetch dynamic pages from CMS
  try {
    const { getAllBlogPosts, getAllProductPages, getAllIndustryPages, getAllUseCasePages, getAllCaseStudies } = await import('@/lib/sanity/queries')
    
    const [blogPosts, products, industries, useCases, caseStudies] = await Promise.all([
      getAllBlogPosts().catch(() => []),
      getAllProductPages().catch(() => []),
      getAllIndustryPages().catch(() => []),
      getAllUseCasePages().catch(() => []),
      getAllCaseStudies().catch(() => []),
    ])

    const dynamicPages: MetadataRoute.Sitemap = []

    // Add blog posts
    if (Array.isArray(blogPosts)) {
      blogPosts.forEach((post: any) => {
        const slug = post.slug?.current || post.slug
        if (slug) {
          dynamicPages.push({
            url: `${siteUrl}/blog/${slug}`,
            lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
          })
        }
      })
    }

    // Add product pages
    if (Array.isArray(products)) {
      products.forEach((product: any) => {
        const slug = product.slug?.current || product.slug
        if (slug) {
          dynamicPages.push({
            url: `${siteUrl}/product/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
          })
        }
      })
    }

    // Add industry pages
    if (Array.isArray(industries)) {
      industries.forEach((industry: any) => {
        const slug = industry.slug?.current || industry.slug
        if (slug) {
          dynamicPages.push({
            url: `${siteUrl}/industries/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
          })
        }
      })
    }

    // Add use case pages
    if (Array.isArray(useCases)) {
      useCases.forEach((useCase: any) => {
        const slug = useCase.slug?.current || useCase.slug
        if (slug) {
          dynamicPages.push({
            url: `${siteUrl}/use-cases/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
          })
        }
      })
    }

    // Add case studies
    if (Array.isArray(caseStudies)) {
      caseStudies.forEach((study: any) => {
        const slug = study.slug?.current || study.slug
        if (slug) {
          dynamicPages.push({
            url: `${siteUrl}/case-studies/${slug}`,
            lastModified: study.publishedAt ? new Date(study.publishedAt) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
          })
        }
      })
    }

    return [...staticPages, ...dynamicPages]
  } catch (error) {
    console.log('CMS not configured, returning static sitemap only')
    return staticPages
  }
}

