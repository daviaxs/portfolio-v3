'use client'

import ThemeToggle from '../themeToggle/ThemeToggle'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 bg-zinc-200 w-[20rem] h-full">
      <div className="bg-red-500">hello world</div>
      <nav className="">
        <ul className="flex flex-col gap-2">
          <li>home</li>
          <li>projetos</li>
          <li>blog</li>
          <li>experiência</li>
        </ul>
      </nav>

      <ThemeToggle />
    </aside>
  )
}
