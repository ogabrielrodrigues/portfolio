import archivo from "@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2?url"
import geist from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url"
import lilex from "@fontsource-variable/lilex/files/lilex-latin-wght-normal.woff2?url"
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { site } from "@/lib/site"
import styles from "@/styles.css?url"

const fonts = [geist, lilex, archivo]
const image = `${site.url}${site.image.path}`

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: site.title },
			{ name: "description", content: site.description },
			{ name: "author", content: site.name },
			{ name: "theme-color", content: site.themeColor },
			{ property: "og:type", content: "website" },
			{ property: "og:locale", content: "pt_BR" },
			{ property: "og:site_name", content: site.name },
			{ property: "og:url", content: `${site.url}/` },
			{ property: "og:title", content: site.title },
			{ property: "og:description", content: site.description },
			{ property: "og:image", content: image },
			{ property: "og:image:type", content: "image/png" },
			{ property: "og:image:width", content: String(site.image.width) },
			{ property: "og:image:height", content: String(site.image.height) },
			{ property: "og:image:alt", content: site.image.alt },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: site.title },
			{ name: "twitter:description", content: site.description },
			{ name: "twitter:image", content: image },
			{ name: "twitter:image:alt", content: site.image.alt },
		],
		links: [
			...fonts.map(href => ({
				rel: "preload",
				href,
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous" as const,
			})),
			{ rel: "stylesheet", href: styles },
			{ rel: "canonical", href: `${site.url}/` },
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
			{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
			{ rel: "manifest", href: "/manifest.webmanifest" },
		],
	}),
	component: RootLayout,
})

function RootLayout() {
	return (
		<html lang="pt-BR">
			<head>
				<HeadContent />
			</head>
			<body className="antialiased max-w-svw min-h-svh">
				<Outlet />
				<SpeedInsights />
				<Analytics />
				<Scripts />
			</body>
		</html>
	)
}
