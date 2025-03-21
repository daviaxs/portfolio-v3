import Image from 'next/image'

interface JobCardProps {
  jobTitle: string
  jobType: string
  jobDate: string
  jobDescription: string
}

export function JobCard({
  jobTitle,
  jobType,
  jobDate,
  jobDescription,
}: JobCardProps) {
  return (
    <div className="flex gap-4 p-4 rounded-medium bg-gray-light-50 dark:bg-gray-dark-100 border border-gray-200 dark:border-gray-dark-200 shadow-1">
      <Image
        src={'/imgs/jobImg.png'}
        alt="imagem"
        width={54}
        height={54}
        className="rounded-small max-w-[54px] max-h-[54px]"
      />

      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col">
            <p className="text-xl font-medium">{jobTitle}</p>

            <p className="text-xs text-gray-dark-50 dark:text-gray-light-50">
              {jobType}
            </p>
          </div>

          <p className="text-xs text-gray-dark-300 dark:text-gray-light-300">
            {jobDate}
          </p>
        </div>

        <p className="text-gray-dark-300 dark:text-gray-light-300">
          {jobDescription}
        </p>
      </div>
    </div>
  )
}
