import { Check } from "lucide-react"
import { NeonButton } from "./neon-button"
import { cn } from "@/lib/utils"

interface PricingTierCardProps {
  tierName: string
  price: string
  features: string[]
  highlight?: boolean
  ctaLabel?: string
  ctaLink?: string
  className?: string
}

export function PricingTierCard({ 
  tierName, 
  price, 
  features, 
  highlight = false,
  ctaLabel = "Get Started",
  ctaLink = "/contact",
  className 
}: PricingTierCardProps) {
  return (
    <div className={cn(
      "holo-panel p-8 rounded-2xl hover-lift transition-all duration-300 relative overflow-hidden",
      highlight && "ring-2 ring-[#8A2FFF] animate-pulse-glow scale-105",
      className
    )}>
      {highlight && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#8A2FFF] to-[#FF1F99] text-white px-6 py-2 text-sm font-bold rounded-bl-xl">
          POPULAR
        </div>
      )}
      
      <div className="circuitry-lines absolute inset-0 opacity-30" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2 gradient-text-violet">
          {tierName}
        </h3>
        
        <div className="mb-8">
          <span className="text-5xl font-bold text-white">{price}</span>
          {price !== "Contact Us" && <span className="text-gray-400 ml-2">/month</span>}
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#3DE0FF] mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <NeonButton 
          label={ctaLabel}
          link={ctaLink}
          variant={highlight ? "primary" : "outline"}
          className="w-full"
        />
      </div>
    </div>
  )
}

