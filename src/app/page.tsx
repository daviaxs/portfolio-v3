'use client'

import { useLanguage } from '@/shared/contexts/LanguageContext'

export default function HomePage() {
  const { text, changeLanguage } = useLanguage()

  return (
    <div className="flex flex-col gap-5">
      <h1>{text.sidebar?.navTitle}</h1>
      <button onClick={() => changeLanguage('pt-br')}>Toggle Language</button>
      <button onClick={() => changeLanguage('en')}>Toggle Language</button>
    </div>
  )
}
