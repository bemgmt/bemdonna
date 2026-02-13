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
    <section ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Measurable <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Operational intelligence should produce clear, compounding business results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const numericValue = Number.parseInt(stat.value, 10)
            const suffix = stat.value.replace(String(numericValue), "")
            return (
              <div key={stat.label} className="glass-card rounded-2xl border border-accent/20 p-6">
                <p className="text-3xl font-bold text-accent">
                  {inView ? counters[index] ?? 0 : 0}
                  {suffix}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{stat.label}</h3>
                <p className="mt-1 text-sm text-foreground/70">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
