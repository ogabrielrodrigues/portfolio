import { Inter, Space_Mono as SpaceMono } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import './globals.css'

import { i18n } from '../../i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

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

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = SpaceMono({ subsets: ['latin'], weight: ['700'], variable: '--font-space' })

export default function RootLayout({ children, params }: RootProps) {
  return (
    <html lang={params.lang}>
      <body className={cn(spaceGrotesk.variable, inter.variable, 'font-sans antialiased')}>{children}</body>
    </html>
  )
}
