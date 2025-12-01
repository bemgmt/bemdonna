import { ArrowRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface WorkflowStep {
  icon: LucideIcon
  title: string
  description: string
}

interface WorkflowDiagramProps {
  steps: WorkflowStep[]
  className?: string
}

export function WorkflowDiagram({ steps, className = '' }: WorkflowDiagramProps) {
  return (
    <div className={`${className}`}>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="flex items-center gap-6">
              <div className="glass-panel p-6 rounded-xl flex-1 hover:border-[#8A2FFF] transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8A2FFF] to-[#FF1F99] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-6 h-6 text-[#8A2FFF] flex-shrink-0" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

