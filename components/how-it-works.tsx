"use client"

import { useInView } from "react-intersection-observer"

const steps = [
  {
    number: "01",
    title: "Setup",
    description: "Connect your phone, email, calendar, and CRM in minutes",
  },
  {
    number: "02",
    title: "Train",
    description: "Upload your knowledge base and business documents",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Go live with DONNA managing your communications",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Review analytics and continuously improve performance",
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section id="how-it-works" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            How DONNA <span className="gradient-text">Works</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-base">Get up and running in four simple steps</p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 w-max">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-slide-up min-w-[240px] snap-start">
                <div className="glass-card p-5 rounded-xl glow-accent relative z-10">
                  <div className="text-3xl font-bold gradient-text mb-2">{step.number}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground/70 text-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                )}
                <div className="glass-card p-6 rounded-xl glow-accent relative z-10">
                  <div className="text-4xl font-bold gradient-text mb-3">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}
