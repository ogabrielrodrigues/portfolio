import { readFile } from "node:fs/promises"
import { resolve } from "node:path"
import { environment } from "@/types/environment"

export type Project = {
	title: string
	description: string
	screenshotUrl: string
	backgroundColor: string
	githubUrl: string
	websiteUrl: string
}

export async function getProjects(): Promise<Project[]> {
	let projects: Project[]

	if (environment.ENVIRONMENT === "development") {
		const data = await readFile(resolve("projects.json"))

		projects = JSON.parse(data.toString())
	} else {
		const res = await fetch(environment.PROJECTS_URL)

		projects = await res.json()
	}

	return projects
}
