import {
	type Icon,
	IconBrandGithub,
	IconBrandLinkedin,
	IconFileCv,
} from "@tabler/icons-react"

export type Link = {
	id: "linkedin" | "github" | "curriculum"
	content: string
	reference: string
	icon: Icon
	highlight?: boolean
}

export const links: Link[] = [
	{
		id: "linkedin",
		content: "Acesse meu linkedIn",
		reference: "LinkedIn",
		icon: IconBrandLinkedin,
		highlight: true,
	},
	{
		id: "github",
		content: "Acesse meu GitHub",
		reference: "GitHub",
		icon: IconBrandGithub,
	},
	{
		id: "curriculum",
		content: "Veja meu curriculum",
		reference: "Currículo",
		icon: IconFileCv,
	},
]
