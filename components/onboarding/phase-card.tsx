"use client"

import Link from "next/link"
import type { Phase } from "@/lib/onboarding-data"
import ProgressBar from "./progress-bar"
import { ChevronRight } from "lucide-react"

interface PhaseCardProps {
  phase: Phase
  progress: { completed: number; total: number; percentage: number }
  status: "not-started" | "in-progress" | "complete"
}

const statusConfig = {
  "not-started": { label: "Not Started", className: "bg-white/10 text-foreground/50" },
  "in-progress": { label: "In Progress", className: "bg-cyan-500/20 text-cyan-400" },
  complete: { label: "Complete", className: "bg-emerald-500/20 text-emerald-400" },
}

export default function PhaseCard({ phase, progress, status }: PhaseCardProps) {
  const { label, className } = statusConfig[status]

  return (
    <Link
      href={`/onboarding/${phase.slug}`}
      className="group block glass-card rounded-xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[var(--shadow-accent)]"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-3xl font-bold gradient-text">
          {String(phase.number).padStart(2, "0")}
        </div>
        <span
          className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${className}`}
        >
          {label}
        </span>
      </div>

      <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
        {phase.title}
      </h3>

      <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
        {phase.description}
      </p>

      <ProgressBar
        percentage={progress.percentage}
        label={`${progress.completed} of ${progress.total} items`}
        size="sm"
      />

      <div className="mt-4 flex items-center text-xs text-foreground/50 group-hover:text-accent transition-colors">
        <span>{phase.estimatedDays}</span>
        <ChevronRight className="ml-auto h-4 w-4" />
      </div>
    </Link>
  )
}
