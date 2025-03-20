import { Badge } from '@/shared/components/Badge'
import { Icons } from '@/shared/components/Icons'
import { useLanguage } from '@/shared/contexts/LanguageContext'

export function Tools() {
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

  return (
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
  )
}
