'use client'

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.href = '/fonts/inter.woff2'
      fontLink.as = 'font'
      fontLink.type = 'font/woff2'
      fontLink.crossOrigin = 'anonymous'
      document.head.appendChild(fontLink)

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = src
        link.as = 'image'
        document.head.appendChild(link)
      })
    }

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Preconnect to external domains
    const preconnectExternalDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://api.mailerlite.com'
      ]

      domains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = domain
        document.head.appendChild(link)
      })
    }

    preloadCriticalResources()
    optimizeImages()
    preconnectExternalDomains()
  }, [])

  return null
}

// Hook for measuring Core Web Vitals
export function useWebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      // This would integrate with web-vitals library
      // import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'
      console.log('Web Vitals monitoring enabled')
    }
  }, [])
}
