"use client"

import { useState } from "react"
import { NeonButton } from "./neon-button"
import { cn } from "@/lib/utils"

interface ContactFormHoloProps {
  fields?: string[]
  submitLabel?: string
  endpointURL?: string
  className?: string
  includeInvestorOption?: boolean
}

export function ContactFormHolo({ 
  fields = ["name", "email", "company", "message"],
  submitLabel = "Send Message",
  endpointURL = "/api/contact",
  className,
  includeInvestorOption = false
}: ContactFormHoloProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch(endpointURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setStatus("success")
        setFormData({})
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className={cn("glass-panel p-8 rounded-2xl", className)}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {includeInvestorOption && (
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#3DE0FF]">
              Inquiry Type
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#0F0F1F] border border-[#8A2FFF]/30 rounded-lg text-white focus:border-[#8A2FFF] focus:ring-2 focus:ring-[#8A2FFF]/20 focus:outline-none transition-all duration-300"
              required
            >
              <option value="">Select type...</option>
              <option value="general">General Inquiry</option>
              <option value="investor">Investor Inquiry</option>
              <option value="demo">Request Demo</option>
            </select>
          </div>
        )}
        
        {fields.includes("name") && (
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#3DE0FF]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#0F0F1F] border border-[#8A2FFF]/30 rounded-lg text-white focus:border-[#8A2FFF] focus:ring-2 focus:ring-[#8A2FFF]/20 focus:outline-none transition-all duration-300 focus:glow-violet"
              required
            />
          </div>
        )}
        
        {fields.includes("email") && (
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#3DE0FF]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#0F0F1F] border border-[#8A2FFF]/30 rounded-lg text-white focus:border-[#8A2FFF] focus:ring-2 focus:ring-[#8A2FFF]/20 focus:outline-none transition-all duration-300 focus:glow-violet"
              required
            />
          </div>
        )}
        
        {fields.includes("company") && (
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#3DE0FF]">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#0F0F1F] border border-[#8A2FFF]/30 rounded-lg text-white focus:border-[#8A2FFF] focus:ring-2 focus:ring-[#8A2FFF]/20 focus:outline-none transition-all duration-300 focus:glow-violet"
            />
          </div>
        )}
        
        {fields.includes("message") && (
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#3DE0FF]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message || ""}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-[#0F0F1F] border border-[#8A2FFF]/30 rounded-lg text-white focus:border-[#8A2FFF] focus:ring-2 focus:ring-[#8A2FFF]/20 focus:outline-none transition-all duration-300 focus:glow-violet resize-none"
              required
            />
          </div>
        )}
        
        <NeonButton 
          type="submit"
          label={isSubmitting ? "Sending..." : submitLabel}
          variant="primary"
          className="w-full"
        />
        
        {status === "success" && (
          <p className="text-[#3DE0FF] text-center">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-[#FF6B3D] text-center">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  )
}

