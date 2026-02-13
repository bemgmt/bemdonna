"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function Overview() {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })

  return (
    <section id="overview" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className={`animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              DONNA is not software you use.
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                DONNA is an operational intelligence layer that sits beneath a business. It coordinates communication,
                workflows, and decisions across tools, teams, and channels without forcing you to change how you work.
              </p>

              <p className="text-lg">
                This is not automation. This is how modern businesses run.
              </p>

              <div className="mt-6 p-4 rounded-lg bg-accent/10 border-l-4 border-accent">
                <p className="text-base font-medium text-foreground/90">
                  Human-in-the-loop by design. DONNA automates the routine and escalates what requires judgment.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Diagram */}
          <div className={`animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="glass-card p-8 rounded-xl border border-accent/10">
              <div className="space-y-6">
                {/* People */}
                <div className="flex items-center justify-center">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border-2 border-accent/30">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border-2 border-accent/30">
                      <span className="text-2xl">👥</span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-accent to-primary"></div>
                </div>

                {/* DONNA Layer */}
                <div className="flex items-center justify-center">
                  <div className="px-6 py-4 rounded-lg bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent/40">
                    <span className="text-xl font-bold gradient-text">DONNA</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent"></div>
                </div>

                {/* Software Systems */}
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3">
                    {['📧', '📅', '💼', '📊', '🔧', '📱'].map((icon, i) => (
                      <div key={i} className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center border border-foreground/10">
                        <span className="text-xl">{icon}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Caption */}
                <p className="text-center text-sm text-foreground/60 mt-4">
                  People ⇄ DONNA ⇄ Software Systems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* "What DONNA Isn't" Note */}
        <div className="mt-12 text-center">
          <div className="inline-block p-4 rounded-lg bg-foreground/5 border border-foreground/10">
            <p className="text-base font-semibold text-foreground/90">
              Not a chatbot. Not a CRM. An operational intelligence layer that runs the day-to-day so your team stays focused.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

