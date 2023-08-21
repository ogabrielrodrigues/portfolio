import { Inter, Space_Mono as SpaceMono } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Gabriel Rodrigues',
  description: 'Portfolio by Gabriel Rodrigues'
}

interface RootProps {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = SpaceMono({ subsets: ['latin'], weight: ['700'], variable: '--font-space' })

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="pt_BR">
      <body className={cn(spaceGrotesk.variable, inter.variable, 'flex font-sans antialiased')}>{children}</body>
    </html>
  )
}
