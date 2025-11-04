"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface Stat {
  value: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: "50M+",
    label: "Calls Handled",
    description: "Across enterprise clients",
  },
  {
    value: "100K+",
    label: "Hours Saved",
    description: "Per month by clients",
  },
  {
    value: "85%",
    label: "Lead Conversion",
    description: "Higher than industry average",
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Guaranteed availability",
  },
]

export default function Outcomes() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })
  const [counters, setCounters] = useState<Record<number, number>>({})

  useEffect(() => {
    if (!inView) return

    stats.forEach((stat, index) => {
      const numValue = Number.parseInt(stat.value)
      const interval = setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          [index]: Math.min((prev[index] || 0) + Math.ceil(numValue / 30), numValue),
        }))
      }, 50)

      return () => clearInterval(interval)
    })
  }, [inView])

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven <span className="gradient-text">Enterprise Results</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            DONNA delivers measurable outcomes for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl glow-accent transition-all duration-300 hover:glow-accent hover:shadow-[0_0_30px_rgba(132,204,255,0.2)] group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {counters[index] || 0}
                {stat.value.slice(-1) === "%" ? "%" : stat.value.slice(-1) === "+" ? "+" : ""}
              </div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-foreground/50">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
