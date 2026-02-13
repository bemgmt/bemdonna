import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface HoloFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  link?: string
  className?: string
}

export function HoloFeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  link,
  className 
}: HoloFeatureCardProps) {
  const content = (
    <div className={cn(
      "holo-panel p-8 rounded-xl hover-lift hover-glow transition-all duration-300 h-full group",
      className
    )}>
      <div className="mb-6 inline-block p-4 rounded-lg bg-gradient-to-br from-[#8A2FFF]/20 to-[#3DE0FF]/20 glow-violet group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-[#3DE0FF]" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
      {link && (
        <div className="mt-6 flex items-center text-[#3DE0FF] font-semibold group-hover:translate-x-2 transition-transform duration-300">
          Learn more -&gt;
        </div>
      )}
    </div>
  )

  if (link) {
    return (
      <Link href={link} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}

