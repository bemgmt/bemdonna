"use client"

import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    quote:
      "DONNA has transformed how we handle incoming calls. Our team can focus on high-value work while she handles 90% of our scheduling requests.",
    author: "Sarah Chen",
    company: "Chen & Associates Real Estate",
    image: "◎",
  },
  {
    quote:
      "We went from losing leads to capturing 95% of incoming inquiries. The ROI was immediate and the implementation was painless.",
    author: "Marcus Johnson",
    company: "Johnson Home Services",
    image: "◎",
  },
  {
    quote:
      "The team loved the seamless Salesforce integration. Leads flow directly into our system without any manual data entry.",
    author: "Elena Rodriguez",
    company: "Horizon Hospitality Group",
    image: "◎",
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Business Leaders</span>
          </h2>
          <p className="text-foreground/60">See what customers say about DONNA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl glow-primary hover:shadow-[0_0_30px_rgba(122,92,255,0.2)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-foreground/60">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-foreground/80 italic mb-3">"{testimonial.quote}"</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
