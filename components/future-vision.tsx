"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function FutureVision() {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })

  return (
    <section id="future-vision" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
            Future Vision
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Marketplace & <span className="gradient-text">Interoperable Network</span>
          </h2>
          <p className="text-lg font-semibold text-foreground/90 max-w-3xl mx-auto mb-6">
            A world where every business runs DONNA and interoperable agents coordinate across the network.
          </p>
        </div>

        {/* DONNA Marketplace */}
        <div className={`mb-12 animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="glass-card p-8 rounded-xl border border-accent/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🏪</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">DONNA Marketplace</h3>
                  <span className="px-2 py-1 rounded bg-accent/20 text-accent text-xs font-semibold">Coming Soon</span>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  The DONNA Marketplace is a connected ecosystem where organizations can offer and access specialized
                  AI services through their DONNAs. Your DONNA can request a legal review, a finance check, or a vendor
                  update as a structured, permissioned task.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  This keeps sensitive data protected while enabling secure AI-to-AI coordination across businesses,
                  turning the network into a marketplace of execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-DONNA Architecture */}
        <div className={`mb-12 animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="glass-card p-8 rounded-xl border border-accent/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🏢</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">Multi-DONNA Architecture</h3>
                  <span className="px-2 py-1 rounded bg-accent/20 text-accent text-xs font-semibold">In Development</span>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Organizations will deploy multiple DONNAs across departments — each focused on a role yet able to
                  collaborate through shared context and governed permissions.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  This scales operational intelligence inside the enterprise while preserving control and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className={`mb-12 animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="glass-card p-8 rounded-xl border border-accent/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Today */}
              <div className="text-center">
                <div className="text-sm font-semibold text-accent mb-4">Today</div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/40 flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/50 flex items-center justify-center">
                    <span className="text-xl font-bold gradient-text">D</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">One DONNA per organization</p>
              </div>

              {/* Future */}
              <div className="text-center">
                <div className="text-sm font-semibold text-accent mb-4">Future</div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/50 flex items-center justify-center">
                    <span className="text-sm font-bold gradient-text">M</span>
                  </div>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/50 flex items-center justify-center">
                    <span className="text-sm font-bold gradient-text">S</span>
                  </div>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/50 flex items-center justify-center">
                    <span className="text-sm font-bold gradient-text">H</span>
                  </div>
                  <div className="text-2xl">+</div>
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/40 flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">Many DONNAs + Marketplace</p>
              </div>
            </div>
          </div>
        </div>

        {/* End-State Impact */}
        <div className="text-center mb-8">
          <div className="glass-card p-8 rounded-xl border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10 inline-block max-w-3xl">
            <p className="text-lg text-foreground/90 leading-relaxed">
              <strong className="text-foreground">Ultimately, every business runs DONNA.</strong> Work moves without friction
              between companies while humans focus on strategy and creativity.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-semibold text-lg"
          >
            Contact Us to Discuss Your AI Strategy
          </Link>
        </div>
      </div>
    </section>
  )
}

