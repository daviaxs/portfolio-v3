import { useLanguage } from '@/shared/contexts/LanguageContext'
import Image from 'next/image'

export function ProfileFooter() {
  const { text } = useLanguage()

  return (
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
          {text.sidebar?.rule}
        </p>
      </div>
    </div>
  )
}
