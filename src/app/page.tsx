'use client'

import Project from '@/components/Project'
import { Tooltip } from '@chakra-ui/react'
import { FileCheck, Github, Linkedin, Mouse } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex w-screen flex-col">
      <div className="relative z-10 flex h-[100vh] w-full items-center justify-center overflow-hidden bg-gradient">
        <div className="absolute bottom-[10%] flex flex-col items-center justify-center gap-4 p-3 font-semibold text-body">
          <Mouse className="h-6 w-6 animate-bounce" />
          <span>Scroll down</span>
        </div>

        <div className="flex flex-col gap-4">
          <span className="max-lg:text-md max-md:text-md text-xl font-medium text-body max-xl:text-lg max-[425px]:pl-4">
            Hi 👋, I am <strong>Gabriel Rodrigues</strong>{' '}
          </span>
          <h1 className="text-9xl font-bold text-body max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-[425px]:text-center max-[320px]:text-5xl">
            Web Developer
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
              I&apos;m 18 years old and I have 2 years of contact with <br></br>
              <strong>Javascript</strong> and the web development tools.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-12 p-10">
        <h1 className="text-center text-5xl font-bold">My best projects</h1>
        <div className="grid h-full grid-cols-3 gap-6">
          <Project
            title="Easy bank"
            description="Proposed by FrontEnd Mentor, EasyBank is landing page of a vitual bank using a simple and clean design."
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/easybank/main/images/screenshot.png"
            githubUrl="https://github.com/ogabrielrodrigues/easybank"
            websiteUrl="https://easybank-roan-two.vercel.app/"
          />
          <Project
            title="Splitter - Tip calculator"
            description="Proposed by FrontEnd Mentor, Tip calculator is great for calculating the tip that you and your table companions want to give to the waiter in a restaurant."
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/tip-calculator/main/images/screenshot.png"
            githubUrl="https://github.com/ogabrielrodrigues/tip-calculator"
            websiteUrl="https://tipcalculate.vercel.app/"
          />
          <Project
            title="Multi step subscription"
            description="Proposed by FrontEnd Mentor, is a 4-step form containing personal, plan and additional information."
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/multi-step-form/main/src/assets/screenshot.png"
            githubUrl="https://github.com/ogabrielrodrigues/multi-step-form"
            websiteUrl="https://multistepsform.vercel.app/"
          />
          <Project
            title="IP address tracker"
            description="Proposed by FrontEnd Mentor, is a page where you can put your ip, the map will go to your location and show your ip information."
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/ip-address-tracker/main/src/assets/screenshot.png"
            githubUrl="https://github.com/ogabrielrodrigues/ip-address-tracker"
            websiteUrl="https://myiptracker.vercel.app/"
          />
          <Project
            title="Interactive credit card"
            description="Proposed by FrontEnd Mentor, is a page where you can put your credit card information and with that the demo cards will be filled with your information."
            screenshotUrl="https://raw.githubusercontent.com/ogabrielrodrigues/interactive-card/f6f69e175db981c2dfba8fca2222d14625767bec/images/screenshot.png"
            githubUrl="https://github.com/ogabrielrodrigues/ip-address-tracker"
            websiteUrl="https://myiptracker.vercel.app/"
          />
        </div>
      </div>
    </div>
  )
}
