import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface JobCardProps {
  imgUrl: string | StaticImport
  jobTitle: string
  jobType: string
  jobDate: string
  jobDescription: string
}

export function JobCard({
  imgUrl,
  jobTitle,
  jobType,
  jobDate,
  jobDescription,
}: JobCardProps) {
  return (
    <div className="flex flex-col gap-4 p-4 w-full min-w-[460px] rounded-medium bg-gray-light-50 dark:bg-gray-dark-100 border border-gray-300 dark:border-gray-dark-200 shadow-1">
      <Image
        src={imgUrl}
        alt="imagem"
        width={800}
        height={316}
        className="rounded-small max-w-full max-h-[158px] object-cover"
        quality={100}
      />

      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col">
          <p className="text-xl font-medium">{jobTitle}</p>

          <p className="text-xs text-gray-dark-300 dark:text-gray-light-300">
            {jobDate}
          </p>

          <p className="text-xs text-gray-dark-50 dark:text-gray-light-50">
            {jobType}
          </p>
        </div>

        <p className="text-gray-dark-300 dark:text-gray-light-300">
          {jobDescription}
        </p>
      </div>
    </div>
  )
}
