import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureGrid({ features, columns = 3, className = '' }: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8 ${className}`}>
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div
            key={index}
            className="glass-panel p-8 rounded-xl hover:border-[#8A2FFF] transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#8A2FFF] to-[#6B4FFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}

