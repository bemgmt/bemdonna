"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section id="pricing" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white/5 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full transition-all font-medium ${
                !isAnnual ? "bg-accent text-background" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full transition-all font-medium ${
                isAnnual ? "bg-accent text-background" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { name: "Starter", price: isAnnual ? "499" : "599", calls: "1,000 calls/month" },
            { name: "Pro", price: isAnnual ? "1499" : "1799", calls: "10,000 calls/month", featured: true },
            { name: "Enterprise", price: "Custom", calls: "Unlimited", features: true },
          ].map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 animate-slide-up ${
                tier.featured
                  ? "glass-card border-2 border-accent glow-accent scale-105 md:scale-110"
                  : "glass-card border border-white/10"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.featured && <div className="text-xs font-bold text-accent mb-3 uppercase">Most Popular</div>}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold gradient-text">${tier.price}</span>
                {tier.price !== "Custom" && <span className="text-foreground/50 text-sm">/month</span>}
              </div>
              <div className="text-sm text-foreground/70 mb-6">{tier.calls}</div>
              <button
                className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                  tier.featured
                    ? "bg-accent text-background hover:bg-accent/90"
                    : "border border-accent/50 text-accent hover:bg-accent/10"
                }`}
              >
                {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/50 text-sm">
          All plans include 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
