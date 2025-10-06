import { MetadataRoute } from 'next'
import { mockTools, mockCategories } from '@/lib/mockData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trustyai.pl'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = mockCategories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Tool pages
  const toolPages: MetadataRoute.Sitemap = mockTools.map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    lastModified: tool.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [...staticPages, ...categoryPages, ...toolPages]
}

