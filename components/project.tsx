import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react"
import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectProps {
	project: Project
}

export default function ProjectCard({ project }: ProjectProps) {
	return (
		<div className="flex flex-col overflow-hidden rounded-md border border-border shadow-xl bg-background">
			<a
				className="cursor-pointer w-full flex justify-center-center"
				href={project.githubUrl}
				referrerPolicy="no-referrer"
				rel="noreferrer"
				target="_blank"
			>
				<div
					className={`flex items-center justify-center aspect-video w-full bg-[${project.backgroundColor}]`}
				>
					<Image
						alt={`${project.title} Screenshot`}
						className="w-auto"
						height={0}
						src={project.screenshotUrl}
						width={0}
					/>
				</div>
			</a>

			<div className="flex-1 space-y-8 p-8">
				<div>
					<strong className="text-2xl font-title text-secondary">
						{project.title}
					</strong>

					<p className="h-60 text-muted text-justify">{project.description}</p>
				</div>

				<div className="flex flex-col gap-4">
					<a
						className="flex items-center gap-2 font-title text-secondary hover:underline underline-offset-2 transition-all"
						href={project.githubUrl}
						referrerPolicy="no-referrer"
						rel="noreferrer"
						target="_blank"
						translate="no"
					>
						<IconBrandGithub />
						Github
					</a>

					{project.websiteUrl && (
						<a
							className="flex items-center gap-2 font-title text-primary hover:underline underline-offset-2 transition-all"
							href={project.websiteUrl}
							referrerPolicy="no-referrer"
							rel="noreferrer"
							target="_blank"
						>
							<IconArrowUpRight />
							Ver
						</a>
					)}
				</div>
			</div>
		</div>
	)
}
