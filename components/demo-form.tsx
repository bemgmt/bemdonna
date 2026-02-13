"use client"

import type React from "react"

import { useState } from "react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string
  email: string
  company: string
  role: string
  useCase: string
  type: "waitlist" | "demo"
}

export default function DemoForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    useCase: "",
    type: "waitlist",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send to email via API route
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", company: "", role: "", useCase: "", type: "waitlist" })
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        console.error("Form submission error:", data)
        alert(`Error: ${data.error || "Failed to send email. Please try again or contact us at derek@bem.studio"}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div ref={formRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-2xl mx-auto">
        <div className="glass-card p-8 rounded-xl glow-accent text-center">
          <h2 className="text-3xl font-bold mb-2 gradient-text">
            {formData.type === "waitlist" ? "Join the Waitlist" : "Request a Demo"}
          </h2>
          <p className="text-foreground/70 mb-6">
            {formData.type === "waitlist"
              ? "Be among the first to deploy the AI operations layer"
              : "See how DONNA runs workflows across your systems"}
          </p>

          {submitSuccess && (
            <div className="mb-4 p-4 rounded-lg bg-secondary/20 border border-secondary/50 text-secondary">
              <p className="font-semibold">Success! We'll be in touch soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Waitlist vs Demo toggle */}
            <div className="flex gap-3 mb-6 justify-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="waitlist"
                  checked={formData.type === "waitlist"}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span>Join Waitlist</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="demo"
                  checked={formData.type === "demo"}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span>Request Demo</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="demo-name" className="block text-sm text-foreground/70 mb-1">Full Name</label>
                <input
                  id="demo-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="demo-email" className="block text-sm text-foreground/70 mb-1">Email Address</label>
                <input
                  id="demo-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="demo-company" className="block text-sm text-foreground/70 mb-1">Company Name</label>
                <input
                  id="demo-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="demo-role" className="block text-sm text-foreground/70 mb-1">Your Role</label>
                <select
                  id="demo-role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors [&>option]:bg-background [&>option]:text-foreground"
                >
                  <option value="">Select Your Role</option>
                  <option value="founder">Founder / CEO</option>
                  <option value="operations">Operations Manager</option>
                  <option value="hr">HR Manager</option>
                  <option value="executive">Executive</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="demo-usecase" className="block text-sm text-foreground/70 mb-1">Use Case (Optional)</label>
              <textarea
                id="demo-usecase"
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 transition-colors resize-none"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} variant="donnaPrimary" size="lg" className="w-full">
              {isSubmitting ? "Submitting..." : formData.type === "waitlist" ? "Join Waitlist" : "Request Demo"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
