import { createServerFn } from "@tanstack/react-start"
import { environment } from "@/server/environment"
import { getProjects } from "@/server/projects"

export const getPortfolio = createServerFn({ method: "GET" }).handler(
	async () => ({
		projects: await getProjects(),
		urls: {
			linkedin: environment.LINKEDIN_URL,
			github: environment.GITHUB_URL,
			curriculum: environment.CURRICULUM_URL,
		},
	}),
)
