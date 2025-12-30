"use client"

import { useInView } from "react-intersection-observer"

const securityItems = [
  { icon: "⬢", title: "Built on AWS", description: "Enterprise-grade infrastructure with AWS ECS/Fargate, Aurora RDS, and DynamoDB. Benefit from AWS's 99.99% uptime SLA and global redundancy." },
  { icon: "✓", title: "Verizon Partnership", description: "Powered by Verizon's enterprise network for superior call quality, reliability, and nationwide coverage. Access to Verizon's 5G network and priority routing." },
  { icon: "◐", title: "SOC 2 Type II & GDPR", description: "Independently audited and certified. Full compliance with data protection regulations and industry standards." },
  { icon: "⚙", title: "Data Privacy & Security", description: "Bank-level encryption, SSL via Certificate Manager, IAM least-privilege access. Your data is yours—we never train on it." },
]

export default function Security() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section id="security" ref={ref} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Enterprise-Grade <span className="gradient-text">Security</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-base">Your security and privacy are our top priority</p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 w-max">
            {securityItems.map((item, index) => (
              <div
                key={index}
                className="glass-card p-5 rounded-xl text-center glow-accent hover:shadow-[0_0_30px_rgba(61,224,255,0.2)] transition-all duration-300 animate-slide-up min-w-[260px] snap-start"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
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
                className="glass-card p-6 rounded-xl text-center glow-accent hover:shadow-[0_0_30px_rgba(61,224,255,0.2)] transition-all duration-300 animate-slide-up"
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
