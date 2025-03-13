import { ReactElement } from 'react'

interface BadgeProps {
  icon: ReactElement
  text: string
}

export function Badge({ icon, text }: BadgeProps) {
  return (
    <div className="flex items-center justify-center select-none h-9 gap-2 px-4 rounded-medium bg-gray-light-50 dark:bg-gray-dark-100 text-gray-dark-50 dark:text-gray-light-50 border border-gray-light-100 dark:border-gray-dark-200 shadow-badge">
      {icon}

      <p>{text}</p>
    </div>
  )
}
