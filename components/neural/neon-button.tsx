"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface NeonButtonProps {
  label: string
  link?: string
  variant?: "primary" | "outline"
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

export function NeonButton({ 
  label, 
  link, 
  variant = "primary", 
  onClick, 
  className,
  type = "button" 
}: NeonButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 relative overflow-hidden group"
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-[#8A2FFF] to-[#6B4FFF] text-white hover:shadow-[0_0_30px_rgba(138,47,255,0.6)] hover:scale-105",
    outline: "bg-transparent border-2 border-[#8A2FFF] text-[#8A2FFF] hover:bg-[#8A2FFF]/10 hover:shadow-[0_0_20px_rgba(138,47,255,0.4)]"
  }

  const content = (
    <>
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#3DE0FF] to-[#FF1F99] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </>
  )

  if (link) {
    return (
      <Link 
        href={link} 
        className={cn(baseStyles, variantStyles[variant], className)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {content}
    </button>
  )
}

