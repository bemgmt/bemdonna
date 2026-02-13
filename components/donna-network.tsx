"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { CalendarCheck, KeyRound, PackageSearch, ShieldCheck } from "lucide-react"
import { NetworkDiagram } from "@/components/donna/network-diagram"
import { IconBadge } from "@/components/donna/icon-badge"
import { Button } from "@/components/ui/button"

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
            Secure AI-to-AI coordination across organizations.
          </p>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            DONNA isn’t isolated. It can connect with other DONNAs across your network of clients, vendors, and partners
            to pass structured requests, sync status, and execute handoffs automatically — all with explicit permissions.
          </p>
        </div>

        {/* Visual Diagram */}
        <div className={`mb-12 animate-fade-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <NetworkDiagram />
        </div>

        {/* Key Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className={`glass-card p-6 rounded-xl border border-accent/10 animate-slide-up ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-4">
              <IconBadge>
                <KeyRound className="h-5 w-5 text-accent" />
              </IconBadge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Discovery & Authentication</h3>
            <p className="text-foreground/70 leading-relaxed">
              DONNAs authenticate and collaborate only when both organizations allow it. Every connection is permissioned,
              scoped, and observable.
            </p>
          </div>

          <div className={`glass-card p-6 rounded-xl border border-accent/10 animate-slide-up ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            <div className="mb-4">
              <IconBadge>
                <ShieldCheck className="h-5 w-5 text-accent" />
              </IconBadge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Security & Governance</h3>
            <p className="text-foreground/70 leading-relaxed">
              Only the minimum required information is exchanged. Actions are logged and auditable, with human-in-the-loop
              controls for exceptions.
            </p>
          </div>
        </div>

        {/* Real-World Examples */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Real-World Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl border border-accent/10">
              <div className="mb-3">
                <IconBadge>
                  <CalendarCheck className="h-5 w-5 text-accent" />
                </IconBadge>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Auto-Scheduling Across Companies</h4>
              <p className="text-foreground/70 leading-relaxed">
                Your DONNA coordinates with a client’s DONNA to find availability, book the meeting, and send invites
                without back-and-forth emails.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-accent/10">
              <div className="mb-3">
                <IconBadge>
                  <PackageSearch className="h-5 w-5 text-accent" />
                </IconBadge>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Vendor Updates & Orders</h4>
              <p className="text-foreground/70 leading-relaxed">
                A supplier’s DONNA sends order status and tracking data directly into your systems via your DONNA.
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
          <Button variant="donnaOutline" size="lg" asChild>
            <Link href="/system-brief">Learn More - System Brief</Link>
          </Button>
          <Button variant="donnaPrimary" size="lg" asChild>
            <Link href="/#demo-form">Request a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

