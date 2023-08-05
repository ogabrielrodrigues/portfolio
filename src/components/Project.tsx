import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectProps {
  title: string
  description: string
  screenshotUrl: string
  githubUrl: string
  websiteUrl: string
}

export default function Project({ title, description, screenshotUrl, githubUrl, websiteUrl }: ProjectProps) {
  return (
    <div className="h-fit overflow-hidden rounded-lg bg-white pb-4 shadow-xl">
      <div className="flex w-full items-center justify-center bg-indigo-700 p-4">
        <Image
          src={screenshotUrl}
          alt={`${title} Screenshot`}
          width={800}
          height={800}
          quality={100}
          className="max-h-[440px]"
        />
      </div>
      <div className="flex w-full flex-col gap-8 p-6">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="min-h-[100px] text-gray-500">{description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            translate="no"
            href={githubUrl}
            referrerPolicy="no-referrer"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-semibold text-gray-500 hover:underline"
          >
            <Github />
            Github
          </a>
          <a
            href={websiteUrl}
            referrerPolicy="no-referrer"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-semibold text-indigo-700 hover:underline"
          >
            <ArrowUpRight />
            View Website
          </a>
        </div>
      </div>
    </div>
  )
}
