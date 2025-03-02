'use client'

import Image from 'next/image'
import ThemeToggle from '../themeToggle/ThemeToggle'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 bg-gray-light-100 dark:bg-gray-dark-100 w-[20rem] h-full p-4 border-r border-gray-light-200 dark:border-gray-dark-200">
      <nav className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-gray-light-500">Navegar</p>
          <ul className="flex flex-col gap-2">
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Fale comigo</li>
            <li>Blog</li>
          </ul>
        </div>

        <span className="w-full h-px bg-gray-light-200 dark: rounded" />

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-gray-light-500">
            Configurações
          </p>
          <ul className="flex flex-col gap-2">
            <li>Idioma</li>
            <ThemeToggle />
          </ul>
        </div>
      </nav>

      <div className="flex items-center justify-start gap-2 bg-gray-light-50 p-2 rounded-medium w-full h-fit">
        <Image
          src={'/imgs/avatar_daviaxs.jpg'}
          className="rounded-full"
          alt="avatar"
          width={44}
          height={44}
        />

        <div className="flex flex-col">
          <p className="text-md font-medium">daviaxs</p>
          <p className="text-xs font-normal text-gray-dark-400">
            UI/UX Designer & Web Developer
          </p>
        </div>
      </div>
    </aside>
  )
}
