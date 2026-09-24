import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react"
import Image from "next/image"
import type { Project } from "@/lib/projects"
import { cn } from "@/lib/utils"

interface ProjectProps {
	project: Project
	index: number
}

export default function ProjectCard({ project, index }: ProjectProps) {
	return (
		<div className="flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-[0_20px_25px_-5px_rgb(0_0_0/0.08),0_8px_10px_-6px_rgb(0_0_0/0.08)] transition-transform duration-250 hover:-translate-y-1">
			<a
				className="flex w-full cursor-pointer"
				href={project.githubUrl}
				referrerPolicy="no-referrer"
				rel="noreferrer"
				target="_blank"
			>
				<div
					className={cn(
						"flex items-center justify-center aspect-video w-full border-b",
						project.projectColor,
					)}
				>
					<Image
						alt={`${project.title} Screenshot`}
						className="w-3/5"
						height={0}
						src={project.screenshotUrl}
						width={0}
					/>
				</div>
			</a>

			<div className="flex flex-1 flex-col justify-between gap-7 p-7">
				<div className="flex flex-col gap-3">
					<span className="font-title text-[13px] text-primary">
						{String(index + 1).padStart(2, "0")}
					</span>

					<strong className="font-display text-2xl font-extrabold leading-[1.1] text-secondary [font-stretch:112%]">
						{project.title}
					</strong>

					<p className="text-muted leading-[1.55] text-pretty">
						{project.description}
					</p>
				</div>

				<div className="flex gap-5 border-t border-border pt-5">
					<a
						className="flex items-center gap-1.5 font-title font-bold text-secondary underline-offset-3 hover:underline"
						href={project.githubUrl}
						referrerPolicy="no-referrer"
						rel="noreferrer"
						target="_blank"
						translate="no"
					>
						<IconBrandGithub className="size-5" />
						Github
					</a>

					{project.websiteUrl && (
						<a
							className="flex items-center gap-1.5 font-title font-bold text-primary underline-offset-3 hover:underline"
							href={project.websiteUrl}
							referrerPolicy="no-referrer"
							rel="noreferrer"
							target="_blank"
						>
							<IconArrowUpRight className="size-5" />
							Ver
						</a>
					)}
				</div>
			</div>
		</div>
	)
}
