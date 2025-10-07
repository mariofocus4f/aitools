interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
}

export function ResponsiveContainer({ children, className = '' }: ResponsiveContainerProps) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export function MobileFirstGrid({ children, className = '' }: ResponsiveContainerProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
      {children}
    </div>
  )
}

export function MobileStack({ children, className = '' }: ResponsiveContainerProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 ${className}`}>
      {children}
    </div>
  )
}
