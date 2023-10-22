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
    <div className="overflow-hidden rounded-md border border-zinc-200 bg-body">
      <a referrerPolicy="no-referrer" target="_blank" rel="noreferrer" href={githubUrl} className="cursor-pointer">
        <Image src={screenshotUrl} alt={`${title} Screenshot`} width={800} height={800} quality={100} />
      </a>
      <div className="grid grid-rows-[160px_max-content] gap-8 px-4 py-6">
        <div>
          <h2 className="text-2xl font-bold text-zinc-950">{title}</h2>
          <p className="min-h-[100px] text-light">{description}</p>
        </div>

        <div className="flex h-max flex-1 flex-col gap-4">
          <a
            translate="no"
            href={githubUrl}
            referrerPolicy="no-referrer"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-semibold text-light hover:underline"
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
            Ver Site
          </a>
        </div>
      </div>
    </div>
  )
}
