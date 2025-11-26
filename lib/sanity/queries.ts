// Stub GROQ queries for build compatibility
// TODO: Define actual GROQ queries when Sanity is configured

export const allBlogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc)`
export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0]`
export const featuredBlogPostsQuery = `*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3]`
export const blogCategoriesQuery = `*[_type == "category"] | order(name asc)`

export const allCaseStudiesQuery = `*[_type == "caseStudy"] | order(publishedAt desc)`
export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0]`

export const allIndustryPagesQuery = `*[_type == "industryPage"] | order(title asc)`
export const industryPageBySlugQuery = `*[_type == "industryPage" && slug.current == $slug][0]`

export const allProductPagesQuery = `*[_type == "productPage"] | order(order asc)`
export const productPageBySlugQuery = `*[_type == "productPage" && slug.current == $slug][0]`

export const allUseCasePagesQuery = `*[_type == "useCasePage"] | order(title asc)`
export const useCasePageBySlugQuery = `*[_type == "useCasePage" && slug.current == $slug][0]`

export const allTutorialsQuery = `*[_type == "tutorial"] | order(publishedAt desc)`
export const tutorialBySlugQuery = `*[_type == "tutorial" && slug.current == $slug][0]`

export const allDocumentationQuery = `*[_type == "documentation"] | order(order asc)`
export const documentationBySlugQuery = `*[_type == "documentation" && slug.current == $slug][0]`

export const allWebinarsQuery = `*[_type == "webinar"] | order(date desc)`
export const webinarBySlugQuery = `*[_type == "webinar" && slug.current == $slug][0]`

export const careersQuery = `*[_type == "career" && status == "open"] | order(publishedAt desc)`
export const careerBySlugQuery = `*[_type == "career" && slug.current == $slug][0]`

export const allFAQsQuery = `*[_type == "faqItem"] | order(order asc)`
export const faqsByCategoryQuery = `*[_type == "faqItem" && category == $category] | order(order asc)`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`

