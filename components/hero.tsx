"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const dots: Array<{ x: number; y: number; vx: number; vy: number; opacity: number }> = []
    const dotCount = 50

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(6, 182, 212, 0.15)"
      ctx.strokeStyle = "rgba(6, 182, 212, 0.1)"
      ctx.lineWidth = 1

      dots.forEach((dot) => {
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < 0) dot.x = canvas.width
        if (dot.x > canvas.width) dot.x = 0
        if (dot.y < 0) dot.y = canvas.height
        if (dot.y > canvas.height) dot.y = 0

        ctx.globalAlpha = dot.opacity
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1

      dots.forEach((dot, i) => {
        dots.slice(i + 1).forEach((other) => {
          const dx = dot.x - other.x
          const dy = dot.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.globalAlpha = (1 - distance / 100) * 0.1
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Clean gradient background - no image for aidonna.co minimalism */}
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-black z-0" />

      {/* Animated canvas overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30 z-10" />

      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="animate-slide-up">
            <p className="text-sm font-medium text-[#22d3ee] uppercase tracking-wider mb-4">
              Operational intelligence
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="gradient-text">One AI.</span> Every Industry.
            </h1>

            <p className="text-base md:text-xl text-foreground/90 mb-4 leading-relaxed">
              Operational intelligence built to run a business, not talk about it.
            </p>
            <p className="text-base md:text-lg text-foreground/70 mb-6 md:mb-8 leading-relaxed">
              Designed to coordinate communication, decisions, and execution across how work actually happens.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => {
                  const form = document.getElementById("demo-form")
                  form?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold text-lg glow-accent"
              >
                Request Access
              </button>
              <button
                onClick={() => {
                  const form = document.getElementById("demo-form")
                  form?.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300 font-semibold text-lg"
              >
                Join Waitlist
              </button>
            </div>

            <div className="text-sm text-foreground/70 flex items-center gap-2">
              <span>⬢</span>
              <span>Enterprise-grade security • GDPR compliant • SOC 2 Type II</span>
              <span className="ml-2 px-2 py-0.5 rounded bg-accent/20 text-accent text-xs font-medium">Beta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
