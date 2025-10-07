'use client'

import { Copy } from 'lucide-react'

interface CopyButtonProps {
  text: string
  className?: string
  children?: React.ReactNode
}

export function CopyButton({ text, className, children }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <button
      onClick={handleCopy}
      className={className}
    >
      {children || (
        <>
          <Copy size={16} />
          Skopiuj
        </>
      )}
    </button>
  )
}
