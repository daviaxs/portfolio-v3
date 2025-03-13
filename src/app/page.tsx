'use client'

import { Badge } from '@/shared/components/Badge'
import { Icons } from '@/shared/components/Icons'
import { useLanguage } from '@/shared/contexts/LanguageContext'
import Image from 'next/image'

export default function HomePage() {
  const { text, changeLanguage } = useLanguage()

  return (
    <>
      <div className="flex flex-col w-full">
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
        <div className="z-10 flex w-full h-fit gap-6 px-8">
          <Image
            src="/imgs/avatar.png"
            width={160}
            height={160}
            alt="avatar"
            quality={100}
            className="rounded-full border-4 border-white dark:border-gray-dark-50 shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08)]"
          />

          <div className="flex pt-16">
            <div className="flex flex-col">
              <p className="text-display-sm font-semibold text-gray-dark-50 dark:text-gray-light-50">
                Davi Alves
              </p>
              <p className="text-md font-normal text-gray-dark-400 dark:text-gray-light-500">
                São Paulo, Brasil
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full px-8 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-display-xs font-medium">Ferramentas</h3>

          <ul className="flex flex-wrap w-full gap-2">
            <li>
              <Badge icon={<Icons.Figma />} text="Figma" />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
