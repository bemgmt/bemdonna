import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface VerticalBlockProps {
  industryName: string
  description: string
  automations: string[]
  useCases: string[]
  icon: LucideIcon
  className?: string
}

export function VerticalBlock({ 
  industryName, 
  description, 
  automations, 
  useCases, 
  icon: Icon,
  className 
}: VerticalBlockProps) {
  return (
    <div className={cn(
      "holo-panel p-8 rounded-2xl hover-lift transition-all duration-300 group",
      className
    )}>
      <div className="flex items-start gap-6 mb-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#8A2FFF]/30 to-[#3DE0FF]/30 glow-violet group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10 text-[#3DE0FF]" />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-3 gradient-text-violet">
            {industryName}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#8A2FFF] to-transparent mb-6" />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#3DE0FF]">
            Key Automations
          </h4>
          <ul className="space-y-2">
            {automations.map((automation, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-[#8A2FFF] mt-1">▸</span>
                <span>{automation}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#FF1F99]">
            Use Cases
          </h4>
          <ul className="space-y-2">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-[#FF1F99] mt-1">▸</span>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

