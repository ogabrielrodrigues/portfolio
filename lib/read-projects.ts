import { resolve } from 'node:path'
import { readFile } from 'node:fs/promises'

interface Project {
  title: string
  description: string
  screenshot_url: string
  github_url: string
  website_url: string
}

export async function readProjects(): Promise<Project[]> {
  if (process.env.NODE_ENV === 'development') {
    const data = await readFile(resolve('projects.json'))

    return JSON.parse(data.toString()) as Project[]
  } else {
    const res = await fetch(process.env.PROJECTS_URL!)

    return (await res.json()) as Project[]
  }
}
