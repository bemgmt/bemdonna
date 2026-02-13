import type { ReactNode } from "react"

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-[color:var(--accent-soft)]">
      {children}
    </div>
  )
}
