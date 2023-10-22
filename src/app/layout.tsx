import { Inter as Body, Space_Mono as Mono } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import './globals.css'

export const metadata = {
  title: 'Gabriel Rodrigues',
  description: 'Portfolio by Gabriel Rodrigues'
}

interface RootProps {
  children: ReactNode
  params: {
    lang: string
  }
}

const body = Body({ subsets: ['latin'], variable: '--font-body' })
const mono = Mono({ subsets: ['latin'], weight: ['700'], variable: '--font-mono' })

export default function RootLayout({ children, params }: RootProps) {
  return (
    <html lang={params.lang}>
      <body className={cn(mono.variable, body.variable, 'font-sans antialiased')}>{children}</body>
    </html>
  )
}
