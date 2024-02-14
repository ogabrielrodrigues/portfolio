import { FileCheck, Github, Linkedin, Mouse } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip'
import Project from '@/components/project'
import { cn } from '@/lib/utils'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

interface Projects {
  title: string
  description: string
  screenshot_url: string
  github_url: string
  website_url: string
}

export default async function RootPage() {
  let projects: Projects[]

  if (process.env.NODE_ENV === 'development') {
    const data = await readFile(resolve('projects.json'))

    projects = JSON.parse(data.toString())
  } else {
    const res = await fetch(process.env.PROJECTS_URL!)

    projects = await res.json()
  }

  return (
    <div className="flex w-screen flex-col">
      <section className="relative bg-gradient-to-tr from-indigo-600 to-indigo-950">
        <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-4 text-indigo-50">
            <Mouse className="h-6 w-6 animate-bounce" />
            <span>Role para baixo</span>
          </div>

          <main className="flex flex-col items-center justify-center gap-4">
            <p className="text-md pointer-events-none ml-5 self-start text-indigo-50 md:ml-0 md:pl-4 md:pr-10 md:text-xl xl:px-0">
              Olá 👋, sou Gabriel Rodrigues
            </p>
            <h1 className="text-center text-4xl font-bold text-indigo-50 xsm:px-2 sm:text-5xl md:text-6xl lg:text-7xl xl:px-0 xl:text-[112px] 3xl:text-9xl 4xl:text-[156px]">
              Desenvolvedor Web
            </h1>
            <div className="flex flex-col-reverse items-center justify-between gap-6 md:gap-10 xl:w-full xl:flex-row">
              <div className="flex items-center justify-center gap-2 3xl:pl-10">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                        rel="noreferrer"
                        target="_blank"
                        className="cursor-pointer rounded-full p-3 transition-colors hover:bg-indigo-950/60"
                      >
                        <Linkedin className="h-6 w-6 text-indigo-50 transition-transform 4xl:h-8 4xl:w-8" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="bg-indigo-950/60">
                      <p className="text-indigo-50">Acesse meu linkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={process.env.NEXT_PUBLIC_GITHUB_URL}
                        rel="noreferrer"
                        target="_blank"
                        className="cursor-pointer rounded-full p-3 transition-colors hover:bg-indigo-950/60"
                      >
                        <Github className="h-6 w-6 text-indigo-50 4xl:h-8 4xl:w-8" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="bg-indigo-950/60">
                      <p className="text-indigo-50">Acesse meu GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={process.env.NEXT_PUBLIC_CURRICULUM_URL}
                        rel="noreferrer"
                        className="cursor-pointer rounded-full p-3 transition-colors hover:bg-indigo-950/60"
                        download
                      >
                        <FileCheck className="h-6 w-6 text-indigo-50 4xl:h-8 4xl:w-8" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="bg-indigo-950/60">
                      <p className="text-indigo-50">Veja meu curriculum</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <p className="text-md text-center text-indigo-50 xsm:px-2 md:px-0 md:pl-28 md:pr-4 md:text-end md:text-xl xl:max-w-[750px] xl:px-0 4xl:text-2xl">
                Tenho 18 anos, sou técnico em Desenvolvimento de Sistemas e minhas experiências englobam NodeJS, React e
                GoLang.
              </p>
            </div>
          </main>
        </div>
      </section>
      <section className="flex w-full flex-col gap-12 bg-indigo-50 p-5 md:p-8">
        <h1 className="text-center text-4xl font-bold text-indigo-950">Meus melhores projetos</h1>
        <div
          className={cn(
            `lg:grid-flow-col ${projects.length > 3 ? 'lg:grid-rows-2' : ''} ${
              projects.length > 6 ? 'lg:grid-rows-3' : ''
            }`,
            'mx-auto grid w-full gap-4 md:w-4/5 lg:w-full lg:gap-6 xl:w-3/4 2xl:!gap-12'
          )}
        >
          {projects.map(project => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              screenshotUrl={project.screenshot_url}
              githubUrl={project.github_url}
              websiteUrl={project.website_url}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
