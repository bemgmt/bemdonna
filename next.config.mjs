/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable image optimization for production
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.replicate.delivery',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
  // Enable experimental features
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    optimizeCss: true,
  },
  // Redirects for old URLs (301 redirects from prelaunch to new structure)
  async redirects() {
    return [
      {
        source: '/prelaunch',
        destination: '/',
        permanent: true,
      },
      {
        source: '/waitlist',
        destination: '/',
        permanent: true,
      },
      {
        source: '/series-a-funding',
        destination: '/press/series-a-funding',
        permanent: true,
      },
      {
        source: '/language-launch',
        destination: '/press/multi-language-launch',
        permanent: true,
      },
      {
        source: '/certification',
        destination: '/press/soc2-certification',
        permanent: true,
      },
      {
        source: '/customers-milestone',
        destination: '/press/10k-users-milestone',
        permanent: true,
      },
    ]
  },
  // Rewrites for clean URLs
  async rewrites() {
    return []
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
