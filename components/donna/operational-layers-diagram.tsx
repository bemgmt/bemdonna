import { Database, Mail, Briefcase, CalendarDays, MessageSquare, Wrench } from "lucide-react"

export function OperationalLayersDiagram() {
  return (
    <div className="glass-card rounded-2xl border border-[color:var(--border-subtle)] p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-4">
          <div className="h-14 w-14 rounded-full border border-accent/40 bg-[color:var(--accent-soft)]" />
          <div className="h-14 w-14 rounded-full border border-accent/40 bg-[color:var(--accent-soft)]" />
        </div>

        <div className="mx-auto h-10 w-px bg-gradient-to-b from-accent to-accent/30" />

        <div className="mx-auto w-fit rounded-xl border border-accent/40 bg-[color:var(--accent-soft)] px-6 py-3">
          <p className="font-semibold tracking-wide gradient-text">DONNA</p>
        </div>

        <div className="mx-auto h-10 w-px bg-gradient-to-b from-accent/30 to-accent" />

        <div className="grid grid-cols-3 gap-3">
          {[Mail, CalendarDays, Briefcase, Database, Wrench, MessageSquare].map((Icon, index) => (
            <div
              key={index}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-[color:var(--border-subtle)] bg-white/5"
            >
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-foreground/60">People -> DONNA -> Software Systems</p>
      </div>
    </div>
  )
}
