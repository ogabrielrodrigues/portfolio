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
}

export const links: Link[] = [
	{
		content: "Acesse meu linkedIn",
		reference: "Linkedin",
		icon: IconBrandLinkedin,
		url: environment.LINKEDIN_URL,
	},
	{
		content: "Acesse meu GitHub",
		reference: "Github",
		icon: IconBrandGithub,
		url: environment.GITHUB_URL,
	},
	{
		content: "Veja meu curriculum",
		reference: "Curriculum",
		icon: IconFileCv,
		url: environment.CURRICULUM_URL,
	},
]
