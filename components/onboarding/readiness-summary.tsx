"use client"

import { useState } from "react"
import { phases } from "@/lib/onboarding-data"
import { useOnboardingStore } from "./use-onboarding-store"
import ProgressBar from "./progress-bar"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, X } from "lucide-react"

interface ReadinessSummaryProps {
  onClose: () => void
}

export default function ReadinessSummary({ onClose }: ReadinessSummaryProps) {
  const { state, getPhaseProgress, getOverallProgress } = useOnboardingStore()
  const overall = getOverallProgress()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    if (!state.contactEmail) {
      setError("Please provide your company information on the hub page before submitting.")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Submission failed")
      }

      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
        <div className="glass-card rounded-2xl p-8 max-w-lg w-full text-center glow-accent">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Assessment Submitted</h2>
          <p className="text-foreground/60 mb-6">
            Your DONNA readiness assessment has been sent to our team. We&apos;ll
            review your responses and reach out to{" "}
            <span className="text-accent">{state.contactEmail}</span> within 24
            hours.
          </p>
          <Button variant="donnaPrimary" onClick={onClose}>
            Back to Hub
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="glass-card rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto glow-accent">
        <div className="sticky top-0 bg-[#0A0A0A] border-b border-white/10 p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Readiness Assessment Summary</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Company Info */}
          <div className="glass-panel rounded-xl p-4">
            <h3 className="text-sm font-semibold text-foreground/60 mb-2 uppercase tracking-wider">
              Company Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div>
                <span className="text-foreground/50">Company</span>
                <p className="font-medium">
                  {state.companyName || "Not provided"}
                </p>
              </div>
              <div>
                <span className="text-foreground/50">Contact</span>
                <p className="font-medium">
                  {state.contactName || "Not provided"}
                </p>
              </div>
              <div>
                <span className="text-foreground/50">Email</span>
                <p className="font-medium">
                  {state.contactEmail || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Overall Progress */}
          <div>
            <ProgressBar
              percentage={overall.percentage}
              label={`Overall: ${overall.completed} of ${overall.total} items`}
              size="lg"
            />
          </div>

          {/* Phase Breakdown */}
          <div className="space-y-3">
            {phases.map((phase) => {
              const progress = getPhaseProgress(phase.slug)
              const isComplete = progress.completed === progress.total

              return (
                <div key={phase.slug} className="glass-panel rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    {isComplete ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-foreground/30 shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold truncate">
                          Phase {phase.number}: {phase.title}
                        </h4>
                        <span className="text-xs text-foreground/50 ml-2 shrink-0">
                          {progress.completed}/{progress.total}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ProgressBar
                    percentage={progress.percentage}
                    size="sm"
                    showPercentage={false}
                  />
                </div>
              )
            })}
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <Button
              variant="donnaOutline"
              className="flex-1"
              onClick={onClose}
            >
              Continue Editing
            </Button>
            <Button
              variant="donnaPrimary"
              className="flex-1"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Assessment"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
