"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function DonnaNetwork() {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })

  return (
    <section id="network" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">DONNA Network</span>
          </h2>
          <p className="text-lg font-semibold text-foreground/90 max-w-3xl mx-auto mb-6">
            AI that Collaborates Beyond Company Walls
          </p>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            DONNA doesn't work alone – it's part of a secure network of AI agents that can communicate and collaborate with each other on your behalf. Through the DONNA-to-DONNA Network, your DONNA can discover other trusted AI assistants (at your clients, vendors, or partners), exchange structured requests, and coordinate tasks directly, system-to-system.
          </p>
        </div>

        {/* Visual Diagram */}
        <div className={`mb-12 animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="glass-card p-8 rounded-xl border border-accent/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Company A */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/40 flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <p className="text-sm font-semibold text-foreground/90 mb-2">Company A</p>
                <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/50 flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">D</span>
                </div>
              </div>

              {/* Network Connection */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary"></div>
                  <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <span className="text-sm">📅</span>
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary"></div>
                  <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <span className="text-sm">📦</span>
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent"></div>
                </div>
                <p className="text-xs text-foreground/60 text-center mt-2">
                  Secure AI-to-AI Network
                </p>
              </div>

              {/* Company B */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/40 flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <p className="text-sm font-semibold text-foreground/90 mb-2">Company B</p>
                <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/50 flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">D</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className={`glass-card p-6 rounded-xl border border-accent/10 animate-slide-up ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold text-foreground mb-4">Discovery & Authentication</h3>
            <p className="text-foreground/70 leading-relaxed">
              DONNAs can find and authenticate each other across organizations with proper permissions, then negotiate tasks or share required info autonomously. All of this happens only with the organizations' consent and oversight, ensuring trust.
            </p>
          </div>

          <div className={`glass-card p-6 rounded-xl border border-accent/10 animate-slide-up ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-foreground mb-4">Security & Governance</h3>
            <p className="text-foreground/70 leading-relaxed">
              Organizations explicitly opt in to any network connection and define what their DONNA is allowed to share or request. No raw sensitive data ever leaves your environment – only the necessary information or outcomes are exchanged – and every inter-agent interaction is logged and auditable.
            </p>
          </div>
        </div>

        {/* Real-World Examples */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Real-World Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl border border-accent/10">
              <div className="text-2xl mb-3">📅</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Auto-Scheduling Across Companies</h4>
              <p className="text-foreground/70 leading-relaxed">
                Your DONNA can coordinate a meeting between your team and a client's DONNA. The two AI assistants compare calendars, find an open slot that works for both parties, and send out calendar invites – all without humans emailing back-and-forth.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-accent/10">
              <div className="text-2xl mb-3">📦</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Vendor Updates & Orders</h4>
              <p className="text-foreground/70 leading-relaxed">
                A supplier's DONNA automatically sends order status updates or shipment tracking information directly into your system via your DONNA, so your team is instantly updated without waiting on emails or manual data entry.
              </p>
            </div>
          </div>
        </div>

        {/* Network Effect */}
        <div className="text-center mb-8">
          <div className="glass-card p-6 rounded-xl border border-accent/10 inline-block max-w-2xl">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="text-foreground">Network Growth Flywheel:</strong> Each new DONNA that joins enriches the overall network – routine inter-company processes become faster and more efficient for everyone.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs"
            className="inline-block px-6 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-semibold text-center"
          >
            Learn More – Technical Brief
          </Link>
          <Link
            href="/#demo-form"
            className="inline-block px-6 py-3 rounded-lg bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-semibold text-center"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}

