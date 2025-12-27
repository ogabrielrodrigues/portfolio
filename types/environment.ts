import z from "zod"

const environmentSchema = z.object({
	ENVIRONMENT: z.enum(["development", "production"]),
	LINKEDIN_URL: z.string(),
	GITHUB_URL: z.string(),
	CURRICULUM_URL: z.string(),
	PROJECTS_URL: z.string(),
})

export const environment = z.parse(environmentSchema, process.env)
