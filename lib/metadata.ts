import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://donna.business'
const siteName = 'DONNA'
const defaultTitle = 'DONNA - AI-Powered Business Communication Platform'
const defaultDescription =
  'Transform your business communication with DONNA\'s AI-powered voice, email, and chat assistants. Automate lead response, customer support, and appointment scheduling 24/7.'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'AI assistant',
    'business automation',
    'customer support',
    'lead response',
    'appointment scheduling',
    'voice AI',
    'chatbot',
    'email automation',
  ],
  authors: [{ name: 'DONNA Team' }],
  creator: 'DONNA',
  publisher: 'DONNA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/og-image.png`],
    creator: '@bemdonna',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

interface GenerateMetadataParams {
  title?: string
  description?: string
  image?: string
  path?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
}

export function generatePageMetadata({
  title,
  description,
  image,
  path = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: GenerateMetadataParams): Metadata {
  const pageTitle = title ? `${title} | ${siteName}` : defaultTitle
  const pageDescription = description || defaultDescription
  const pageUrl = `${siteUrl}${path}`
  const pageImage = image || `${siteUrl}/og-image.png`

  return {
    title,
    description: pageDescription,
    keywords: tags,
    authors: authors?.map((name) => ({ name })),
    openGraph: {
      type,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  }
}

export function generateOGImage(params: {
  title: string
  description?: string
  type?: string
}): string {
  const searchParams = new URLSearchParams({
    title: params.title,
    ...(params.description && { description: params.description }),
    ...(params.type && { type: params.type }),
  })

  return `${siteUrl}/api/og?${searchParams.toString()}`
}

