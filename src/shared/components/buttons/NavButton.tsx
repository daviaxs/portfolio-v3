'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavButtonProps {
  href: string
  icon: ReactNode
  text: string
}

export function NavButton({ href, icon, text }: NavButtonProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href}>
      <div
        className={`flex items-center w-full h-11 px-2 rounded-md transition-colors ${
          isActive
            ? 'bg-gray-light-50 shadow-sm dark:bg-gray-dark-50'
            : 'bg-transparent hover:bg-gray-light-200 dark:hover:bg-gray-dark-200'
        }`}
      >
        {icon}
        <span className="ml-2 text-md font-medium">{text}</span>
      </div>
    </Link>
  )
}
