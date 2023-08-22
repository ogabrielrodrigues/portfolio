import Project from '@/components/Project'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/Tooltip'
import { FileCheck, Github, Linkedin, Mouse } from 'lucide-react'
import { getDictionary } from '@/getDictionary'
import { Locale } from '../../../i18n-config'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { LocaleSwitcher } from '@/components/Lang'

export default async function Root({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex w-screen flex-col">
      <section className="relative bg-gradient-to-tr from-primary to-secondary">
        <Image src={logo} alt="Gabriel Rodrigues logo" className="absolute left-1/2 top-4 z-50 -translate-x-1/2" />
        <LocaleSwitcher />
        <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-4 text-body">
            <Mouse className="h-6 w-6 animate-bounce" />
            <span>{dictionary.main.scroll}</span>
          </div>

          <main className="flex flex-col items-center justify-center gap-4">
            <p className="text-md ml-5 self-start text-body tablet:ml-0 tablet:pl-4 tablet:pr-10 tablet:text-xl desktopl:text-2xl">
              {dictionary.main.apresentation}
            </p>
            <h1 className="text-center text-4xl font-bold text-body mmobile:px-2 lmobile:text-5xl tablet:text-6xl laptop:text-7xl laptopl:text-8xl desktop:text-9xl desktopl:text-[156px]">
              {dictionary.main.work}
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
                      <p>{dictionary.social.linkedin}</p>
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
                      <p>{dictionary.social.github}</p>
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
                      <p>{dictionary.social.cv}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <p className="text-md text-center text-body mmobile:px-2 tablet:px-0 tablet:pl-28 tablet:pr-4 tablet:text-end tablet:text-xl laptopl:max-w-[750px] laptopl:pl-0 desktopl:text-2xl">
                {dictionary.main.about}
              </p>
            </div>
          </main>
        </div>
      </section>
      <section className="flex w-full flex-col gap-12 bg-body p-5 tablet:p-8">
        <h1 className="text-center text-4xl font-bold text-zinc-950">{dictionary.projects.title}</h1>
        <div className="mx-auto grid w-full grid-rows-2 gap-4 tablet:w-4/5 laptop:w-full laptop:grid-cols-3 laptop:grid-rows-none laptop:gap-6 laptopl:w-3/4 laptopl:grid-cols-3 2xl:!gap-12">
          <Project
            view={dictionary.projects.view}
            title={dictionary.projects.easybank.name}
            description={dictionary.projects.easybank.description}
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/easybank/main/images/screenshot.svg"
            githubUrl="https://github.com/ogabrielrodrigues/easybank"
            websiteUrl="https://easybanktech.vercel.app/"
          />
          <Project
            view={dictionary.projects.view}
            title={dictionary.projects.splitter.name}
            description={dictionary.projects.splitter.description}
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/splitter/main/images/screenshot.svg"
            githubUrl="https://github.com/ogabrielrodrigues/splitter"
            websiteUrl="https://splittertip.vercel.app/"
          />
          <Project
            view={dictionary.projects.view}
            title={dictionary.projects.envguard.name}
            description={dictionary.projects.envguard.description}
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/envguard/main/.github/assets/hero.svg"
            githubUrl="https://github.com/ogabrielrodrigues/envguard"
            websiteUrl="https://envguard.vercel.app/"
          />
        </div>
      </section>
    </div>
  )
}
