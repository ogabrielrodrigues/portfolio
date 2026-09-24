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
import styles from "@/styles.css?url"

const fonts = [geist, lilex, archivo]

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Portfolio | Gabriel Rodrigues" },
			{ name: "description", content: "Portfolio by Gabriel Rodrigues" },
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
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
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
			<body className="font-sans antialiased max-w-svw min-h-svh bg-foreground text-secondary">
				<Outlet />
				<SpeedInsights />
				<Analytics />
				<Scripts />
			</body>
		</html>
	)
}
