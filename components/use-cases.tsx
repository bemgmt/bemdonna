"use client"

import { useInView } from "react-intersection-observer"

const useCases = [
  {
    title: "Real Estate",
    icon: "◎",
    description: "Automate inquiries, showings, and lead qualification with an AI operator that syncs with your CRM and calendar.",
    outcomes: ["Faster lead response", "More showings booked", "Cleaner CRM data", "Always-on follow-up"],
  },
  {
    title: "Hospitality",
    icon: "◈",
    description: "Handle reservations, guest questions, and service coordination across voice, SMS, and email.",
    outcomes: ["24/7 reservation handling", "Reduced front-desk load", "Consistent guest experience", "Faster issue resolution"],
  },
  {
    title: "Professional Services",
    icon: "⬢",
    description: "Automate intake, scheduling, and follow-ups so teams stay focused on high-value work.",
    outcomes: ["Fewer no-shows", "Faster intake", "Automated reminders", "More billable time"],
  },
  {
    title: "Health & Beauty",
    icon: "⟳",
    description: "Book and manage appointments, send reminders, and respond to client questions around the clock.",
    outcomes: ["Fuller calendars", "Reduced no-shows", "24/7 client support", "Smooth rescheduling"],
  },
]

export default function UseCases() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section id="use-cases" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            DONNA powers businesses across industries with tailored solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl glow-accent transition-all duration-300 hover:glow-accent hover:shadow-[0_0_30px_rgba(122,92,255,0.2)] animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:animate-float">{useCase.icon}</div>
              <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
              <p className="text-foreground/70 mb-4 text-sm">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-accent">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
