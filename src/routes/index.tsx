import { IconMouse2 } from "@tabler/icons-react"
import { createFileRoute } from "@tanstack/react-router"
import logo from "@/assets/logo.svg"
import Project from "@/components/project"
import { SocialLink } from "@/components/social-link"
import { links } from "@/lib/links"
import { getPortfolio } from "@/server/portfolio"

const stack = ["Go", "Node.js", "React"]

export const Route = createFileRoute("/")({
	loader: () => getPortfolio(),
	component: PortfolioPage,
})

function PortfolioPage() {
	const { projects, urls } = Route.useLoaderData()

	return (
		<div>
			<section className="relative flex min-h-screen flex-col overflow-hidden bg-hero text-hero-foreground">
				<div className="pointer-events-none absolute inset-0 bg-grid" />

				<header className="relative flex items-center justify-between gap-4 px-[clamp(20px,4vw,56px)] py-7">
					<div className="flex items-center gap-3">
						<img
							alt="Logo"
							className="size-8"
							decoding="async"
							height={32}
							src={logo}
							width={32}
						/>
						<span className="font-title text-sm tracking-[.02em] max-sm:hidden">
							gabriel.rodrigues
						</span>
					</div>

					<div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-hero-foreground/18 bg-indigo-950/35 px-3.5 py-2 font-title text-[13px]">
						<span className="size-2 shrink-0 rounded-full bg-status animate-status" />
						<span>Aberto a oportunidades</span>
					</div>
				</header>

				<main className="relative flex flex-1 flex-col justify-center gap-[clamp(20px,3vw,36px)] px-[clamp(20px,4vw,56px)]">
					<p className="select-none font-title text-[clamp(15px,1.4vw,20px)] text-comment">
						{"// Olá 👋, sou Gabriel Rodrigues"}
					</p>

					<h1 className="font-display text-[clamp(32px,7.4vw,180px)] font-black uppercase leading-[.86] tracking-[-.02em] [font-stretch:125%]">
						<span className="block">Desenvolvedor</span>
						<span className="flex items-center gap-[.25em]">
							<span className="text-outline">Web</span>
							<span className="h-[.09em] min-w-10 flex-1 bg-linear-to-r from-hero-foreground to-transparent" />
						</span>
					</h1>

					<div className="mt-2 flex flex-wrap items-end justify-between gap-x-12 gap-y-7">
						<div className="flex flex-col gap-5">
							<div className="flex flex-wrap gap-2">
								{stack.map((tech, i) => (
									<span
										className={
											i === 0
												? "rounded-md border border-highlight bg-highlight px-3 py-1.5 font-title text-[13px] font-bold text-hero"
												: "rounded-md border border-hero-foreground/14 bg-hero-foreground/8 px-3 py-1.5 font-title text-[13px]"
										}
										key={tech}
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex flex-wrap items-center gap-2.5">
								{links.map(link => (
									<SocialLink key={link.id} link={link} url={urls[link.id]} />
								))}
							</div>
						</div>

						<p className="max-w-130 text-[clamp(17px,1.5vw,22px)] leading-[1.45] text-pretty text-[oklch(88%_0.04_272.788)]">
							Tenho 20 anos, sou técnico em Desenvolvimento de Sistemas e minhas
							experiências englobam Node.js, React e Go.
						</p>
					</div>
				</main>

				<div className="relative flex items-center justify-center gap-2.5 pt-10 pb-7 font-title text-[13px] text-[oklch(85%_0.05_272.788)]">
					<IconMouse2 className="size-5.5 animate-bounce" />
					<span>Role para baixo</span>
				</div>
			</section>

			<section className="flex flex-col gap-12 px-[clamp(20px,4vw,56px)] py-[clamp(56px,8vw,112px)]">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-3">
					<span className="font-title text-sm text-primary">
						{"// projetos"}
					</span>
					<h2 className="font-display text-[clamp(32px,5vw,64px)] font-black uppercase leading-[.95] tracking-[-.02em] text-foreground [font-stretch:125%]">
						Meus melhores projetos
					</h2>
				</div>

				<div className="mx-auto grid w-full max-w-6xl grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
					{projects.map((project, i) => (
						<Project index={i} key={project.title} project={project} />
					))}
				</div>
			</section>
		</div>
	)
}
