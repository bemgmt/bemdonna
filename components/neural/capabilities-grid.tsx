import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CapabilityItem {
  icon: LucideIcon
  title: string
  description: string
}

interface CapabilitiesGridProps {
  items: CapabilityItem[]
  columns?: 3 | 4
  className?: string
}

export function CapabilitiesGrid({ 
  items, 
  columns = 3,
  className 
}: CapabilitiesGridProps) {
  const gridCols = {
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }

  return (
    <div className={cn(
      "grid gap-6 neural-grid-animated",
      gridCols[columns],
      className
    )}>
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <div 
            key={index}
            className="glass-panel p-6 rounded-xl hover-lift transition-all duration-300 group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-[#8A2FFF]/20 to-[#3DE0FF]/20 group-hover:glow-violet transition-all duration-300">
              <Icon className="w-6 h-6 text-[#3DE0FF]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-glow-blue transition-all duration-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

