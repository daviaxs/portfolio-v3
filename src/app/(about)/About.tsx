import { useLanguage } from '@/shared/contexts/LanguageContext'

export function About() {
  const { text } = useLanguage()

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-display-xs font-medium">
        {text.aboutPage?.aboutTitle}
      </h3>

      <p className="text-gray-dark-300 dark:text-gray-light-300">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a
        <br />
        <br />
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker
        <br />
        <br />
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop and typesetting
        industry. Lorem Ipsum has been th.
      </p>
    </div>
  )
}
