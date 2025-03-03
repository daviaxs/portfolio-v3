'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronsUpDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

export interface DropdownButtonProps {
  icon: React.ReactNode
  text: string
  supportText?: string
  options: { value: string; label: string }[]
  onSelect: (value: string) => void
}

export function DropdownButton({
  icon,
  text,
  supportText,
  options,
  onSelect,
}: DropdownButtonProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleSelect = (val: string) => {
    setValue(val)
    onSelect(val)
    setOpen(false)
  }

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          'flex items-center justify-between w-full h-11 px-2 rounded-md transition-colors',
          open
            ? 'bg-gray-light-50 shadow-sm dark:bg-gray-dark-50'
            : 'bg-transparent hover:bg-gray-light-200 dark:hover:bg-gray-dark-200',
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          {icon}
          <div className="flex flex-col text-start">
            <span className="text-md font-medium">{text}</span>
            {supportText && (
              <span className="text-xs text-gray-dark-400 dark:text-gray-light-400">
                {supportText}
              </span>
            )}
          </div>
        </div>
        <ChevronsUpDown size={16} />
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white dark:bg-gray-800 shadow-lg">
          <ul className="max-h-60 overflow-auto py-1">
            {options.map((option) => (
              <li
                key={option.value}
                className="flex items-center px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleSelect(option.value)}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4 transition-opacity',
                    value === option.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
