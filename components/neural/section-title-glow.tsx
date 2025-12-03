import { cn } from "@/lib/utils"

interface SectionTitleGlowProps {
  title: string
  subtitle?: string
  alignment?: "left" | "center"
  className?: string
}

export function SectionTitleGlow({ 
  title, 
  subtitle, 
  alignment = "center",
  className 
}: SectionTitleGlowProps) {
  const alignmentStyles = {
    left: "text-left",
    center: "text-center"
  }

  return (
    <div className={cn("mb-16 animate-fade-in", alignmentStyles[alignment], className)}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text text-glow-violet">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-[#8A2FFF] via-[#3DE0FF] to-[#6B4FFF] rounded-full animate-gradient-flow" />
    </div>
  )
}

