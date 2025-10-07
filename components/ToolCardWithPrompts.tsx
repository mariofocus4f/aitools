'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, TrendingUp, Copy, ChevronDown, ChevronUp } from 'lucide-react'
import type { Tool } from '@/types'
import { workflowPrompts } from '@/lib/workflowyData'

interface ToolCardWithPromptsProps {
  tool: Tool
  showAffiliateInfo?: boolean
}

export function ToolCardWithPrompts({ tool, showAffiliateInfo = false }: ToolCardWithPromptsProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'prompts'>('overview')
  const [expandedPrompts, setExpandedPrompts] = useState(false)

  // Znajdź prompty związane z tym narzędziem
  const relatedPrompts = workflowPrompts.filter(workflow => 
    workflow.primaryTool.id === tool.id || 
    workflow.alternativeTools.some(altTool => altTool.id === tool.id)
  )

  const pricingBadges = tool.pricingModels.map(model => {
    const labels: Record<string, string> = {
      free: 'Darmowe',
      freemium: 'Freemium',
      subscription: 'Subskrypcja',
      pay_per_use: 'Pay-per-use'
    }
    return labels[model] || model
  })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // TODO: Add toast notification
  }

  return (
    <div className="group rounded-2xl glass-card shadow-card hover:shadow-card-hover transition-all duration-200">
      {/* Header */}
      <div className="flex items-start gap-3 p-5 pb-0">
        {tool.logo ? (
          <img 
            src={tool.logo} 
            alt={`${tool.name} logo`} 
            className="size-12 rounded-xl object-cover flex-shrink-0"
          />
        ) : (
          <div className="size-12 rounded-xl gradient-primary flex-shrink-0" />
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/tool/${tool.slug}`}>
              <h3 className="text-lg font-semibold text-text dark:text-white hover:text-primary-500 transition line-clamp-1">
                {tool.name}
              </h3>
            </Link>
            {tool.verifiedByEditor && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-primary-50 text-primary-700 border border-primary-100 whitespace-nowrap">
                Zweryfikowane
              </span>
            )}
          </div>
          <p className="text-sm text-muted mt-1">{tool.domain}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 pt-3">
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              activeTab === 'overview'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-muted hover:text-text'
            }`}
          >
            Przegląd
          </button>
          {relatedPrompts.length > 0 && (
            <button
              onClick={() => setActiveTab('prompts')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                activeTab === 'prompts'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-muted hover:text-text'
              }`}
            >
              Prompty
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary-100 text-primary-600 rounded-full">
                {relatedPrompts.length}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-5">
        {activeTab === 'overview' ? (
          <>
            {/* Description */}
            <p className="text-muted line-clamp-2 text-sm mb-3">
              {tool.shortDescription}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {pricingBadges.slice(0, 2).map(badge => (
                <span 
                  key={badge}
                  className="px-2 py-1 text-xs rounded-full bg-surface text-muted border border-border"
                >
                  {badge}
                </span>
              ))}
              
              {tool.affiliateProgram && showAffiliateInfo && (
                <span className="px-2 py-1 text-xs rounded-full bg-success/10 text-success border border-success/20 flex items-center gap-1">
                  <TrendingUp size={12} />
                  {tool.affiliateProgram.commissionType === 'recurring' ? 'Recurring' : 'CPA'}
                </span>
              )}

              {tool.categories.length > 0 && (
                <span className="px-2 py-1 text-xs rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  {tool.categories[0].name}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="flex gap-2">
              <Link href={`/tool/${tool.slug}`} className="flex-1">
                <button className="w-full rounded-xl bg-gradient-to-r from-primary-500 to-accent-blue text-white py-2.5 font-medium text-sm hover:shadow-lg transition-all hover:scale-[1.02]">
                  Zobacz szczegóły
                </button>
              </Link>
              
              {tool.affiliateProgram && (
                <a 
                  href={`/redirect?tool_id=${tool.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border hover:bg-surface transition flex items-center justify-center"
                  title="Otwórz narzędzie"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Prompts Tab */}
            <div className="space-y-3">
              <p className="text-sm text-muted mb-3">
                Gotowe prompty do użycia z {tool.name}:
              </p>
              
              {relatedPrompts.slice(0, expandedPrompts ? relatedPrompts.length : 2).map((workflow) => (
                <div key={workflow.id} className="border border-border rounded-lg p-3 bg-surface/50">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-medium text-text dark:text-white line-clamp-1">
                      {workflow.title}
                    </h4>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <span className="text-xs">★</span>
                      <span className="text-xs font-medium">{workflow.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted mb-3 line-clamp-2">
                    {workflow.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(workflow.prompt)}
                      className="flex items-center gap-1 px-2 py-1 text-xs bg-primary-100 text-primary-600 rounded hover:bg-primary-200 transition-colors"
                    >
                      <Copy size={12} />
                      Skopiuj prompt
                    </button>
                    <Link href={`/workflowy/${workflow.id}`}>
                      <button className="text-xs text-primary-600 hover:text-primary-700 transition-colors">
                        Zobacz szczegóły
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
              
              {relatedPrompts.length > 2 && (
                <button
                  onClick={() => setExpandedPrompts(!expandedPrompts)}
                  className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {expandedPrompts ? (
                    <>
                      <ChevronUp size={16} />
                      Pokaż mniej
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Pokaż więcej ({relatedPrompts.length - 2})
                    </>
                  )}
                </button>
              )}
              
              {relatedPrompts.length === 0 && (
                <div className="text-center py-4">
                  <p className="text-sm text-muted">
                    Brak dostępnych promptów dla tego narzędzia
                  </p>
                  <Link href="/workflowy">
                    <button className="mt-2 text-sm text-primary-600 hover:text-primary-700 transition-colors">
                      Przeglądaj wszystkie prompty
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
