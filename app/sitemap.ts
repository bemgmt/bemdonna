import { MetadataRoute } from 'next'
import { sanityFetch } from '@/sanity/lib/client'
import {
  allBlogPostsQuery,
  allCaseStudiesQuery,
  allIndustryPagesQuery,
  allProductPagesQuery,
  allUseCasePagesQuery,
  allTutorialsQuery,
  allDocumentationQuery,
  allWebinarsQuery,
  careersQuery,
} from '@/lib/sanity/queries'

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

  // Fetch dynamic pages from Sanity
  const [
    blogPosts,
    caseStudies,
    industries,
    products,
    useCases,
    tutorials,
    documentation,
    webinars,
    careers,
  ] = await Promise.all([
    sanityFetch<any[]>(allBlogPostsQuery),
    sanityFetch<any[]>(allCaseStudiesQuery),
    sanityFetch<any[]>(allIndustryPagesQuery),
    sanityFetch<any[]>(allProductPagesQuery),
    sanityFetch<any[]>(allUseCasePagesQuery),
    sanityFetch<any[]>(allTutorialsQuery),
    sanityFetch<any[]>(allDocumentationQuery),
    sanityFetch<any[]>(allWebinarsQuery),
    sanityFetch<any[]>(careersQuery),
  ])

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Case studies
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteUrl}/case-studies/${study.slug.current}`,
    lastModified: new Date(study.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Industry pages
  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Product pages
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/product/${product.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Use case pages
  const useCasePages: MetadataRoute.Sitemap = useCases.map((useCase) => ({
    url: `${siteUrl}/use-cases/${useCase.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    ...staticPages,
    ...blogPages,
    ...caseStudyPages,
    ...industryPages,
    ...productPages,
    ...useCasePages,
  ]
}

