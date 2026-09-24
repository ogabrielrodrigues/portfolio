import type { Link } from "@/lib/links"
import { cn } from "@/lib/utils"

interface SocialLinkProps {
	link: Link
}

export function SocialLink({ link }: SocialLinkProps) {
	return (
		<a
			className={cn(
				"flex items-center gap-2 rounded-full px-4.5 py-3 font-medium",
				link.highlight
					? "bg-foreground text-hero transition-transform hover:-translate-y-0.5"
					: "border border-foreground/30 transition-colors hover:bg-indigo-950/60",
			)}
			href={link.url}
			rel="noreferrer"
			target="_blank"
			title={link.content}
		>
			<link.icon className="size-5" />
			{link.reference}
		</a>
	)
}
