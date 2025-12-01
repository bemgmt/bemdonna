import { X, Check } from 'lucide-react'

interface BeforeAfterProps {
  before: string[]
  after: string[]
  className?: string
}

export function BeforeAfter({ before, after, className = '' }: BeforeAfterProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 ${className}`}>
      <div className="glass-panel p-8 rounded-xl border-[#FF6B3D]/30">
        <h3 className="text-2xl font-bold mb-6 text-[#FF6B3D]">Before DONNA</h3>
        <ul className="space-y-4">
          {before.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <X className="w-5 h-5 text-[#FF6B3D] flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="glass-panel p-8 rounded-xl border-[#3DE0FF]/30">
        <h3 className="text-2xl font-bold mb-6 text-[#3DE0FF]">After DONNA</h3>
        <ul className="space-y-4">
          {after.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#3DE0FF] flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

