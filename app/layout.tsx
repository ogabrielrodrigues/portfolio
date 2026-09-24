import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Archivo, Geist, Lilex } from "next/font/google"
import type { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Portfolio | Gabriel Rodrigues",
	description: "Portfolio by Gabriel Rodrigues",
}

const sans = Geist({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-geist",
})

const mono = Lilex({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-lilex",
})

const display = Archivo({
	subsets: ["latin"],
	axes: ["wdth"],
	variable: "--font-archivo",
})

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="pt-BR">
			<body
				className={cn([
					sans.variable,
					mono.variable,
					display.variable,
					"font-sans antialiased max-w-svw min-h-svh bg-foreground text-secondary",
				])}
			>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	)
}
