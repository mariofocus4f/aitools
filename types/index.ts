export interface Tool {
  id: string
  name: string
  domain: string
  slug: string
  shortDescription: string
  longDescription: string
  logo?: string
  features: string[]
  pricingModels: PricingModel[]
  pricingDetails?: PricingTier[]
  categories: Category[]
  tags: string[]
  integrations: string[]
  affiliateProgram?: AffiliateProgram
  verifiedByEditor: boolean
  screenshots: string[]
  websiteUrl: string
  documentationUrl?: string
  currentPromotion?: {
    title: string
    description: string
    discount?: string
    validUntil?: Date
    code?: string
  }
  foundedYear?: number
  teamSize?: string
  pros?: string[]
  cons?: string[]
  bestFor?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface PricingTier {
  name: string
  price: number
  currency: string
  period: 'month' | 'year' | 'one-time'
  features: string[]
  popular?: boolean
}

export type PricingModel = 'free' | 'freemium' | 'subscription' | 'pay_per_use'

export interface AffiliateProgram {
  id: string
  toolId: string
  commissionType: 'CPA' | 'recurring' | 'fixed'
  commissionValue: number
  cookieWindowDays: number
  network: string
  affiliateLink: string
  estimatedEpc: number
  lastChecked: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  parentId?: string
  icon?: string
  description?: string
}

export interface Submission {
  id: string
  submitterName: string
  submitterEmail: string
  toolData: Partial<Tool>
  status: 'new' | 'under_review' | 'approved' | 'rejected'
  reviewerComments?: string
  createdAt: Date
  updatedAt: Date
}

export interface NewsletterSubscription {
  email: string
  subscribedAt: Date
}

export interface FilterOptions {
  categories?: string[]
  pricingModels?: PricingModel[]
  hasAffiliate?: boolean
  verified?: boolean
  search?: string
}

export interface SortOption {
  field: 'popular' | 'newest' | 'editor_pick' | 'highest_affiliate'
  direction: 'asc' | 'desc'
}

