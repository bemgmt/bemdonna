'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const search = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await response.json()
        setResults(data.results || [])
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(search, 300)
    return () => clearTimeout(debounce)
  }, [query])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline text-foreground/70">Search</span>
          <kbd className="hidden sm:inline px-2 py-1 text-xs rounded bg-white/10 border border-white/10">
            ⌘K
          </kbd>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] z-50 glass-card border border-white/10 rounded-lg shadow-xl">
          <div className="p-4 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/50" />
              <input
                type="text"
                placeholder="Search pages, products, industries, and use cases..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-foreground/50"
                autoFocus
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="p-4 overflow-y-auto max-h-[60vh]">
            {loading ? (
              <div className="text-center py-8 text-foreground/70">Searching...</div>
            ) : results.length > 0 ? (
              <div className="space-y-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    onClick={() => setOpen(false)}
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-foreground/90">{result.title}</div>
                    <div className="text-xs text-foreground/60 mt-1">{result.type}</div>
                    {result.description && (
                      <div className="text-sm text-foreground/70 mt-1 line-clamp-2">
                        {result.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            ) : query.trim() ? (
              <div className="text-center py-8 text-foreground/70">
                No results found for &quot;{query}&quot;
              </div>
            ) : (
              <div className="text-center py-8 text-foreground/70">
                Start typing to search...
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

