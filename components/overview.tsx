"use client"

import { useInView } from "react-intersection-observer"
import { OperationalLayersDiagram } from "@/components/donna/operational-layers-diagram"

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
            <OperationalLayersDiagram />
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

