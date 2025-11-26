// Stub image URL builder for build compatibility
// TODO: Install @sanity/image-url and configure properly

export function urlForImage(source: any) {
  return {
    url: () => source?.asset?._ref || '/placeholder.png',
    width: (w: number) => ({ url: () => '/placeholder.png' }),
    height: (h: number) => ({ url: () => '/placeholder.png' }),
    fit: (mode: string) => ({ url: () => '/placeholder.png' }),
    auto: (format: string) => ({ url: () => '/placeholder.png' })
  }
}

