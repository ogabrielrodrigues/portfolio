import { Inter as Body, Space_Mono as Mono } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Portfolio | Gabriel Rodrigues',
  description: 'Portfolio by Gabriel Rodrigues'
}

interface RootProps {
  children: ReactNode
}

const body = Body({ subsets: ['latin'], weight: ['400'], variable: '--font-body' })
const mono = Mono({ subsets: ['latin'], weight: ['700'], variable: '--font-mono' })

export default function RootLayout({ children }: RootProps) {
  return (
    <html>
      <body className={cn(mono.variable, body.variable, 'font-sans antialiased')}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
