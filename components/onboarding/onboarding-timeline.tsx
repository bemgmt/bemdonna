"use client"

import { timelineMilestones } from "@/lib/onboarding-data"
import { useOnboardingStore } from "./use-onboarding-store"

export default function OnboardingTimeline() {
  const { getPhaseStatus } = useOnboardingStore()

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="relative min-w-[640px]">
        {/* Connecting line */}
        <div className="absolute top-5 left-5 right-5 h-0.5 bg-white/10" />

        <div className="relative flex justify-between">
          {timelineMilestones.map((milestone, idx) => {
            const phaseStatus = getPhaseStatus(milestone.phase)
            const isComplete = phaseStatus === "complete"
            const isActive = phaseStatus === "in-progress"

            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
                style={{ width: `${100 / timelineMilestones.length}%` }}
              >
                {/* Dot */}
                <div
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    isComplete
                      ? "bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/50"
                      : isActive
                        ? "bg-cyan-500/20 text-cyan-400 border-2 border-cyan-500/50"
                        : "bg-white/5 text-foreground/40 border-2 border-white/10"
                  }`}
                >
                  {isComplete ? (
                    <svg
                      className="w-4 h-4"
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
                  ) : (
                    idx + 1
                  )}
                </div>

                <p className="mt-2 text-xs font-semibold text-foreground/80 max-w-[100px]">
                  {milestone.label}
                </p>
                <p className="text-[10px] text-foreground/40 mt-0.5">
                  {milestone.days}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
