"use client"

import { useInView } from "react-intersection-observer"
import { BadgeCheck, LockKeyhole, ShieldCheck, type LucideIcon } from "lucide-react"
import { IconBadge } from "@/components/donna/icon-badge"

const securityLayerFeatures = [
  "PII Detection",
  "Credential Blocking",
  "MNPI Protection",
  "Code Scanning",
  "Audit Logging",
  "<50ms Latency",
]

const securityItems = [
  { icon: BadgeCheck, title: "SOC 2 Type II & GDPR", description: "Enterprise compliance with audited controls and data protection standards." },
  { icon: LockKeyhole, title: "Encryption Everywhere", description: "Secure data in transit and at rest with strict access controls." },
  { icon: ShieldCheck, title: "Governed Automation", description: "Permissioned actions, audit trails, and clear escalation rules." },
  { icon: ShieldCheck, title: "Privacy by Design", description: "Only the required data is shared. You control what DONNA can access and execute." },
] as { icon: LucideIcon; title: string; description: string }[]

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" width={56} height={56} fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path d="M24 4L6 12v12c0 11 7 21 18 24 11-3 18-13 18-24V12L24 4z" />
    </svg>
  )
}

export default function Security() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section id="security" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* DONNA-DEMO Security Layer block - primary section */}
        <div className="max-w-[1000px] mx-auto text-center mb-16 md:mb-20">
          <p className="text-xs font-semibold text-[#34D399] uppercase tracking-widest mb-6">
            The Security Layer
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[rgba(6,182,212,0.15)] to-[rgba(6,182,212,0.08)] border-2 border-[#06B6D4] px-6 py-3 rounded-full text-sm font-semibold text-[#22d3ee] mb-6">
            Built-in, not bolted on
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            All This Power.
            <br />
            <span className="text-[#22d3ee]">Completely Protected.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every interaction scanned. Every risk blocked. Every action logged.
            <br className="hidden sm:block" />
            Enterprise security that&apos;s invisible to your team.
          </p>

          <div className="mb-10">
            <div className="w-[200px] h-[200px] mx-auto rounded-full bg-gradient-to-br from-slate-900 to-slate-800 border-4 border-[#06B6D4] flex flex-col items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.25)] animate-shield-pulse">
              <ShieldIcon className="text-[#22d3ee] mb-2" />
              <span className="text-sm font-bold text-[#22d3ee] uppercase tracking-wider">Protected</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {securityLayerFeatures.map((feature) => (
              <div
                key={feature}
                className="px-5 py-3 rounded-lg bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.3)] text-sm font-medium text-[#22d3ee]"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Existing enterprise security cards - secondary section */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Compliance &amp; Governance
          </h3>
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-base">
            Enterprise-grade security and governance built into every workflow.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 w-max">
            {securityItems.map((item, index) => (
              <div
                key={index}
                className="glass-card p-5 rounded-xl text-center glow-accent hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 animate-slide-up min-w-[260px] snap-start"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-2 flex justify-center">
                  <IconBadge>
                    <item.icon className="h-5 w-5 text-accent" />
                  </IconBadge>
                </div>
                <h4 className="font-bold mb-2 text-sm">{item.title}</h4>
                <p className="text-foreground/60 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl text-center glow-accent hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 flex justify-center">
                <IconBadge>
                  <item.icon className="h-5 w-5 text-accent" />
                </IconBadge>
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-foreground/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
