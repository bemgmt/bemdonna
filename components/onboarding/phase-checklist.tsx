"use client"

import { useState } from "react"
import Link from "next/link"
import type { Phase } from "@/lib/onboarding-data"
import { getNextPhase, getPrevPhase, getFilteredPhases, resolveLabel } from "@/lib/onboarding-data"
import { useOnboardingStore } from "./use-onboarding-store"
import ProgressBar from "./progress-bar"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  Filter,
  Pencil,
} from "lucide-react"

interface PhaseChecklistProps {
  phase: Phase
}

const priorityBadge = {
  high: "bg-cyan-500/20 text-cyan-400",
  medium: "bg-amber-500/20 text-amber-400",
  low: "bg-white/10 text-foreground/50",
}

export default function PhaseChecklist({ phase }: PhaseChecklistProps) {
  const {
    state,
    hydrated,
    toggleItem,
    isItemCompleted,
    getNote,
    setNote,
    getPhaseProgress,
  } = useOnboardingStore()

  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>(
    {}
  )

  const profile = state.intakeProfile
  const filteredPhases = getFilteredPhases(profile)
  const filteredPhase = filteredPhases.find((p) => p.slug === phase.slug)
  const visibleItems = filteredPhase?.items ?? phase.items
  const totalOriginal = phase.items.length
  const totalVisible = visibleItems.length
  const isFiltered = totalVisible < totalOriginal

  const progress = getPhaseProgress(phase.slug)
  const next = getNextPhase(phase.slug)
  const prev = getPrevPhase(phase.slug)

  const toggleNoteExpansion = (itemId: string) => {
    setExpandedNotes((prev) => ({ ...prev, [itemId]: !prev[itemId] }))
  }

  if (!hydrated) {
    return (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto animate-pulse space-y-4">
          <div className="h-8 bg-white/5 rounded w-1/2" />
          <div className="h-4 bg-white/5 rounded w-3/4" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-20 bg-white/5 rounded-xl" />
          ))}
        </div>
      </div>
    )
  }

  if (totalVisible === 0) {
    return (
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="animate-fade-in">
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-accent transition-colors mb-6"
            >
              <LayoutGrid className="w-4 h-4" />
              Back to Hub
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{phase.title}</h1>
          </div>
          <div className="glass-card rounded-xl p-8 text-center">
            <Filter className="w-8 h-8 text-foreground/30 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Phase Not Applicable</h3>
            <p className="text-sm text-foreground/50 max-w-md mx-auto">
              Based on your intake profile, none of the items in this phase apply
              to your setup.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-accent transition-colors mb-6"
          >
            <LayoutGrid className="w-4 h-4" />
            Back to Hub
          </Link>

          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl font-bold gradient-text shrink-0">
              {String(phase.number).padStart(2, "0")}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{phase.title}</h1>
              <p className="text-sm text-foreground/50 mt-1">
                {phase.estimatedDays}
              </p>
            </div>
          </div>

          <p className="text-foreground/60 mb-6">{phase.description}</p>

          <ProgressBar
            percentage={progress.percentage}
            label={`${progress.completed} of ${progress.total} items completed`}
            size="md"
          />
        </div>

        {/* Filter banner */}
        {isFiltered && (
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent/5 border border-accent/10 text-xs text-foreground/50">
            <Filter className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>
              Showing {totalVisible} of {totalOriginal} items based on your
              profile.
            </span>
            <Link
              href="/onboarding"
              className="ml-auto inline-flex items-center gap-1 text-accent hover:underline shrink-0"
            >
              <Pencil className="w-3 h-3" />
              Edit
            </Link>
          </div>
        )}

        {/* Checklist Items */}
        <div className="space-y-3">
          {visibleItems.map((item) => {
            const completed = isItemCompleted(phase.slug, item.id)
            const noteValue = getNote(phase.slug, item.id)
            const isExpanded = expandedNotes[item.id] || false
            const displayLabel = resolveLabel(item, profile)

            return (
              <div
                key={item.id}
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                  completed ? "border-emerald-500/20" : ""
                }`}
              >
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleItem(phase.slug, item.id)}
                      className={`mt-0.5 w-5 h-5 rounded shrink-0 border-2 flex items-center justify-center transition-all ${
                        completed
                          ? "bg-emerald-500 border-emerald-500"
                          : "border-white/20 hover:border-accent/50"
                      }`}
                      aria-label={`${completed ? "Uncheck" : "Check"} ${displayLabel}`}
                    >
                      {completed && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-sm font-semibold transition-colors ${
                            completed
                              ? "text-foreground/40 line-through"
                              : "text-foreground"
                          }`}
                        >
                          {displayLabel}
                        </span>
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${priorityBadge[item.priority]}`}
                        >
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-xs text-foreground/50 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Note toggle */}
                    <button
                      onClick={() => toggleNoteExpansion(item.id)}
                      className={`shrink-0 p-1.5 rounded-lg transition-colors ${
                        isExpanded || noteValue
                          ? "text-accent bg-accent/10"
                          : "text-foreground/30 hover:text-foreground/60 hover:bg-white/5"
                      }`}
                      aria-label="Toggle notes"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Notes area */}
                  {isExpanded && (
                    <div className="mt-3 pl-8">
                      <textarea
                        value={noteValue}
                        onChange={(e) =>
                          setNote(phase.slug, item.id, e.target.value)
                        }
                        placeholder="Add notes, links, or status updates..."
                        rows={2}
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors text-sm resize-none placeholder:text-foreground/30"
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4">
          {prev ? (
            <Button variant="donnaOutline" size="sm" asChild>
              <Link href={`/onboarding/${prev.slug}`}>
                <ChevronLeft className="w-4 h-4 mr-1" />
                {prev.shortTitle}
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {next ? (
            <Button variant="donnaPrimary" size="sm" asChild>
              <Link href={`/onboarding/${next.slug}`}>
                {next.shortTitle}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          ) : (
            <Button variant="donnaPrimary" size="sm" asChild>
              <Link href="/onboarding">
                Back to Hub
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
