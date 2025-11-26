"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"
import { sanityFetch } from "@/sanity/lib/client"
import { faqItemsQuery } from "@/lib/sanity/queries"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.2, once: true })
  const [faqs, setFaqs] = useState<any[]>([])

  useEffect(() => {
    async function loadFAQs() {
      try {
        const data = await sanityFetch<any[]>(faqItemsQuery)
        setFaqs(data)
      } catch (error) {
        console.error("Failed to load FAQs:", error)
      }
    }
    loadFAQs()
  }, [])

  if (faqs.length === 0) {
    return null
  }

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
              key={faq._id}
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
