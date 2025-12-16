import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'
const useCdn = process.env.NODE_ENV === 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function getClient(preview = false) {
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
  const client = getClient(preview)
  
  try {
    return await client.fetch<T>(query, params)
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}

