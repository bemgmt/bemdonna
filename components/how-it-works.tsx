"use client"

import { useInView } from "react-intersection-observer"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Link email, CRM, calendar, and communications channels.",
  },
  {
    number: "02",
    title: "Calibrate",
    description: "Define goals, permissions, and escalation rules.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Launch DONNA to run workflows across your tools.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Expand roles, integrate more systems, and refine results.",
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const cardWidth = 256 // 240px + 16px gap

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, steps.length - 1))
    }

    container.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => container.removeEventListener('scroll', handleScroll)
  }, [cardWidth])

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current
    if (!container) return
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
  }

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1)
    }
  }

  const scrollNext = () => {
    if (activeIndex < steps.length - 1) {
      scrollToIndex(activeIndex + 1)
    }
  }

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
        <div className="md:hidden">
          <div className="text-center mb-3 text-sm text-foreground/60">
            Swipe to see steps →
          </div>
          <div className="relative">
            {/* Left gradient mask */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
            {/* Right gradient mask */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
            
            {/* Navigation buttons */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={scrollPrev}
                disabled={activeIndex === 0}
                className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 hover:bg-background/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous step"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={scrollNext}
                disabled={activeIndex === steps.length - 1}
                className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 hover:bg-background/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next step"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </div>

            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide"
            >
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
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-accent'
                    : 'w-2 bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to step ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
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
