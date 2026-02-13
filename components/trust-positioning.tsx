"use client"

import { useInView } from "react-intersection-observer"

const pillars = [
  { title: "Built for real businesses" },
  { title: "Designed for scale" },
  { title: "Secure, modular, enterprise-grade" },
  { title: "Human-in-the-loop by design" },
  { title: "Built natively on AWS" },
  { title: "Planned availability on the Amazon Marketplace by launch" },
]

export default function TrustPositioning() {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })

  return (
    <section id="trust" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Infrastructure first. <span className="gradient-text">Features second.</span>
        </h2>
        <p className="text-foreground/60 max-w-2xl mx-auto mb-12 text-lg">
          Trust and positioning built into how DONNA operates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`glass-card p-5 rounded-xl text-center transition-all duration-300 animate-slide-up ${
                inView ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="font-semibold text-foreground">{pillar.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
