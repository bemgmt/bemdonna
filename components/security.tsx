"use client"

import { useInView } from "react-intersection-observer"

const securityItems = [
  { icon: "⬢", title: "Enterprise Security", description: "Bank-level encryption and security protocols" },
  { icon: "✓", title: "SOC 2 Type II", description: "Independently audited and certified" },
  { icon: "◐", title: "GDPR Compliant", description: "Full compliance with data protection regulations" },
  { icon: "⚙", title: "Data Privacy", description: "Your data is yours. We never train on it." },
]

export default function Security() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section id="security" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade <span className="gradient-text">Security</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Your security and privacy are our top priority</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl text-center glow-accent hover:shadow-[0_0_30px_rgba(132,204,255,0.2)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-foreground/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
