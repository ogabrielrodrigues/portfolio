'use client'

import Link from 'next/link'
import { Tooltip } from '@chakra-ui/react'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

import screenshot1 from '../../assets/screenshot.png'
import screenshot2 from '../../assets/screenshot2.png'

export default function Projects() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient">
      <div className="flex flex-col items-center justify-center gap-5 max-md:mb-48 max-[375px]:px-3">
        <h1 className="self-start text-7xl font-bold text-body max-xl:text-6xl max-lg:text-5xl max-md:text-4xl">
          Projects
        </h1>
        <div className="flex items-center justify-center gap-10 max-md:flex-col">
          <div className="flex flex-col items-center justify-center gap-2">
            <a href="https://github.com/ogabrielrodrigues/nlw-spacetime-web" rel="noreferrer" target="_blank">
              <Image
                src={screenshot1}
                alt="Project"
                className="h-[270px] w-[550px] rounded-lg max-xl:h-[220px] max-xl:w-[480px] max-lg:h-[180px] max-lg:w-[380px]"
              />
            </a>
            <span className="self-center text-2xl font-semibold text-body max-xl:text-xl max-lg:text-lg">
              NLW Spacetime
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <a href="https://github.com/ogabrielrodrigues/ignitelab" rel="noreferrer" target="_blank" className="">
              <Image
                src={screenshot2}
                alt="Project"
                className="h-[270px] w-[550px] rounded-lg max-xl:h-[220px] max-xl:w-[480px] max-lg:h-[180px] max-lg:w-[380px]"
              />
            </a>
            <span className="self-center text-2xl font-semibold text-body max-xl:text-xl max-lg:text-lg">
              Ignite Lab
            </span>
          </div>
        </div>
      </div>
      <Tooltip label="View about me">
        <Link
          href="/"
          className="absolute left-9 top-1/2 translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors hover:bg-alpha max-md:left-1/2 max-md:top-[80%] max-md:-translate-x-1/2 max-md:translate-y-0"
        >
          <ArrowLeft className="h-8 w-8 text-body max-md:h-12 max-md:w-12" />
        </Link>
      </Tooltip>

      <span className="absolute bottom-8 mx-auto text-body">
        To see more projects{' '}
        <a
          href={process.env.NEXT_PUBLIC_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="underline transition-colors hover:text-zinc-400"
        >
          Github
        </a>
      </span>
    </div>
  )
}
