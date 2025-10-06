'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

interface SearchInputProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export function SearchInput({ 
  placeholder = 'Czego szukasz?',
  onSearch,
  className = ''
}: SearchInputProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={20} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-border bg-surface text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-lg"
      />
    </form>
  )
}

