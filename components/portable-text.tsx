'use client'

import { PortableText as PortableTextComponent } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/client'

interface PortableTextProps {
  content: PortableTextBlock[]
}

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) return null
      
      const imageUrl = urlFor(value)
        .width(800)
        .height(600)
        .fit('max')
        .auto('format')
        .url()

      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={value.alt || 'Image'}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-sm text-foreground/60 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    code: ({ value }: { value: any }) => {
      return (
        <pre className="bg-[#030314] border border-white/10 rounded-lg p-4 overflow-x-auto my-4">
          <code className="text-sm text-foreground/90">{value.code}</code>
        </pre>
      )
    },
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: any }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-accent hover:underline"
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold mb-4 mt-8 gradient-text">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-bold mb-3 mt-6 gradient-text">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-semibold mb-2 mt-4">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-xl font-semibold mb-2 mt-3">{children}</h4>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-accent pl-4 my-4 italic text-foreground/80">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-4 text-foreground/90 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/90">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/90">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="ml-4">{children}</li>
    ),
  },
}

export default function PortableText({ content }: PortableTextProps) {
  if (!content) return null

  return (
    <div className="prose prose-invert max-w-none">
      <PortableTextComponent value={content} components={components} />
    </div>
  )
}

