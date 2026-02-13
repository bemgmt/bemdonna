import type { Organization, SoftwareApplication, FAQPage, Article, BreadcrumbList, Product, Offer, Event, JobPosting, HowTo, WebSite } from 'schema-dts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://donna.business'

export function organizationSchema(): Organization {
  return {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'DONNA',
    url: siteUrl,
    logo: `${siteUrl}/DONNA-logo.png`,
    description: 'AI-Powered Business Communication Platform',
    sameAs: [
      'https://www.linkedin.com/company/bemdonna',
      'https://twitter.com/bemdonna',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'derek@bem.studio',
      areaServed: 'US',
      availableLanguage: ['en', 'es', 'zh'],
    },
  }
}

export function webSiteSchema(): WebSite {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'DONNA',
    description: 'AI-Powered Business Communication Platform',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      // @ts-expect-error Google specific property not in schema-dts
      'query-input': 'required name=search_term_string',
    },
  }
}

export function softwareApplicationSchema(data: {
  name: string
  description: string
  features?: string[]
}): SoftwareApplication {
  return {
    '@type': 'SoftwareApplication',
    name: data.name,
    description: data.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    ...(data.features && {
      featureList: data.features.join(', '),
    }),
  }
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>): FAQPage {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function articleSchema(post: {
  title: string
  description: string
  publishedAt: string
  modifiedAt?: string
  author: string
  image?: string
  url: string
}): Article {
  return {
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image || `${siteUrl}/og-image.png`,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DONNA',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function productSchema(product: {
  name: string
  description: string
  image?: string
}): Product {
  const schema: Product = {
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'DONNA',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }
  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/523dd404-685e-4f69-8de8-31375ba15ef3', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sessionId: 'debug-session', runId: 'audit-run', hypothesisId: 'D', location: 'lib/schema-markup.ts:134', message: 'schema:product', data: { name: product.name, hasImage: Boolean(product.image), hasOffers: Boolean(schema.offers) }, timestamp: Date.now() }) }).catch(() => { });
  // #endregion
  return schema
}

export function offerSchema(pricing: {
  name: string
  price: string
  currency?: string
  description?: string
}): Offer {
  return {
    '@type': 'Offer',
    name: pricing.name,
    price: pricing.price,
    priceCurrency: pricing.currency || 'USD',
    description: pricing.description,
    seller: {
      '@type': 'Organization',
      name: 'DONNA',
    },
  }
}

export function eventSchema(webinar: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location?: string
  image?: string
}): Event {
  return {
    '@type': 'Event',
    name: webinar.name,
    description: webinar.description,
    startDate: webinar.startDate,
    endDate: webinar.endDate,
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'VirtualLocation',
      url: webinar.location || siteUrl,
    },
    image: webinar.image,
    organizer: {
      '@type': 'Organization',
      name: 'DONNA',
      url: siteUrl,
    },
  }
}

export function jobPostingSchema(job: {
  title: string
  description: string
  location: string
  employmentType: string
  datePosted: string
}): JobPosting {
  const isRemote = /remote/i.test(job.location)
  const schema: JobPosting = {
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    employmentType: job.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'DONNA',
      sameAs: siteUrl,
      url: siteUrl,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: isRemote ? 'Remote' : job.location,
        addressCountry: 'US',
      },
    },
    ...(isRemote && {
      jobLocationType: 'TELECOMMUTE',
      applicantLocationRequirements: {
        '@type': 'Country',
        name: 'US',
      },
    }),
  }
  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/523dd404-685e-4f69-8de8-31375ba15ef3', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sessionId: 'debug-session', runId: 'audit-run', hypothesisId: 'E', location: 'lib/schema-markup.ts:199', message: 'schema:jobPosting', data: { title: job.title, employmentType: job.employmentType, isRemote, location: job.location }, timestamp: Date.now() }) }).catch(() => { });
  // #endregion
  return schema
}

export function howToSchema(tutorial: {
  name: string
  description: string
  steps: Array<{ name: string; text: string }>
  totalTime?: string
}): HowTo {
  return {
    '@type': 'HowTo',
    name: tutorial.name,
    description: tutorial.description,
    totalTime: tutorial.totalTime,
    step: tutorial.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

export function caseStudySchema(study: {
  name: string
  description: string
  url: string
}) {
  return {
    '@type': 'Article',
    '@id': study.url,
    headline: study.name,
    description: study.description,
    url: study.url,
    publisher: {
      '@type': 'Organization',
      name: 'DONNA',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
  }
}

