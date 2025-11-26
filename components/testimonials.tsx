"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { sanityFetch, urlFor } from "@/sanity/lib/client"
import { testimonialsQuery } from "@/lib/sanity/queries"

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })
  const [testimonials, setTestimonials] = useState<any[]>([])

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await sanityFetch<any[]>(testimonialsQuery)
        setTestimonials(data.slice(0, 6)) // Show up to 6 testimonials
      } catch (error) {
        console.error("Failed to load testimonials:", error)
      }
    }
    loadTestimonials()
  }, [])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Business Leaders</span>
          </h2>
          <p className="text-foreground/60">See what customers say about DONNA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial._id}
              className="glass-card p-8 rounded-xl glow-primary hover:shadow-[0_0_30px_rgba(122,92,255,0.2)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {testimonial.photo ? (
                  <Image
                    src={urlFor(testimonial.photo).width(60).height(60).url()}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">
                    {testimonial.title}
                    {testimonial.company && `, ${testimonial.company}`}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 italic mb-3">"{testimonial.quote}"</p>
              {testimonial.rating && (
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
