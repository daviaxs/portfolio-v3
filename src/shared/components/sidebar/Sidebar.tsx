'use client'

import { usePathname } from 'next/navigation'
import { Globe, Moon } from 'lucide-react'
import { NavButton } from '@/shared/components/buttons/NavButton'
import { DropdownButton } from '@/shared/components/buttons/DropdownButton'
import { useThemeToggle } from '@/shared/hooks/useThemeToggle'
import { ProfileFooter } from './ProfileFooter'
import { useLanguage } from '@/shared/contexts/LanguageContext'
import { Icons } from '../Icons'

export function Sidebar() {
  const pathname = usePathname()
  const { language, changeLanguage, text } = useLanguage()
  const { theme, toggleTheme, mounted } = useThemeToggle()

  if (!mounted) return null

  const languageOptions = [
    { value: 'pt-br', label: 'Português' },
    { value: 'en', label: 'Inglês' },
  ]

  const currentLanguage = languageOptions.find(
    (lang) => lang.value === language,
  )?.label

  const themeOptions = [
    { value: 'light', label: text.sidebar?.settings?.light },
    { value: 'dark', label: text.sidebar?.settings?.dark },
  ]

  const handleLanguageSelect = (value: string) => {
    changeLanguage(value)
  }

  const handleThemeSelect = (value: string) => {
    if (value !== theme) {
      toggleTheme()
    }
  }

  const navigationItems = [
    {
      href: '/',
      icon: (
        <Icons.Person className="text-gray-dark-50 dark:text-gray-light-50" />
      ),
      text: text.sidebar?.about,
    },
    {
      href: '/projetos',
      icon: (
        <Icons.Star className="text-gray-dark-50 dark:text-gray-light-50" />
      ),
      text: text.sidebar?.projects,
    },
    {
      href: '/contato',
      icon: (
        <Icons.Chat className="text-gray-dark-50 dark:text-gray-light-50" />
      ),
      text: text.sidebar?.contact,
    },
    {
      href: '/artigos',
      icon: (
        <Icons.Book className="text-gray-dark-50 dark:text-gray-light-50" />
      ),
      text: text.sidebar?.articles,
    },
  ]

  const currentTheme = themeOptions.find((item) => item.value === theme)?.label

  return (
    <aside className="flex flex-col gap-6 bg-gray-light-100 dark:bg-gray-dark-100 w-[20rem] h-full p-4 border-r border-gray-light-200 dark:border-gray-dark-200">
      <nav className="flex flex-col gap-4 flex-1">
        {/* Navegação */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-gray-light-500">
            {text.sidebar?.navTitle}
          </p>
          <ul className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <NavButton
                  href={item.href}
                  icon={item.icon}
                  text={item.text}
                  active={pathname === item.href}
                />
              </li>
            ))}
          </ul>
        </div>

        <span className="w-full h-px bg-gray-light-200 dark:bg-gray-dark-200 rounded" />

        {/* Configurações */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-gray-light-500">
            {text.sidebar?.settings?.title}
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <DropdownButton
                icon={<Globe size={20} />}
                text={text.sidebar?.settings?.language}
                options={languageOptions}
                onSelect={handleLanguageSelect}
                supportText={currentLanguage}
              />
            </li>
            <li>
              <DropdownButton
                icon={<Moon size={20} />}
                text={text.sidebar?.settings?.theme}
                options={themeOptions}
                onSelect={handleThemeSelect}
                supportText={currentTheme}
              />
            </li>
          </ul>
        </div>
      </nav>

      <ProfileFooter />
    </aside>
  )
}
