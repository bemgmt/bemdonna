'use client'

import { useState } from 'react'
import { Play, Pause } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
  className?: string
}

export function VideoPlayer({ src, poster, title, className = '' }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className={`relative rounded-xl overflow-hidden glass-panel ${className}`}>
      <video
        className="w-full h-full object-cover"
        poster={poster}
        controls={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <button
            onClick={() => setIsPlaying(true)}
            className="w-20 h-20 rounded-full bg-[#8A2FFF] hover:bg-[#6B4FFF] transition-all duration-300 flex items-center justify-center group"
            aria-label={`Play ${title || 'video'}`}
          >
            <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      )}
    </div>
  )
}

