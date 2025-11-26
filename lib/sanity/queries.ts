// Blog Posts
export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    featured,
    author->{name, slug, photo},
    categories[]->{title, slug},
    tags
  }
`

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    publishedAt,
    readTime,
    featured,
    author->{name, slug, title, photo, bio},
    categories[]->{title, slug},
    tags,
    relatedPosts[]->{title, slug, excerpt, mainImage, publishedAt},
    seo
  }
`

export const featuredBlogPostsQuery = `
  *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    author->{name, slug, photo}
  }
`

export const blogCategoriesQuery = `
  *[_type == "blogCategory"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    "postCount": count(*[_type == "blogPost" && references(^._id)])
  }
`

// Case Studies
export const allCaseStudiesQuery = `
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    companyName,
    companyLogo,
    headline,
    excerpt,
    industry->{title, slug},
    metrics,
    publishedAt
  }
`

export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    companyName,
    companyLogo,
    industry->{title, slug},
    headline,
    excerpt,
    challenge,
    solution,
    results,
    metrics,
    testimonial->{name, title, company, quote, photo},
    publishedAt,
    seo
  }
`

// Industry Pages
export const allIndustryPagesQuery = `
  *[_type == "industryPage"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    icon,
    heroImage
  }
`

export const industryPageBySlugQuery = `
  *[_type == "industryPage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    heroImage,
    introduction,
    painPoints,
    workflows,
    complianceNotes,
    caseStudies[]->{title, slug, companyName, companyLogo, headline, metrics},
    seo
  }
`

// Product Pages
export const allProductPagesQuery = `
  *[_type == "productPage"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    icon
  }
`

export const productPageBySlugQuery = `
  *[_type == "productPage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    heroHeadline,
    heroDescription,
    features,
    demoUrl,
    technicalSpecs,
    relatedProducts[]->{title, slug, description, icon},
    seo
  }
`

// Use Case Pages
export const allUseCasePagesQuery = `
  *[_type == "useCasePage"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    icon
  }
`

export const useCasePageBySlugQuery = `
  *[_type == "useCasePage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    painPoint,
    solution,
    benefits,
    beforeAfter,
    roiMetrics,
    demoUrl,
    relatedUseCases[]->{title, slug, description, icon},
    seo
  }
`

// Tutorials
export const allTutorialsQuery = `
  *[_type == "tutorial"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    difficulty,
    duration,
    videoUrl,
    publishedAt
  }
`

// Documentation
export const allDocumentationQuery = `
  *[_type == "documentation"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    order,
    parent->{title, slug},
    description
  }
`

// Webinars
export const allWebinarsQuery = `
  *[_type == "webinar"] | order(scheduledAt desc) {
    _id,
    title,
    slug,
    description,
    type,
    scheduledAt,
    duration,
    videoUrl,
    registrationUrl,
    speakers[]->{name, title, photo},
    thumbnail
  }
`

// Team Members
export const teamMembersQuery = `
  *[_type == "teamMember"] | order(name asc) {
    _id,
    name,
    slug,
    title,
    bio,
    photo,
    email,
    linkedin,
    twitter
  }
`

// Careers
export const careersQuery = `
  *[_type == "career" && isActive == true] | order(title asc) {
    _id,
    title,
    slug,
    department,
    location,
    type,
    description
  }
`

// Testimonials
export const testimonialsQuery = `
  *[_type == "testimonial"] | order(featured desc) {
    _id,
    name,
    title,
    company,
    companyLogo,
    photo,
    quote,
    rating,
    industry->{title, slug},
    useCase->{title, slug},
    videoUrl,
    featured
  }
`

// Site Settings
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    title,
    description,
    url,
    logo,
    favicon,
    ogImage,
    contactEmail,
    supportEmail,
    salesEmail,
    socialLinks
  }
`

// Product Page by Slug
export const productPageBySlugQuery = `
  *[_type == "productPage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    heroHeadline,
    heroDescription,
    demoUrl,
    features,
    technicalSpecs,
    relatedProducts[]->{_id, title, slug, description},
    seo
  }
`

// Industry Page by Slug
export const industryPageBySlugQuery = `
  *[_type == "industryPage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    icon,
    introduction,
    painPoints,
    workflows,
    complianceNotes,
    caseStudies[]->{_id, companyName, slug, headline},
    seo
  }
`

// Use Case Page by Slug
export const useCasePageBySlugQuery = `
  *[_type == "useCasePage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    introduction,
    beforeScenario,
    afterScenario,
    implementationSteps,
    relatedCaseStudies[]->{_id, companyName, slug, headline},
    seo
  }
`

// Case Study by Slug
export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    companyName,
    slug,
    headline,
    industry,
    challenge,
    solution,
    results,
    resultsDetail,
    testimonial,
    seo
  }
`

// FAQ Items
export const faqItemsQuery = `
  *[_type == "faqItem"] | order(order asc) {
    _id,
    question,
    answer,
    category
  }
`

// All Tutorials
export const allTutorialsQuery = `
  *[_type == "tutorial"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    category,
    difficulty,
    estimatedTime
  }
`

// Tutorial by Slug
export const tutorialBySlugQuery = `
  *[_type == "tutorial" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    category,
    difficulty,
    estimatedTime,
    steps,
    content,
    seo
  }
`

// All Documentation
export const allDocumentationQuery = `
  *[_type == "documentation"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    category
  }
`

// Documentation by Slug
export const documentationBySlugQuery = `
  *[_type == "documentation" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    category,
    content,
    relatedDocs[]-> {
      _id,
      title,
      slug
    },
    seo
  }
`

// All Webinars
export const allWebinarsQuery = `
  *[_type == "webinar"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    date,
    duration,
    speakers[]-> {
      _id,
      name,
      role,
      photo
    },
    recordingUrl,
    registrationUrl
  }
`

// Webinar by Slug
export const webinarBySlugQuery = `
  *[_type == "webinar" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    date,
    duration,
    speakers[]-> {
      _id,
      name,
      role,
      photo,
      bio
    },
    content,
    recordingUrl,
    registrationUrl,
    seo
  }
`

// Blog Categories
export const blogCategoriesQuery = `
  *[_type == "blogCategory"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`

// Blog Posts by Category
export const blogPostsByCategoryQuery = `
  *[_type == "blogPost" && $category in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readingTime,
    author-> {
      name,
      photo
    },
    categories[]-> {
      _id,
      title,
      slug
    }
  }
`

// Career by Slug
export const careerBySlugQuery = `
  *[_type == "career" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    department,
    location,
    employmentType,
    experienceLevel,
    salaryRange,
    summary,
    description,
    responsibilities,
    requirements,
    benefits,
    applicationUrl,
    seo
  }
`

// Press Releases
export const pressReleasesQuery = `
  *[_type == "pressRelease"] | order(publishedAt desc) {
    _id,
    title,
    summary,
    publishedAt,
    pdfUrl
  }
`

// Integrations Query
export const integrationsQuery = `
  *[_type == "integration"] | order(name asc) {
    _id,
    name,
    logo,
    category
  }
`
