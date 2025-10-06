'use client'

import { useState, useEffect } from 'react'
import { Search, Moon, Sun, Menu, X, Mail } from 'lucide-react'
import Link from 'next/link'
import { NewsletterModal } from './NewsletterModal'
import { SearchModal } from './SearchModal'

export function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [newsletterOpen, setNewsletterOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'glass-card shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-primary" />
            <span className="font-bold text-xl">TrustyAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/categories" className="text-muted hover:text-text transition">
              Narzędzia
            </Link>
            <Link href="/prompts" className="text-muted hover:text-text transition">
              Prompty
            </Link>
            <Link href="/compare" className="text-muted hover:text-text transition">
              Porównaj
            </Link>
            <button
              onClick={() => setNewsletterOpen(true)}
              className="text-muted hover:text-text transition flex items-center gap-1"
            >
              <Mail size={16} />
              Newsletter
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-surface transition"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-surface transition" 
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <Link href="/submit" className="hidden md:block">
              <button className="btn-primary text-sm">
                Dodaj narzędzie
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-surface transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link
                href="/categories"
                className="py-2 text-muted hover:text-text transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Narzędzia
              </Link>
              <Link
                href="/prompts"
                className="py-2 text-muted hover:text-text transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prompty
              </Link>
              <Link
                href="/compare"
                className="py-2 text-muted hover:text-text transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Porównaj
              </Link>
              <button
                onClick={() => {
                  setNewsletterOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="py-2 text-muted hover:text-text transition text-left flex items-center gap-2"
              >
                <Mail size={16} />
                Newsletter
              </button>
              <Link
                href="/submit"
                className="py-2 text-muted hover:text-text transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Zgłoś narzędzie
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </nav>
  )
}

