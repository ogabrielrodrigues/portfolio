import Project from '@/components/project'
import { SocialLink } from '@/components/social-link'
import { cn } from '@/lib/utils'

import { Mouse } from 'lucide-react'
import { links } from './links'
import { getProjects } from './projects'

export default async function Page() {
  const projects = await getProjects()

  return (
    <div className="flex w-screen flex-col">
      <section className="relative bg-linear-to-tr from-indigo-600 to-indigo-950">
        <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-4 text-indigo-50">
            <Mouse className="h-6 w-6 animate-bounce" />
            <span>Role para baixo</span>
          </div>

          <main className="flex flex-col items-center justify-center gap-4 px-4 lg:px-0">
            <p className="text-md pointer-events-none self-start text-indigo-50 md:text-xl">
              Olá 👋, sou Gabriel Rodrigues
            </p>
            <h1 className="text-center font-bold text-indigo-50 text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl">
              Desenvolvedor Web
            </h1>
            <div className="flex flex-col-reverse items-center justify-between gap-6 lg:w-full lg:flex-row">
              <div className="flex items-center justify-center gap-2">
                {links.map(link => <SocialLink key={link.reference} link={link} />)}
              </div>

              <p className="text-md text-center text-indigo-50 xsm:px-2 md:px-0 md:pl-28 md:pr-4 md:text-end md:text-xl lg:max-w-[750px] xl:px-0 4xl:text-2xl">
                Tenho 19 anos, sou técnico em Desenvolvimento de Sistemas e minhas experiências englobam NodeJS, React e
                GoLang
              </p>
            </div>
          </main>
        </div>
      </section>
      <section className="flex w-full flex-col gap-12 bg-indigo-50 p-5 md:p-8">
        <h1 className="text-center text-4xl font-bold text-indigo-950">Meus melhores projetos</h1>
        <div
          className={cn(
            ['lg:grid-flow-col mx-auto grid w-full gap-4 md:w-4/5 lg:w-full lg:gap-6 xl:w-3/4 2xl:gap-12!',
              projects.length > 3 ? 'lg:grid-rows-2' : '', projects.length > 6 ? 'lg:grid-rows-3' : ''
            ]
          )}
        >
          {projects.map(project => <Project key={project.title} project={project} />)}
        </div>
      </section>
    </div>
  )
}
