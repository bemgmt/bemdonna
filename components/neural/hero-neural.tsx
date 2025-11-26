"use client"

import Image from "next/image"
import { NeonButton } from "./neon-button"
import { cn } from "@/lib/utils"

interface HeroNeuralProps {
  title: string
  subtitle: string
  primaryCTA: { label: string; link: string }
  secondaryCTA?: { label: string; link: string }
  backgroundAnimation?: boolean
  brainGraphic?: string
  className?: string
}

export function HeroNeural({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA,
  backgroundAnimation = true,
  brainGraphic = "/hero-ai-brain-wide.jpg",
  className 
}: HeroNeuralProps) {
  return (
    <section className={cn(
      "relative min-h-screen flex items-center justify-center overflow-hidden",
      className
    )}>
      {/* Animated Background Layers */}
      {backgroundAnimation && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#030314] via-[#0A0A1A] to-[#030314]" />
          <div className="absolute inset-0 neural-grid-animated opacity-30" />
          <div className="absolute inset-0 circuitry-lines" />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text text-glow-violet leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NeonButton 
                label={primaryCTA.label}
                link={primaryCTA.link}
                variant="primary"
              />
              {secondaryCTA && (
                <NeonButton 
                  label={secondaryCTA.label}
                  link={secondaryCTA.link}
                  variant="outline"
                />
              )}
            </div>
          </div>
          
          {/* Brain Graphic */}
          <div className="relative animate-float">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8A2FFF] to-[#3DE0FF] rounded-full blur-3xl opacity-30 animate-pulse-glow" />
              <Image
                src={brainGraphic}
                alt="AI Neural Network"
                width={600}
                height={600}
                className="relative z-10 rounded-2xl glow-violet"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030314] to-transparent" />
    </section>
  )
}

