'use client'

import Header from '@/components/Header'
import Project from '@/components/Project'
import { Tooltip } from '@chakra-ui/react'
import { FileCheck, Github, Linkedin, Mouse } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex w-screen flex-col">
      <div className="relative bg-gradient">
        <Header home />
        <div className="relative z-10 flex h-[99vh] w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute bottom-[10%] flex flex-col items-center justify-center gap-4 p-3 font-semibold text-body">
            <Mouse className="h-6 w-6 animate-bounce" />
            <span>Scroll down</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-md ml-5 self-start font-medium text-body tablet:ml-0 tablet:pr-10 tablet:text-xl desktopl:text-2xl">
              Hello 👋, I&apos;m Gabriel Rodrigues
            </span>
            <h1 className="text-4xl font-bold text-body tablet:text-6xl desktop:text-9xl lmobile:text-5xl laptop:text-7xl laptopl:text-8xl desktopl:text-[156px]">
              Web Developer
            </h1>
            <div className="flex flex-col-reverse items-center justify-between gap-6 tablet:gap-10 laptopl:w-full laptopl:flex-row">
              <div className="flex items-center justify-center gap-2 desktop:pl-10">
                <Tooltip label="Access my linkedIn">
                  <a
                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                    rel="noreferrer"
                    target="_blank"
                    className="cursor-pointer rounded-full p-3 transition-colors hover:bg-alpha"
                  >
                    <Linkedin className="h-6 w-6 text-body desktopl:h-8 desktopl:w-8" />
                  </a>
                </Tooltip>
                <Tooltip label="Access my GitHub">
                  <a
                    href={process.env.NEXT_PUBLIC_GITHUB_URL}
                    rel="noreferrer"
                    target="_blank"
                    className="cursor-pointer rounded-full p-3 transition-colors hover:bg-alpha"
                  >
                    <Github className="h-6 w-6 text-body desktopl:h-8 desktopl:w-8" />
                  </a>
                </Tooltip>
                <Tooltip label="Download my curriculum">
                  <a
                    href={process.env.NEXT_PUBLIC_CURRICULUM_URL}
                    rel="noreferrer"
                    target="_blank"
                    className="cursor-pointer rounded-full p-3 transition-colors hover:bg-alpha"
                  >
                    <FileCheck className="h-6 w-6 text-body desktopl:h-8 desktopl:w-8" />
                  </a>
                </Tooltip>
              </div>

              <p className="text-md text-center text-body tablet:px-0 tablet:pl-28 tablet:text-end tablet:text-xl mmobile:px-2 laptopl:pl-0 desktopl:text-2xl">
                I&apos;m 18 years old and I have 2 years of contact with <br className="hidden tablet:block"></br>
                Javascript and the web development tools.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-12 p-5 tablet:p-8">
        <h1 className="text-center text-4xl font-bold">My best projects</h1>
        <div className="grid h-fit grid-rows-2 gap-2 2xl:!gap-12 laptop:grid-cols-2 laptop:grid-rows-none laptop:gap-6">
          <Project
            title="Easy bank"
            description="Proposed by FrontEnd Mentor, EasyBank is landing page of a vitual bank using a simple and clean design."
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/easybank/main/images/screenshot.svg"
            githubUrl="https://github.com/ogabrielrodrigues/easybank"
            websiteUrl="https://easybanktech.vercel.app/"
          />
          <Project
            title="Splitter"
            description="Proposed by FrontEnd Mentor, Tip calculator is great for calculating the tip that you and your table companions want to give to the waiter in a restaurant."
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/splitter/main/images/screenshot.svg"
            githubUrl="https://github.com/ogabrielrodrigues/splitter"
            websiteUrl="https://splittertip.vercel.app/"
          />
        </div>
      </div>
    </div>
  )
}
