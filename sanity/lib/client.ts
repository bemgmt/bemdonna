// Stub Sanity client for build compatibility
// TODO: Install @sanity/client and configure properly

export async function sanityFetch<T>(query: string, params?: any, options?: any): Promise<T> {
  // Return empty array for build compatibility (most queries expect arrays)
  console.warn('Sanity client not configured. Returning empty data.')
  return [] as T
}

export function getClient(preview?: boolean) {
  return {
    fetch: sanityFetch
  }
}

// Export urlFor for image handling
export function urlFor(source: any) {
  return {
    url: () => source?.asset?._ref || '/placeholder.png',
    width: (w: number) => ({ url: () => '/placeholder.png' }),
    height: (h: number) => ({ url: () => '/placeholder.png' }),
    fit: (mode: string) => ({ url: () => '/placeholder.png' }),
    auto: (format: string) => ({ url: () => '/placeholder.png' })
  }
}

