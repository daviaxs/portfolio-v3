'use client'

import { useLanguage } from '@/shared/contexts/LanguageContext'
import Image from 'next/image'

export default function HomePage() {
  const { text, changeLanguage } = useLanguage()

  return (
    <>
      <div className="flex flex-col w-full h-24">
        <div className="relative w-full h-[200px] ">
          <Image
            src="/imgs/banner.png"
            alt="Banner"
            width={3300}
            height={240}
            className="w-full h-[240px] object-cover object-center rounded-large"
            quality={100}
          />
        </div>
      </div>
    </>
  )
}
