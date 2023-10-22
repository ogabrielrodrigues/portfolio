import Project from '@/components/Project'
import { promises as fs } from 'node:fs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/Tooltip'
import { FileCheck, Github, Linkedin, Mouse } from 'lucide-react'
import path from 'node:path'
import { cn } from '@/lib/utils'

interface IProject {
  view: string
  title: string
  description: string
  screenshotUrl: string
  githubUrl: string
  websiteUrl: string
}

export default async function Root() {
  let projects: IProject[] = []

  if (process.env.NODE_ENV === 'development') {
    const data = await fs.readFile(path.resolve('projects.json'))

    projects = JSON.parse(data.toString())
  } else {
    const res = await fetch(process.env.PROJECTS_URL!, {
      method: 'get'
    })

    projects = await res.json()
  }

  return (
    <div className="flex w-screen flex-col">
      <section className="relative bg-gradient-to-tr from-primary to-secondary">
        {/* <Image src={logo} alt="Gabriel Rodrigues logo" className="absolute left-1/2 top-4 z-50 -translate-x-1/2" /> */}
        <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-4 text-body">
            <Mouse className="h-6 w-6 animate-bounce" />
            <span>Role para baixo</span>
          </div>

          <main className="flex flex-col items-center justify-center gap-4">
            <p className="text-md ml-5 self-start text-body tablet:ml-0 tablet:pl-4 tablet:pr-10 tablet:text-xl desktopl:text-2xl">
              Olá 👋, sou Gabriel Rodrigues
            </p>
            <h1 className="text-center text-4xl font-bold text-body mmobile:px-2 lmobile:text-5xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl desktop:text-9xl desktopl:text-[156px]">
              Desenvolvedor Web
            </h1>
            <div className="flex flex-col-reverse items-center justify-between gap-6 tablet:gap-10 laptopl:w-full laptopl:flex-row">
              <div className="flex items-center justify-center gap-2 desktop:pl-10">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                        rel="noreferrer"
                        target="_blank"
                        className="cursor-pointer rounded-full p-3 transition-colors hover:bg-alpha"
                      >
                        <Linkedin className="h-6 w-6 text-body transition-transform desktopl:h-8 desktopl:w-8" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Acesse meu linkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={process.env.NEXT_PUBLIC_GITHUB_URL}
                        rel="noreferrer"
                        target="_blank"
                        className="cursor-pointer rounded-full p-3 transition-colors hover:bg-alpha"
                      >
                        <Github className="h-6 w-6 text-body desktopl:h-8 desktopl:w-8" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Acesse meu GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={process.env.NEXT_PUBLIC_CURRICULUM_URL}
                        rel="noreferrer"
                        target="_blank"
                        className="cursor-pointer rounded-full p-3 transition-colors hover:bg-alpha"
                      >
                        <FileCheck className="h-6 w-6 text-body desktopl:h-8 desktopl:w-8" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Veja meu curriculum</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <p className="text-md text-center text-body mmobile:px-2 tablet:px-0 tablet:pl-28 tablet:pr-4 tablet:text-end tablet:text-xl laptopl:max-w-[750px] laptopl:pl-0 desktopl:text-2xl">
                Tenho 18 anos e possuo 2 anos de contato com Javascript e as ferramentas de desenvolvimento web.
              </p>
            </div>
          </main>
        </div>
      </section>
      <section className="flex w-full flex-col gap-12 bg-body p-5 tablet:p-8">
        <h1 className="text-center text-4xl font-bold text-zinc-950">Meus melhores projetos</h1>
        <div
          className={cn(
            `laptop:grid-flow-col ${projects.length > 3 ? 'laptop:grid-rows-2' : ''} ${
              projects.length > 6 ? 'laptop:grid-rows-3' : ''
            }`,
            'mx-auto grid w-full gap-4 tablet:w-4/5 laptop:w-full laptop:gap-6 laptopl:w-3/4 2xl:!gap-12'
          )}
        >
          {projects.map(project => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              screenshotUrl={project.screenshotUrl}
              githubUrl={project.githubUrl}
              websiteUrl={project.websiteUrl}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
