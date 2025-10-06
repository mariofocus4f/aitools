'use client'

import { Prompt } from '@/types/prompts'
import { Copy, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface PromptCardProps {
  prompt: Prompt
}

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="glass-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <span className="text-3xl">{prompt.role.icon}</span>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1 group-hover:text-primary-500 transition">
              {prompt.title}
            </h3>
            <p className="text-xs text-muted">{prompt.role.name}</p>
          </div>
        </div>
        {prompt.isPremium && (
          <span className="px-2 py-1 rounded-full bg-gradient-primary text-white text-xs font-semibold">
            PRO
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted mb-4 line-clamp-2">
        {prompt.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-surface border border-border"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mb-4 text-xs text-muted">
        <span>❤️ {prompt.likes}</span>
        <span>👁️ {prompt.views}</span>
        <span className="ml-auto px-2 py-1 rounded bg-surface capitalize">
          {prompt.difficulty}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="btn-secondary flex-1 text-sm flex items-center justify-center gap-2"
        >
          <Copy size={14} />
          {copied ? 'Skopiowano!' : 'Kopiuj prompt'}
        </button>
        <Link href={`/prompts/${prompt.slug}`}>
          <button className="btn-primary text-sm px-4 flex items-center gap-2">
            <ExternalLink size={14} />
          </button>
        </Link>
      </div>

      {/* Use Case */}
      {prompt.useCase && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted mb-1">Zastosowanie:</p>
          <p className="text-xs font-medium">{prompt.useCase}</p>
        </div>
      )}
    </div>
  )
}
