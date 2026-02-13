"use client"

import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"

const faqs = [
  {
    id: "1",
    question: "What is DONNA?",
    answer: "DONNA is a digital operations layer that runs workflows, communication, and decision support across your business. It’s infrastructure your company runs on, not just another tool."
  },
  {
    id: "2",
    question: "How does DONNA integrate with my existing systems?",
    answer: "DONNA is tool-native. It connects to the software you already use and takes action directly inside those systems via APIs and secure permissions."
  },
  {
    id: "3",
    question: "Is my data secure with DONNA?",
    answer: "Yes. DONNA is built with enterprise-grade security, SOC 2 Type II practices, GDPR compliance, encryption, and auditable controls."
  },
  {
    id: "4",
    question: "Can I customize DONNA's responses?",
    answer: "Yes. DONNA adapts to your knowledge base, policies, and brand voice. You control what it can do, what it can say, and when it should escalate."
  },
  {
    id: "5",
    question: "What kind of support do you offer?",
    answer: "All plans include support and onboarding. Pro and Enterprise include priority responses and dedicated guidance for complex deployments."
  },
  {
    id: "6",
    question: "How long does it take to set up DONNA?",
    answer: "Most teams are up quickly. We connect your systems, calibrate workflows, and validate handoff rules before going live."
  },
  {
    id: "7",
    question: "Can I try DONNA before committing?",
    answer: "We offer demos and a waitlist for early access programs. Join the waitlist or request a demo to see DONNA in action."
  },
  {
    id: "8",
    question: "What happens if DONNA can't answer a question?",
    answer: "DONNA is human-in-the-loop by design. It escalates exceptions and routes complex decisions to the right person."
  }
]

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="glass-card rounded-lg overflow-hidden transition-all duration-300 animate-slide-up border border-[color:var(--border-subtle)]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown size={20} className="flex-shrink-0 text-accent transition-transform duration-300 data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-4 pt-2 border-t border-white/10 text-foreground/70">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
