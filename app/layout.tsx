import { cn } from '@/lib/utils'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Geist, Geist_Mono as GeistMono } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './globals.css'

export const metadata = {
  title: 'Portfolio | Gabriel Rodrigues',
  description: 'Portfolio by Gabriel Rodrigues'
}

const display = Geist({ subsets: ['latin'], weight: ['400'], variable: '--font-display' })
const bold = GeistMono({ subsets: ['latin'], weight: ['700'], variable: '--font-mono' })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className={cn([display.variable, bold.variable, 'font-display antialiased'])}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
