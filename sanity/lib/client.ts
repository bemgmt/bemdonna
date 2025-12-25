import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'
const useCdn = process.env.NODE_ENV === 'production'

// Only create client if projectId is configured
let client: ReturnType<typeof createClient> | null = null
let builder: ReturnType<typeof imageUrlBuilder> | null = null

if (projectId) {
  client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token: process.env.SANITY_API_TOKEN,
  })
  builder = imageUrlBuilder(client)
}

export function urlFor(source: SanityImageSource) {
  if (!builder || !source) {
    // Return a mock builder if Sanity is not configured
    const mockBuilder = {
      width: (w: number) => mockBuilder,
      height: (h: number) => mockBuilder,
      fit: (f: string) => mockBuilder,
      auto: (a: string) => mockBuilder,
      url: () => '/placeholder.jpg',
    }
    return mockBuilder as any
  }
  return builder.image(source)
}

export function getClient(preview = false) {
  if (!projectId) {
    // Return a mock client if Sanity is not configured
    return {
      fetch: async () => [],
    } as any
  }
  
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: preview ? false : useCdn,
    token: process.env.SANITY_API_TOKEN,
    perspective: preview ? 'previewDrafts' : 'published',
  })
}

export async function sanityFetch<T>({
  query,
  params = {},
  preview = false,
}: {
  query: string
  params?: Record<string, unknown>
  preview?: boolean
}): Promise<T> {
  // If Sanity is not configured, return empty result
  if (!projectId) {
    return [] as T
  }
  
  const client = getClient(preview)
  
  try {
    return await client.fetch<T>(query, params)
  } catch (error) {
    console.error('Sanity fetch error:', error)
    // Return empty result instead of throwing during build
    return [] as T
  }
}

