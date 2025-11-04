"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Setup typically takes 15-30 minutes. We guide you through connecting your phone, email, calendar, and CRM. Most customers are live within an hour.",
  },
  {
    question: "Can DONNA handle multiple languages?",
    answer:
      "Yes! DONNA supports 25+ languages and can seamlessly switch between them during conversations. Perfect for diverse customer bases.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your data is encrypted and stored securely. We never train our models on customer data. You maintain complete ownership and control.",
  },
  {
    question: "Can I customize DONNA for my business?",
    answer:
      "Absolutely. You can train DONNA on your business documents, pricing, policies, and procedures. It learns your business context.",
  },
  {
    question: "What integrations are available?",
    answer:
      "We support 100+ integrations including Salesforce, HubSpot, Google Workspace, Microsoft 365, Zapier, and more. Custom integrations available too.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, all customers get email support. Pro and Enterprise plans include phone and video support with dedicated success managers.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-lg overflow-hidden transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 border-t border-white/10 text-foreground/70">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
