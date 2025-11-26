import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import { sanityFetch } from '@/sanity/lib/client'
import { allIndustryPagesQuery } from '@/lib/sanity/queries'
import { Building2, Hotel, Home, Scissors, Shield, Heart, Music } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Industries',
  description: 'DONNA serves businesses across multiple industries with tailored AI solutions.',
  path: '/industries',
})

const iconMap: Record<string, any> = {
  building: Building2,
  hotel: Hotel,
  home: Home,
  scissors: Scissors,
  shield: Shield,
  heart: Heart,
  music: Music,
}

export default async function IndustriesPage() {
  const industries = await sanityFetch<any[]>(allIndustryPagesQuery)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">DONNA for Every Industry</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Tailored AI solutions designed for your industry's unique needs
        </p>
      </section>

      <section className="py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] || Building2
            return (
              <Link
                key={industry._id}
                href={`/industries/${industry.slug.current}`}
                className="group p-8 border rounded-lg hover:border-primary hover:shadow-lg transition-all"
              >
                <Icon className="h-12 w-12 mb-4 text-primary" />
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {industry.title}
                </h2>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <span className="text-primary font-medium">Learn More →</span>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

