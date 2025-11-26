import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for production reads
  token: process.env.SANITY_API_TOKEN, // Only needed for write operations
})

// Get client with or without CDN based on preview mode
export function getClient(preview?: boolean) {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: !preview, // Disable CDN in preview mode
    token: process.env.SANITY_API_TOKEN,
  })
}

// Wrapper for fetching with error handling and caching
export async function sanityFetch<T = any>(
  query: string,
  params: Record<string, any> = {},
  options: {
    preview?: boolean
    cache?: RequestCache
    next?: NextFetchRequestConfig
  } = {}
): Promise<T> {
  const { preview = false, cache = 'force-cache', next } = options
  const fetchClient = getClient(preview)

  try {
    const data = await fetchClient.fetch<T>(query, params, {
      cache,
      next,
    })
    return data
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

