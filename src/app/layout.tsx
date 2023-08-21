import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space' })

export const metadata = {
  title: 'Gabriel Rodrigues',
  description: 'Portfolio from Gabriel Rodrigues'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="notranslate" translate="no">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} flex font-sans`}>{children}</body>
    </html>
  )
}
