'use client'

import Link from 'next/link'
import { Search, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-card text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Strona nie została znaleziona
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/" className="flex-1">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                <Home className="w-4 h-4" />
                Strona główna
              </button>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Wróć
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Może zainteresują Cię:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/categories" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Kategorie
              </Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Link href="/workflowy" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Prompty & Workflowy
              </Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Link href="/compare" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Porównaj
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
