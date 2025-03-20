'use client'

import { Badge } from '@/shared/components/Badge'
import { Button } from '@/shared/components/buttons/Button'
import { Icons } from '@/shared/components/Icons'
import { useLanguage } from '@/shared/contexts/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const { text } = useLanguage()

  const tools = [
    {
      icon: <Icons.Figma />,
      text: 'Figma',
    },
    {
      icon: (
        <Icons.NextJS className="text-gray-dark-50 dark:text-gray-light-50" />
      ),
      text: 'Next.js',
    },
    {
      icon: <Icons.Typescript />,
      text: 'Typescript',
    },
    {
      icon: <Icons.Javascript />,
      text: 'JavaScript',
    },
    {
      icon: <Icons.TailwindCSS />,
      text: 'TailwindCSS',
    },
    {
      icon: <Icons.AfterEffects />,
      text: 'After Effects',
    },
    {
      icon: <Icons.Photoshop />,
      text: 'Photoshop',
    },

    {
      icon: <Icons.ReactJS />,
      text: 'React JS',
    },
    {
      icon: <Icons.NodeJS />,
      text: 'Node',
    },
    {
      icon: (
        <Icons.Prisma className="text-gray-dark-50 dark:text-gray-light-50" />
      ),
      text: 'Prisma',
    },
    {
      icon: (
        <Icons.Fastify className="text-gray-dark-50 dark:text-gray-light-50" />
      ),
      text: 'Fastify',
    },
    {
      icon: <Icons.Css />,
      text: 'CSS',
    },
    {
      icon: <Icons.Git />,
      text: 'Git',
    },
  ]

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

          <div className="flex justify-between w-full pt-16">
            <div className="flex flex-col">
              <p className="text-display-sm font-semibold text-gray-dark-50 dark:text-gray-light-50">
                Davi Alves
              </p>

              <p className="text-md font-normal text-gray-dark-400 dark:text-gray-light-500">
                {text.aboutPage?.jobTitle}
              </p>
            </div>

            <Button>
              <Icons.Chat2 className="text-gray-light-50" />
              {text.aboutPage?.contactButton}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full px-8 gap-8 mt-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-display-xs font-medium">
            {text.aboutPage?.toolsTitle}
          </h3>

          <ul className="flex flex-wrap w-full gap-2">
            {tools.map((tool) => (
              <li key={tool.text}>
                <Badge icon={tool.icon} text={tool.text} />
              </li>
            ))}
          </ul>
        </div>

        <span className="w-full h-px bg-gray-light-200 dark:bg-gray-dark-200 rounded" />

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-display-xs font-medium">
              {text.aboutPage?.aboutTitle}
            </h3>

            <p className="font-normal text-gray-dark-300 dark:text-gray-light-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a
              <br />
              <br />
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker
              <br />
              <br />
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              and typesetting industry. Lorem Ipsum has been th.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <div key={link.link} className="flex flex-col">
                <p className="uppercase text-xs text-gray-dark-400">
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
        </div>
      </div>
    </>
  )
}
