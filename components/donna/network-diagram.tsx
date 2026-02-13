export function NetworkDiagram() {
  return (
    <svg
      viewBox="0 0 720 240"
      className="h-auto w-full rounded-2xl border border-[color:var(--border-subtle)] bg-card/40 backdrop-blur-xl"
      role="img"
      aria-label="Abstract diagram showing two organizations connected through a secure, permissioned AI-to-AI network"
    >
      <defs>
        <linearGradient id="networkEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(6,182,212,0.15)" />
          <stop offset="0.5" stopColor="rgba(6,182,212,0.8)" />
          <stop offset="1" stopColor="rgba(6,182,212,0.15)" />
        </linearGradient>
      </defs>

      <circle cx="160" cy="120" r="46" fill="rgba(6,182,212,0.10)" stroke="rgba(6,182,212,0.35)" />
      <circle cx="560" cy="120" r="46" fill="rgba(6,182,212,0.10)" stroke="rgba(6,182,212,0.35)" />

      <path d="M206 120 C 300 70, 420 70, 514 120" stroke="url(#networkEdge)" strokeWidth="2" fill="none" />
      <path d="M206 120 C 300 170, 420 170, 514 120" stroke="url(#networkEdge)" strokeWidth="2" fill="none" opacity="0.6" />

      <circle cx="360" cy="120" r="22" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.5)" />
      <circle cx="360" cy="120" r="8" fill="rgba(6,182,212,0.8)" />

      <text x="160" y="190" textAnchor="middle" fill="rgba(245,245,247,0.75)" fontSize="12">
        Organization A
      </text>
      <text x="560" y="190" textAnchor="middle" fill="rgba(245,245,247,0.75)" fontSize="12">
        Organization B
      </text>
      <text x="360" y="40" textAnchor="middle" fill="rgba(245,245,247,0.65)" fontSize="12">
        Secure, permissioned coordination
      </text>
    </svg>
  )
}
