'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface NavButtonProps {
  href: string
  icon: ReactNode
  text: string
  active?: boolean
}

export function NavButton({ href, icon, text }: NavButtonProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href}>
      <div
        className={cn(
          'flex items-center w-full h-11 gap-2 px-2 rounded-medium transition-colors cursor-pointer',

          isActive
            ? 'bg-gray-light-50 dark:bg-gray-dark-200 shadow-[0px_4px_4px_rgba(0,0,0,08%)]'
            : 'bg-transparent shadow-none hover:bg-gray-light-200 dark:hover:bg-gray-dark-50',
        )}
      >
        {icon}
        <span className="text-md font-medium">{text}</span>
      </div>
    </Link>
  )
}
