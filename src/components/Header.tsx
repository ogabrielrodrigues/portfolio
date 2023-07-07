import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/logo.svg'
import Menu from './Menu'

export default async function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-gradient p-3 px-4 text-white md:px-12 xl:px-24">
      <Link href="/">
        <Image src={logo} alt="Gabriel Rodrigues logo" className="z-50" />
      </Link>

      <div className="flex gap-12">
        <Link href="/" className="hidden transition-all hover:underline md:block">
          Home
        </Link>
        <Link href="/blog" className="hidden transition-all hover:underline md:block">
          Posts
        </Link>
      </div>

      <Menu />
    </header>
  )
}
