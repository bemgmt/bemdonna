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

  return null
}
