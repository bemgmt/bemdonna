'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Logo {
  name: string
  src: string
  width?: number
  height?: number
}

interface LogoCarouselProps {
  logos: Logo[]
  title?: string
  className?: string
}

export function LogoCarousel({ logos, title, className = '' }: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className={`${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-center mb-12 gradient-text">{title}</h3>
      )}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div 
          className={`flex animate-scroll gap-12 items-center ${isPaused ? 'pause-animation' : ''}`}
          aria-label="Partner logos carousel"
          role="list"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              role="listitem"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width || 120}
                height={logo.height || 40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

