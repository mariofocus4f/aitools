'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-card text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ups! Coś poszło nie tak
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub wróć do strony głównej.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
              <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                {error.message}
              </p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Spróbuj ponownie
            </button>
            
            <Link href="/" className="flex-1">
              <button className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Strona główna
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
