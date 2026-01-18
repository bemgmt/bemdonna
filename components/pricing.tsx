"use client"

import { useInView } from "react-intersection-observer"

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  const handleScrollToForm = () => {
    const form = document.getElementById("demo-form")
    form?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide mb-6">
          <div className="flex gap-4 w-max">
            {[
              {
                name: "Starter",
                price: "1,500",
                description: "Dedicated DONNA for a single team with core workflows and multi-modal support.",
                cta: "Join the Waitlist",
                featured: false
              },
              {
                name: "Pro",
                price: "5,000",
                description: "Multiple concurrent DONNAs across departments with advanced workflows.",
                cta: "Join the Waitlist",
                featured: true
              },
              {
                name: "Enterprise",
                price: "12,000",
                description: "Custom deployments, priority support, and enterprise-grade governance.",
                cta: "Contact Sales",
                featured: false
              },
            ].map((tier, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 animate-slide-up min-w-[280px] snap-start ${
                  tier.featured
                    ? "glass-card border-2 border-accent glow-accent scale-105"
                    : "glass-card"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tier.featured && (
                  <div className="text-xs font-bold text-accent mb-2">Most Popular</div>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${tier.price}</span>
                  <span className="text-foreground/60 text-sm">/mo</span>
                </div>
                <p className="text-sm text-foreground/70 mb-4">{tier.description}</p>
                <button
                  onClick={handleScrollToForm}
                  className={`w-full py-2 rounded-lg font-semibold transition-all ${
                    tier.featured
                      ? "bg-accent text-background hover:bg-accent/90"
                      : "border border-accent text-accent hover:bg-accent/10"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              name: "Starter",
              price: "1,500",
              description: "Dedicated DONNA for a single team with core workflows and multi-modal support.",
              cta: "Join the Waitlist",
              featured: false
            },
            {
              name: "Pro",
              price: "5,000",
              description: "Multiple concurrent DONNAs across departments with advanced workflows.",
              cta: "Join the Waitlist",
              featured: true
            },
            {
              name: "Enterprise",
              price: "12,000",
              description: "Custom deployments, priority support, and enterprise-grade governance.",
              cta: "Contact Sales",
              featured: false
            },
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
              {tier.featured && <div className="text-xs font-bold text-accent mb-3 uppercase">Popular</div>}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold gradient-text">${tier.price}</span>
                {tier.price !== "12,000" && <span className="text-foreground/60 ml-2">/month</span>}
              </div>
              <div className="text-sm text-foreground/70 mb-6">{tier.description}</div>
              <button
                onClick={handleScrollToForm}
                className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                  tier.featured
                    ? "bg-accent text-background hover:bg-accent/90"
                    : "border border-accent/50 text-accent hover:bg-accent/10"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/50 text-sm">
          Transparent pricing that scales with your operations.
        </p>
      </div>
    </section>
  )
}
