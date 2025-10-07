import { mockTools } from '@/lib/mockData'

interface StructuredDataProps {
  type: 'website' | 'tool' | 'category' | 'workflow'
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://trustyai.pl'
    
    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "TrustyAI",
          "description": "Zaufany katalog narzędzi AI z funkcją wyszukiwania, porównywania i szczegółowych recenzji",
          "url": baseUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "TrustyAI",
            "url": baseUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          }
        }
      
      case 'tool':
        if (!data) return null
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": data.name,
          "description": data.shortDescription,
          "url": `${baseUrl}/tool/${data.slug}`,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": data.pricingModels.includes('free') ? "0" : "varies",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "ratingCount": "100"
          },
          "publisher": {
            "@type": "Organization",
            "name": "TrustyAI"
          }
        }
      
      case 'category':
        if (!data) return null
        return {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": data.name,
          "description": data.description,
          "url": `${baseUrl}/category/${data.slug}`,
          "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": data.tools?.length || 0,
            "itemListElement": data.tools?.map((tool: any, index: number) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": tool.name,
                "url": `${baseUrl}/tool/${tool.slug}`
              }
            }))
          }
        }
      
      case 'workflow':
        if (!data) return null
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": data.title,
          "description": data.description,
          "url": `${baseUrl}/workflowy/${data.id}`,
          "totalTime": data.estimatedTime,
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "step": [
            {
              "@type": "HowToStep",
              "name": "Use the prompt",
              "text": data.prompt,
              "url": `${baseUrl}/workflowy/${data.id}`
            }
          ],
          "supply": [
            {
              "@type": "HowToSupply",
              "name": data.primaryTool.name
            }
          ]
        }
      
      default:
        return null
    }
  }

  const structuredData = getStructuredData()
  
  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
