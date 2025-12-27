import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Lilex } from "next/font/google"
import type { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Portfolio | Gabriel Rodrigues",
	description: "Portfolio by Gabriel Rodrigues",
}

const display = Geist({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-geist",
})

const bold = Lilex({
	subsets: ["latin"],
	weight: ["700"],
	variable: "--font-lilex",
})

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="pt-BR">
			<body
				className={cn([
					display.variable,
					bold.variable,
					"font-sans antialiased max-w-svw min-h-svh text-md bg-foreground text-foreground",
				])}
			>
				<TooltipProvider>{children}</TooltipProvider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	)
}
