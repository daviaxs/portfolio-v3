import { Icons } from '@/shared/components/Icons'
import Link from 'next/link'

export function SocialLinks() {
  const links = [
    {
      title: 'Email',
      link: 'mailto:eu@daviaxs.com',
      text: 'eu@daviaxs.com',
    },
    {
      title: 'Whatsapp',
      link: 'https://wa.me/+5511979587699',
      text: 'whatsapp.com',
    },
    {
      title: 'Dribbble',
      link: 'https://dribbble.com/daviaxs',
      text: 'dribbble.com',
    },
    {
      title: 'Github',
      link: 'https://github.com/daviaxs',
      text: 'github.com',
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <div key={link.link} className="flex flex-col">
          <p className="uppercase text-xs font-light text-gray-dark-300 dark:text-gray-light-300">
            {link.title}
          </p>
          <Link
            href={link.link}
            target="_blank"
            className="flex items-center justify-start gap-2 hover:underline"
          >
            {link.text}

            <Icons.Link size={12} />
          </Link>
        </div>
      ))}
    </div>
  )
}
