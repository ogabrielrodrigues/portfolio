import type { Link } from "@/lib/links"

interface SocialLinkProps {
	link: Link
	url: string
}

export function SocialLink({ link, url }: SocialLinkProps) {
	return (
		<a
			className={`flex items-center gap-2 rounded-full px-4.5 py-3 font-medium ${
				link.highlight
					? "bg-foreground text-hero transition-transform hover:-translate-y-0.5"
					: "glass"
			}`}
			href={url}
			rel="noreferrer"
			target="_blank"
			title={link.content}
		>
			<link.icon className="size-5" />
			{link.reference}
		</a>
	)
}
