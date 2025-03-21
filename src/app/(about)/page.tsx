'use client'

import { Button } from '@/shared/components/buttons/Button'
import { Icons } from '@/shared/components/Icons'
import { useLanguage } from '@/shared/contexts/LanguageContext'
import Image from 'next/image'
import { SocialLinks } from './SocialLinks'
import { About } from './About'
import { Separator } from '@/shared/components/Separator'
import { Tools } from './Tools'
import { JobCard } from './JobCard'

export default function HomePage() {
  const { text } = useLanguage()

  const jobs = [
    {
      jobTitle: 'UI/UX Designer',
      jobType: 'Freelancer',
      jobDate: '02/2023 - o momento',
      jobDescription:
        'Atuo na criação de interfaces digitais, desenvolvendo fluxos intuitivos e soluções visuais para otimizar a navegação. Realizei pesquisas, criei wireframes, protótipos interativos e testes de usabilidade para validar as soluções, garantindo uma experiência eficiente e funcional.',
    },
    {
      jobTitle: 'Editor de vídeo',
      jobType: 'Freelancer',
      jobDate: '04/2022 - 05/2023',
      jobDescription:
        'Criei vídeos Lyric utilizando After Effects, desenvolvendo habilidades em animação, transições dinâmicas e construção de cenas. Atuei na edição completa dos vídeos, incluindo design de textos, efeitos visuais e ajustes de cores para garantir um resultado profissional e coerente com a identidade visual do projeto.',
    },
    {
      jobTitle: 'Visual Design',
      jobType: 'Freelancer',
      jobDate: '09/2021 - 10/2023',
      jobDescription:
        'Produzi capas de música e thumbnails para YouTube e Spotify, aplicando técnicas avançadas de manipulação e edição de imagens. Desenvolvi habilidades em direção de arte, escolha de paleta de cores e tipografia, garantindo composições visuais impactantes e atraentes para diferentes plataformas digitais.',
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

              <p className="text-md font-normal text-gray-dark-300 dark:text-gray-light-300">
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

      {/* CONTENT */}
      <div className="flex flex-col w-full px-8 gap-8 mt-8">
        <Tools />

        <Separator />

        {/* ABOUT */}
        <div className="flex gap-16">
          <About />

          <SocialLinks />
        </div>

        {/* EXPERIENCE */}
        <div className="flex flex-col gap-4">
          <h3 className="text-display-xs font-medium">Experiência</h3>

          {jobs.map((job, index) => (
            <JobCard
              key={index}
              jobTitle={job.jobTitle}
              jobDate={job.jobDate}
              jobType={job.jobType}
              jobDescription={job.jobDescription}
            />
          ))}
        </div>
      </div>
    </>
  )
}
