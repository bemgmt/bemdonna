'use client'

import { useState, ReactNode } from 'react'

interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface TabbedContentProps {
  tabs: Tab[]
  className?: string
}

export function TabbedContent({ tabs, className = '' }: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-4 mb-8 border-b border-[#8A2FFF]/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-semibold transition-all duration-300 relative ${
              activeTab === tab.id
                ? 'text-[#8A2FFF]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8A2FFF] to-[#6B4FFF]" />
            )}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}

