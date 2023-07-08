'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/logo.svg'

interface Props {
  home?: boolean
}

export default function Header({ home = false }: Props) {
  return (
    <header
      className={`flex w-full items-center justify-between p-3 px-4 text-white md:px-12 xl:px-24 ${
        home ? 'bg-transparent' : 'bg-gradient'
      }`}
    >
      <Link href="/">
        <Image src={logo} alt="Gabriel Rodrigues logo" className="z-50" />
      </Link>

      <Link href="/blog" className="transition-all hover:underline">
        Blog
      </Link>

      {/* <Menu /> */}
    </header>
  )
}
