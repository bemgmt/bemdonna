'use client'

// Stub PortableText component for build compatibility
// TODO: Install @portabletext/react when Sanity is fully configured

export function PortableText({ value }: { value: any }) {
  // Simple fallback renderer for build compatibility
  if (!value) return null

  // If value is a string, just render it
  if (typeof value === 'string') {
    return <div className="prose prose-lg dark:prose-invert max-w-none">{value}</div>
  }

  // If value is an array of blocks, render basic content
  if (Array.isArray(value)) {
    return (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {value.map((block: any, index: number) => {
          if (block._type === 'block') {
            const text = block.children?.map((child: any) => child.text).join('') || ''

            switch (block.style) {
              case 'h1':
                return <h1 key={index} className="text-4xl font-bold mb-6 mt-8">{text}</h1>
              case 'h2':
                return <h2 key={index} className="text-3xl font-bold mb-4 mt-8">{text}</h2>
              case 'h3':
                return <h3 key={index} className="text-2xl font-bold mb-3 mt-6">{text}</h3>
              case 'h4':
                return <h4 key={index} className="text-xl font-bold mb-2 mt-4">{text}</h4>
              default:
                return <p key={index} className="mb-4 leading-relaxed">{text}</p>
            }
          }
          return null
        })}
      </div>
    )
  }

  return <div className="prose prose-lg dark:prose-invert max-w-none">Content not available</div>
}

