'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronsUpDown } from 'lucide-react'
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
          'flex items-center justify-between w-full h-11 px-2 rounded-medium transition-colors',

          open
            ? 'bg-gray-light-50 dark:bg-gray-dark-200 shadow-[0px_4px_4px_rgba(0,0,0,08%)]'
            : 'bg-transparent hover:bg-gray-light-200 dark:hover:bg-gray-dark-50',
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
        <div className="absolute z-10 mt-2 w-full rounded-medium p-2 bg-gray-light-50 dark:bg-gray-dark-50">
          <ul className="flex flex-col max-h-60 overflow-auto gap-1">
            {options.map((option) => (
              <li
                key={option.value}
                className={cn(
                  'flex items-center h-[2.75rem] rounded-medium px-2 cursor-pointer hover:bg-gray-light-100 dark:hover:bg-gray-dark-100',
                  value === option.value &&
                    'bg-gray-light-100 dark:bg-gray-dark-100',
                )}
                onClick={() => handleSelect(option.value)}
              >
                <p className="text-md font-medium">{option.label}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
