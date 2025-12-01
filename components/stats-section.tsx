interface Stat {
  value: string
  label: string
  suffix?: string
}

interface StatsSectionProps {
  stats: Stat[]
  className?: string
}

export function StatsSection({ stats, className = '' }: StatsSectionProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
            {stat.value}
            {stat.suffix && <span className="text-[#3DE0FF]">{stat.suffix}</span>}
          </div>
          <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

