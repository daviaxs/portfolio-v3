'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

type Language = string

interface LanguageContextProps {
  language: Language
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  text: Record<string, any>
  changeLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-br')
  const [text, setText] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'pt-br')
    }

    const savedLanguage = localStorage.getItem('language') || 'pt-br'
    setLanguage(savedLanguage)
    fetchLanguage(savedLanguage)
  }, [])

  const fetchLanguage = async (lang: Language) => {
    try {
      const res = await fetch(`/languages/${lang}.json`)
      const data = await res.json()
      setText(data)
    } catch (error) {
      console.error('Erro ao carregar idioma:', error)
    }
  }

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    fetchLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, text, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
