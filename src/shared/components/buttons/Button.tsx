import { HTMLProps, ReactNode } from 'react'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="flex items-center justify-center px-4 gap-2 h-[40px] rounded-medium bg-red-50 text-gray-light-50 hover:bg-red-100 transition-colors">
      {children}
    </button>
  )
}
