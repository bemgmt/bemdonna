export function FutureVisionDiagram() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-center">
        <div className="text-sm font-semibold text-accent mb-4">Today</div>
        <div className="mx-auto w-fit rounded-xl border border-accent/40 bg-[color:var(--accent-soft)] px-6 py-4">
          <p className="font-semibold">One DONNA per organization</p>
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm font-semibold text-accent mb-4">Future</div>
        <div className="mx-auto w-fit rounded-xl border border-accent/40 bg-[color:var(--accent-soft)] px-6 py-4">
          <p className="font-semibold">Many DONNAs + Marketplace Coordination</p>
        </div>
      </div>
    </div>
  )
}
