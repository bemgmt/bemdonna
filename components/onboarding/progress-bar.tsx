"use client"

interface ProgressBarProps {
  percentage: number
  label?: string
  size?: "sm" | "md" | "lg"
  showPercentage?: boolean
}

export default function ProgressBar({
  percentage,
  label,
  size = "md",
  showPercentage = true,
}: ProgressBarProps) {
  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" }

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <span className="text-xs text-foreground/60">{label}</span>
          )}
          {showPercentage && (
            <span className="text-xs font-medium text-foreground/80">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div
        className={`w-full ${heights[size]} rounded-full bg-white/5 overflow-hidden`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        />
      </div>
    </div>
  )
}
