import {
	type Icon,
	IconBrandGithub,
	IconBrandLinkedin,
	IconFileCv,
} from "@tabler/icons-react"
import { environment } from "@/types/environment"

export type Link = {
	content: string
	reference: string
	icon: Icon
	url: string
	highlight?: boolean
}

export const links: Link[] = [
	{
		content: "Acesse meu linkedIn",
		reference: "LinkedIn",
		icon: IconBrandLinkedin,
		url: environment.LINKEDIN_URL,
		highlight: true,
	},
	{
		content: "Acesse meu GitHub",
		reference: "GitHub",
		icon: IconBrandGithub,
		url: environment.GITHUB_URL,
	},
	{
		content: "Veja meu curriculum",
		reference: "Currículo",
		icon: IconFileCv,
		url: environment.CURRICULUM_URL,
	},
]
