import { sanityFetch } from '../../sanity/lib/client'

// Blog Post Queries
export const allBlogPostsQuery = `*[_type == "blogPost" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  author->{name, photo},
  categories[]->{title, slug},
  tags,
  publishedAt,
  readTime,
  featured,
  "seo": seo {
    metaTitle,
    metaDescription,
    ogImage,
    keywords
  }
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  body,
  author->{name, role, photo, bio, linkedin, twitter},
  categories[]->{title, slug},
  tags,
  publishedAt,
  readTime,
  relatedPosts[]->{title, slug, mainImage, publishedAt},
  "seo": seo {
    metaTitle,
    metaDescription,
    ogImage,
    keywords
  }
}`

export const featuredBlogPostsQuery = `*[_type == "blogPost" && featured == true && defined(publishedAt)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readTime
}`

// Case Study Queries
export const allCaseStudiesQuery = `*[_type == "caseStudy" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  companyName,
  companyLogo,
  industry,
  excerpt,
  mainImage,
  metrics,
  publishedAt
}`

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  companyName,
  companyLogo,
  industry,
  excerpt,
  mainImage,
  challenge,
  solution,
  results,
  metrics,
  testimonials,
  productsUsed,
  publishedAt,
  "seo": seo {
    metaTitle,
    metaDescription,
    ogImage
  }
}`

// Industry Page Queries
export const allIndustryPagesQuery = `*[_type == "industryPage"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  heroImage
}`

export const industryPageBySlugQuery = `*[_type == "industryPage" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  heroImage,
  intro,
  workflows,
  scenarios,
  compliance,
  "seo": seo {
    metaTitle,
    metaDescription,
    ogImage
  }
}`

// Product Page Queries
export const allProductPagesQuery = `*[_type == "productPage"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  heroImage
}`

export const productPageBySlugQuery = `*[_type == "productPage" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  heroImage,
  features,
  demoType,
  demoUrl,
  workflow,
  "seo": seo {
    metaTitle,
    metaDescription,
    ogImage
  }
}`

// Use Case Page Queries
export const allUseCasePagesQuery = `*[_type == "useCasePage"] | order(title asc) {
  _id,
  title,
  slug
}`

export const useCasePageBySlugQuery = `*[_type == "useCasePage" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  painPoint,
  beforeMetrics,
  afterMetrics,
  workflow,
  roiMetrics,
  "seo": seo {
    metaTitle,
    metaDescription,
    ogImage
  }
}`

// Tutorial Queries
export const allTutorialsQuery = `*[_type == "tutorial" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  category,
  difficulty,
  duration,
  videoUrl,
  publishedAt
}`

export const tutorialBySlugQuery = `*[_type == "tutorial" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  category,
  difficulty,
  duration,
  videoUrl,
  prerequisites,
  steps,
  publishedAt
}`

// Documentation Queries
export const allDocumentationQuery = `*[_type == "documentation"] | order(order asc, title asc) {
  _id,
  title,
  slug,
  description,
  category,
  order
}`

export const documentationBySlugQuery = `*[_type == "documentation" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  category,
  body,
  order
}`

// Webinar Queries
export const allWebinarsQuery = `*[_type == "webinar"] | order(startDate desc) {
  _id,
  title,
  slug,
  description,
  type,
  startDate,
  duration,
  thumbnail,
  videoUrl
}`

export const webinarBySlugQuery = `*[_type == "webinar" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  type,
  startDate,
  duration,
  speakers,
  videoUrl,
  thumbnail,
  topics
}`

// Team Member Queries
export const teamMembersQuery = `*[_type == "teamMember"] | order(name asc) {
  _id,
  name,
  role,
  bio,
  photo,
  email,
  linkedin,
  twitter
}`

// Career Queries
export const careersQuery = `*[_type == "career" && defined(datePosted)] | order(datePosted desc) {
  _id,
  title,
  slug,
  department,
  location,
  employmentType,
  datePosted
}`

export const careerBySlugQuery = `*[_type == "career" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  department,
  location,
  employmentType,
  description,
  responsibilities,
  requirements,
  niceToHave,
  datePosted,
  applicationUrl
}`

// Testimonial Queries
export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  quote,
  author,
  role,
  company,
  companyLogo,
  photo,
  rating,
  industry,
  featured
}`

// Integration Queries
export const integrationsQuery = `*[_type == "integration"] | order(name asc) {
  _id,
  name,
  logo,
  category,
  description,
  url
}`

// FAQ Queries
export const faqItemsQuery = `*[_type == "faqItem"] | order(order asc, category asc) {
  _id,
  question,
  answer,
  category,
  order
}`

export const faqItemsByCategoryQuery = `*[_type == "faqItem" && category == $category] | order(order asc) {
  _id,
  question,
  answer,
  category,
  order
}`

// Site Settings Query
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  title,
  description,
  logo,
  ogImage
}`

// Helper functions to fetch data
export async function getAllBlogPosts() {
  return sanityFetch({ query: allBlogPostsQuery })
}

export async function getBlogPostBySlug(slug: string) {
  return sanityFetch({ query: blogPostBySlugQuery, params: { slug } })
}

export async function getFeaturedBlogPosts() {
  return sanityFetch({ query: featuredBlogPostsQuery })
}

export async function getAllCaseStudies() {
  return sanityFetch({ query: allCaseStudiesQuery })
}

export async function getCaseStudyBySlug(slug: string) {
  return sanityFetch({ query: caseStudyBySlugQuery, params: { slug } })
}

export async function getAllIndustryPages() {
  return sanityFetch({ query: allIndustryPagesQuery })
}

export async function getIndustryPageBySlug(slug: string) {
  return sanityFetch({ query: industryPageBySlugQuery, params: { slug } })
}

export async function getAllProductPages() {
  return sanityFetch({ query: allProductPagesQuery })
}

export async function getProductPageBySlug(slug: string) {
  return sanityFetch({ query: productPageBySlugQuery, params: { slug } })
}

export async function getAllUseCasePages() {
  return sanityFetch({ query: allUseCasePagesQuery })
}

export async function getUseCasePageBySlug(slug: string) {
  return sanityFetch({ query: useCasePageBySlugQuery, params: { slug } })
}

export async function getAllTutorials() {
  return sanityFetch({ query: allTutorialsQuery })
}

export async function getTutorialBySlug(slug: string) {
  return sanityFetch({ query: tutorialBySlugQuery, params: { slug } })
}

export async function getAllDocumentation() {
  return sanityFetch({ query: allDocumentationQuery })
}

export async function getDocumentationBySlug(slug: string) {
  return sanityFetch({ query: documentationBySlugQuery, params: { slug } })
}

export async function getAllWebinars() {
  return sanityFetch({ query: allWebinarsQuery })
}

export async function getWebinarBySlug(slug: string) {
  return sanityFetch({ query: webinarBySlugQuery, params: { slug } })
}

export async function getTeamMembers() {
  return sanityFetch({ query: teamMembersQuery })
}

export async function getAllCareers() {
  return sanityFetch({ query: careersQuery })
}

export async function getCareerBySlug(slug: string) {
  return sanityFetch({ query: careerBySlugQuery, params: { slug } })
}

export async function getTestimonials() {
  return sanityFetch({ query: testimonialsQuery })
}

export async function getIntegrations() {
  return sanityFetch({ query: integrationsQuery })
}

export async function getFAQItems(category?: string) {
  if (category) {
    return sanityFetch({ query: faqItemsByCategoryQuery, params: { category } })
  }
  return sanityFetch({ query: faqItemsQuery })
}

export async function getSiteSettings() {
  return sanityFetch({ query: siteSettingsQuery })
}

