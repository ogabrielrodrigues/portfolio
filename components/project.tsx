import { Project } from '@/types/project'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="overflow-hidden rounded-md border border-zinc-200 bg-zinc-50">
      <a referrerPolicy="no-referrer" target="_blank" rel="noreferrer" href={project.github_url} className="cursor-pointer">
        <Image src={project.screenshot_url} alt={`${project.title} Screenshot`} width={800} height={800} quality={100} />
      </a>
      <div className="grid grid-rows-[min-content_max-content] gap-8 px-4 py-6">
        <div>
          <h2 className="text-2xl font-bold text-zinc-950">{project.title}</h2>
          <p className="min-h-[200px] text-zinc-500">{project.description}</p>
        </div>

        <div className="flex h-max flex-1 flex-col gap-4">
          <a
            translate="no"
            href={project.github_url}
            referrerPolicy="no-referrer"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-semibold text-indigo-950 hover:underline"
          >
            <Github />
            Github
          </a>

          {project.website_url && (
            <a
              href={project.website_url}
              referrerPolicy="no-referrer"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-semibold text-indigo-700 hover:underline"
            >
              <ArrowUpRight />
              Ver Site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
