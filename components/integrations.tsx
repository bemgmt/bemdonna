"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { sanityFetch, urlFor } from "@/sanity/lib/client"
import { integrationsQuery } from "@/lib/sanity/queries"

export default function Integrations() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })
  const [integrations, setIntegrations] = useState<any[]>([])

  useEffect(() => {
    async function loadIntegrations() {
      try {
        const data = await sanityFetch<any[]>(integrationsQuery)
        setIntegrations(data.slice(0, 12)) // Show up to 12 integrations
      } catch (error) {
        console.error("Failed to load integrations:", error)
      }
    }
    loadIntegrations()
  }, [])

  if (integrations.length === 0) {
    return null
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Integrates With Your <span className="gradient-text">Favorite Tools</span>
          </h2>
          <p className="text-foreground/60">Connect DONNA with the tools you already use</p>
        </div>

        <div className="glass-card p-8 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {integrations.map((integration, index) => (
              <div
                key={integration._id}
                className="py-4 px-2 rounded-lg border border-white/5 hover:border-accent/50 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {integration.logo ? (
                  <div className="flex justify-center mb-2">
                    <Image
                      src={urlFor(integration.logo).width(48).height(48).url()}
                      alt={integration.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-lg font-bold text-accent">
                      {integration.name.charAt(0)}
                    </div>
                  </div>
                )}
                <div className="text-sm font-medium text-foreground/70 group-hover:text-accent transition-colors">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/product/integrations"
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View All Integrations →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
