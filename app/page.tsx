import { IconMouse2 } from "@tabler/icons-react"
import Project from "@/components/project"
import { SocialLink } from "@/components/social-link"
import { links } from "@/lib/links"
import { getProjects } from "@/lib/projects"

export default async function PortfolioPage() {
	const projects = await getProjects()

	return (
		<div>
			<section className="relative h-screen flex items-center justify-center bg-linear-to-tr from-primary to-secondary">
				<div>
					<main className="flex flex-col items-center justify-center space-y-4 px-4 lg:px-0">
						<p className="select-none self-start md:text-xl">
							Olá 👋, sou Gabriel Rodrigues
						</p>

						<h1 className="text-center font-bold font-title text-4xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl">
							Desenvolvedor Web
						</h1>

						<div className="flex flex-col-reverse items-center justify-between gap-6 lg:w-full lg:flex-row">
							<div className="flex items-center justify-center space-x-2">
								{links.map(link => (
									<SocialLink key={link.reference} link={link} />
								))}
							</div>

							<p className="text-center xsm:px-2 md:px-0 md:pl-28 md:pr-4 md:text-end md:text-xl lg:max-w-3xl xl:px-0 4xl:text-2xl">
								Tenho 20 anos, sou técnico em Desenvolvimento de Sistemas e
								minhas experiências englobam Node.js, React e Go.
							</p>
						</div>
					</main>

					<div className="absolute flex flex-col items-center space-y-2 bottom-8 left-1/2 -translate-x-1/2">
						<IconMouse2 className="size-6 animate-bounce" />
						<span>Role para baixo</span>
					</div>
				</div>
			</section>

			<section className="flex flex-col space-y-12 p-5 md:p-8">
				<h1 className="text-center font-title font-bold text-4xl text-secondary">
					Meus melhores projetos
				</h1>

				<div className="grid lg:grid-cols-3 gap-4 lg:w-6xl lg:mx-auto">
					{projects.map(project => (
						<Project key={project.title} project={project} />
					))}
				</div>
			</section>
		</div>
	)
}
