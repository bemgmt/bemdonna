'use client'

import Image from 'next/image'

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
  return (
    <div className={`${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-center mb-12 gradient-text">{title}</h3>
      )}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-12 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
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

