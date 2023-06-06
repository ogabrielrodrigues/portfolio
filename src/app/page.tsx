'use client'

import { Linkedin, Github, FileCheck, ArrowRight } from 'lucide-react'
import { Tooltip } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient">
      <div className="flex flex-col gap-4 transition-transform">
        <span className="max-lg:text-md max-md:text-md text-xl font-medium text-body max-xl:text-lg max-[425px]:pl-4">
          Hi 👋, I am Gabriel Rodrigues{' '}
        </span>
        <h1 className="text-9xl font-bold text-body max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-[425px]:text-center max-[320px]:text-5xl">
          Back-end Developer
        </h1>
        <div className="flex items-center justify-between max-md:flex-col-reverse max-md:gap-10">
          <div className="flex items-center justify-center gap-2 pl-10 max-md:self-start max-md:pl-0 max-[425px]:self-center">
            <Tooltip label="Access my linkedIn">
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer rounded-full p-3 transition-colors hover:bg-alpha"
              >
                <Linkedin className="h-6 w-6 text-body" />
              </a>
            </Tooltip>
            <Tooltip label="Access my GitHub">
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer rounded-full p-3 transition-colors hover:bg-alpha"
              >
                <Github className="h-6 w-6 text-body" />
              </a>
            </Tooltip>
            <Tooltip label="Download my curriculum">
              <a
                href={process.env.NEXT_PUBLIC_CURRICULUM_URL}
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer rounded-full p-3 transition-colors hover:bg-alpha"
              >
                <FileCheck className="h-6 w-6 text-body" />
              </a>
            </Tooltip>
          </div>

          <p className="max-lg:text-md max-md:text-md text-xl text-body max-xl:text-lg max-md:self-end max-[425px]:self-center max-[375px]:text-[16px] max-[320px]:text-[14px]">
            I&apos;m 18 years old and I have 2 years of contact <br></br>with <strong>Node.js</strong> and the back-end
            ecosystem.
          </p>
        </div>
      </div>

      <Tooltip label="View projects">
        <Link
          href="/projects"
          className="absolute right-8 top-1/2 translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors hover:bg-alpha max-md:right-1/2 max-md:top-[80%] max-md:translate-x-1/2 max-md:translate-y-0"
        >
          <ArrowRight className="h-8 w-8 text-body max-md:h-12 max-md:w-12" />
        </Link>
      </Tooltip>
    </div>
  )
}
