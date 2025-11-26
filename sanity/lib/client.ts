// Stub Sanity client for build compatibility
// TODO: Install @sanity/client and configure properly

export async function sanityFetch<T>(query: string, params?: any, options?: any): Promise<T> {
  // Return empty array/object for build compatibility
  console.warn('Sanity client not configured. Returning empty data.')
  return (Array.isArray(query) ? [] : {}) as T
}

export function getClient(preview?: boolean) {
  return {
    fetch: sanityFetch
  }
}

