import { Project } from '@/types/project'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

export async function getProjects(): Promise<Project[]> {
  let projects: Project[]

  if (process.env.NODE_ENV === 'development') {
    const data = await readFile(resolve('projects.json'))

    projects = JSON.parse(data.toString())
  } else {
    const res = await fetch(process.env.PROJECTS_URL!)

    projects = await res.json()
  }

  return projects
}