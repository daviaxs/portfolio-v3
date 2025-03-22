import { useEffect, useRef, useState } from 'react'
import { JobCard } from './JobCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function JobsCarousel() {
  const [isScrolledLeft, setIsScrolledLeft] = useState(false)
  const [isScrolledRight, setIsScrolledRight] = useState(false)
  const scrollContainerRef = useRef(null)

  const jobs = [
    {
      imgUrl: '/imgs/ui-ux-design-capa.png',
      jobTitle: 'UI/UX Designer',
      jobType: 'Freelancer',
      jobDate: '02/2023 - o momento',
      jobDescription:
        'Atuo na criação de interfaces digitais, desenvolvendo fluxos intuitivos e soluções visuais para otimizar a navegação. Realizei pesquisas, criei wireframes, protótipos interativos e testes de usabilidade para validar as soluções, garantindo uma experiência eficiente e funcional.',
    },
    {
      imgUrl: '/imgs/video-edit-capa.png',
      jobTitle: 'Editor de vídeo',
      jobType: 'Freelancer',
      jobDate: '04/2022 - 05/2023',
      jobDescription:
        'Criei vídeos Lyric utilizando After Effects, desenvolvendo habilidades em animação, transições dinâmicas e construção de cenas. Atuei na edição completa dos vídeos, incluindo design de textos, efeitos visuais e ajustes de cores para garantir um resultado profissional e coerente com a identidade visual do projeto.',
    },
    {
      imgUrl: '/imgs/visual-design-capa.png',
      jobTitle: 'Visual Design',
      jobType: 'Freelancer',
      jobDate: '09/2021 - 10/2023',
      jobDescription:
        'Produzi capas de música e thumbnails para YouTube e Spotify, aplicando técnicas avançadas de manipulação e edição de imagens. Desenvolvi habilidades em direção de arte, escolha de paleta de cores e tipografia, garantindo composições visuais impactantes e atraentes para diferentes plataformas digitais.',
    },
  ]

  const handleScroll = () => {
    const tolerance = 20
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
      setIsScrolledLeft(scrollLeft > 0)

      setIsScrolledRight(scrollLeft < scrollWidth - clientWidth - tolerance)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      ;(scrollContainerRef.current as HTMLDivElement).scrollBy({
        left: -300,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      ;(scrollContainerRef.current as HTMLDivElement).scrollBy({
        left: 300,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    handleScroll()
    const scrollContainer = scrollContainerRef.current as HTMLDivElement | null

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
      setIsScrolledLeft(scrollLeft > 0)
      setIsScrolledRight(scrollLeft < scrollWidth - clientWidth)

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className="relative flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-display-xs font-medium">Experiência</h3>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            disabled={!isScrolledLeft}
            className={`p-2 ${!isScrolledLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            disabled={!isScrolledRight}
            className={`p-2 ${!isScrolledRight ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        className="flex gap-4 overflow-x-auto max-w-full scrollbar-hide"
        ref={scrollContainerRef}
      >
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            imgUrl={job.imgUrl}
            jobTitle={job.jobTitle}
            jobDate={job.jobDate}
            jobType={job.jobType}
            jobDescription={job.jobDescription}
          />
        ))}
      </div>

      <div
        className={`absolute bottom-0 left-0 w-20 h-[calc(100%-36px)] bg-gradient-to-r from-gray-light-50 dark:from-gray-dark-50 to-transparent pointer-events-none transition-opacity duration-300 ${
          isScrolledLeft ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`absolute bottom-0 right-0 w-20 h-[calc(100%-36px)] bg-gradient-to-l from-gray-light-50 dark:from-gray-dark-50 to-transparent pointer-events-none transition-opacity duration-300 ${
          isScrolledRight ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
