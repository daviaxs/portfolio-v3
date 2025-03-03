'use client'

import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Globe, User, Briefcase, Mail, FileText, Moon } from 'lucide-react'
import { NavButton } from '@/shared/components/buttons/NavButton'
import { DropdownButton } from '@/shared/components/buttons/DropdownButton'
import { useThemeToggle } from '@/shared/hooks/useThemeToggle'

const navigationItems = [
  { href: '/', icon: <User size={20} />, text: 'Sobre mim' },
  { href: '/projetos', icon: <Briefcase size={20} />, text: 'Projetos' },
  { href: '/contato', icon: <Mail size={20} />, text: 'Fale comigo' },
  { href: '/blog', icon: <FileText size={20} />, text: 'Blog' },
]

const languageOptions = [
  { value: 'pt', label: 'Português' },
  { value: 'en', label: 'Inglês' },
]

const themeOptions = [
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Escuro' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [selectedLanguage, setSelectedLanguage] = useState('pt')
  const { theme, toggleTheme, mounted } = useThemeToggle()

  if (!mounted) return null

  const currentLanguage = languageOptions.find(
    (lang) => lang.value === selectedLanguage,
  )?.label

  const currentTheme = themeOptions.find((item) => item.value === theme)?.label

  const handleLanguageSelect = (value: string) => {
    setSelectedLanguage(value)
  }

  const handleThemeSelect = (value: string) => {
    if (value !== theme) {
      toggleTheme()
    }
  }

  return (
    <aside className="flex flex-col gap-6 bg-gray-light-100 dark:bg-gray-dark-100 w-[20rem] h-full p-4 border-r border-gray-light-200 dark:border-gray-dark-200">
      <nav className="flex flex-col gap-4 flex-1">
        {/* Navegação */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-gray-light-500">Navegar</p>
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
            Configurações
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <DropdownButton
                icon={<Globe size={20} />}
                text="Idioma"
                options={languageOptions}
                onSelect={handleLanguageSelect}
                supportText={currentLanguage}
              />
            </li>
            <li>
              <DropdownButton
                icon={<Moon size={20} />}
                text="Tema"
                options={themeOptions}
                onSelect={handleThemeSelect}
                supportText={currentTheme}
              />
            </li>
          </ul>
        </div>
      </nav>

      {/* Perfil */}
      <div className="flex items-center justify-start gap-2 bg-gray-light-50 dark:bg-gray-dark-50 p-2 rounded-medium w-full h-fit">
        <Image
          src="/imgs/avatar_daviaxs.jpg"
          alt="avatar"
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-md font-medium">daviaxs</p>
          <p className="text-xs font-normal text-gray-dark-400">
            UI/UX Designer &amp; Web Developer
          </p>
        </div>
      </div>
    </aside>
  )
}
