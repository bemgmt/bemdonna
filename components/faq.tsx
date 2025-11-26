"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: "1",
    question: "What is DONNA?",
    answer: "DONNA is an AI-powered business communication platform that helps you capture leads, respond to customers, and automate your communication workflows 24/7."
  },
  {
    id: "2",
    question: "How does DONNA integrate with my existing systems?",
    answer: "DONNA integrates seamlessly with popular CRMs, email platforms, and business tools through our extensive integration library. We support Salesforce, HubSpot, Gmail, Outlook, and many more."
  },
  {
    id: "3",
    question: "Is my data secure with DONNA?",
    answer: "Yes, security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, and follow industry best practices to protect your data. All communications are encrypted in transit and at rest."
  },
  {
    id: "4",
    question: "Can I customize DONNA's responses?",
    answer: "Absolutely! DONNA learns from your business knowledge base and can be trained on your specific products, services, and brand voice. You have full control over response templates and automation rules."
  },
  {
    id: "5",
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 customer support via email and chat for all plans. Professional and Enterprise plans include dedicated account managers and priority support with guaranteed response times."
  },
  {
    id: "6",
    question: "How long does it take to set up DONNA?",
    answer: "Most businesses are up and running within 24 hours. Our onboarding team will help you configure integrations, train the AI on your business, and customize workflows to match your needs."
  },
  {
    id: "7",
    question: "Can I try DONNA before committing?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also schedule a personalized demo with our team."
  },
  {
    id: "8",
    question: "What happens if DONNA can't answer a question?",
    answer: "DONNA is designed to escalate complex queries to your team automatically. You can set custom escalation rules and DONNA will notify the right person while keeping the customer informed."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="glass-card rounded-lg overflow-hidden transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 pt-2 border-t border-white/10 text-foreground/70">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
