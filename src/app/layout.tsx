import { Providers } from '@/components/Providers'
import { Open_Sans as OpenSans, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'

const openSans = OpenSans({ subsets: ['latin'], variable: '--font-open' })
const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata = {
  title: 'Home',
  description: 'My Works and Porifilio by Gabriel Rodrigues'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="notranslate" translate="no">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${spaceGrotesk.variable} ${openSans.variable} flex font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
