export interface Prompt {
  id: string
  title: string
  slug: string
  description: string
  content: string
  role: PromptRole
  category: string
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  useCase: string
  recommendedTools: string[] // Tool IDs
  exampleOutput?: string
  variables?: PromptVariable[]
  author?: string
  likes: number
  views: number
  isPremium: boolean
  createdAt: Date
  updatedAt: Date
}

export interface PromptVariable {
  name: string
  description: string
  example: string
  required: boolean
}

export interface PromptRole {
  id: string
  name: string
  slug: string
  icon: string
  description: string
  color: string
}

export interface PromptPack {
  id: string
  name: string
  description: string
  prompts: Prompt[]
  role: PromptRole
  isPremium: boolean
}

