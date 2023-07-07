import Header from '@/components/Header'
import { Metadata } from 'next'
import { Open_Sans as OpenSans, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import '../globals.css'

const openSans = OpenSans({ subsets: ['latin'], variable: '--font-open' })
const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: {
    template: '%s | Blog',
    default: 'Blog'
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${spaceGrotesk.variable} ${openSans.variable} flex h-screen w-screen flex-col font-sans`}>
      <Header />
      {children}
    </section>
  )
}
