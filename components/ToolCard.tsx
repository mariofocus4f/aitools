import Link from 'next/link'
import { ExternalLink, TrendingUp } from 'lucide-react'
import type { Tool } from '@/types'

interface ToolCardProps {
  tool: Tool
  showAffiliateInfo?: boolean
}

export function ToolCard({ tool, showAffiliateInfo = false }: ToolCardProps) {
  const pricingBadges = tool.pricingModels.map(model => {
    const labels: Record<string, string> = {
      free: 'Darmowe',
      freemium: 'Freemium',
      subscription: 'Subskrypcja',
      pay_per_use: 'Pay-per-use'
    }
    return labels[model] || model
  })

  return (
    <div className="group rounded-2xl glass-card shadow-card p-5 hover:shadow-card-hover transition-all duration-200">
      {/* Header */}
      <div className="flex items-start gap-3">
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

      {/* Description */}
      <p className="mt-3 text-muted line-clamp-2 text-sm">
        {tool.shortDescription}
      </p>

      {/* Badges */}
      <div className="mt-3 flex flex-wrap gap-2">
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
      <div className="mt-4 flex gap-2">
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

      {/* Affiliate disclosure */}
      {tool.affiliateProgram && showAffiliateInfo && (
        <p className="mt-2 text-xs text-muted italic">
          Link partnerski
        </p>
      )}
    </div>
  )
}

