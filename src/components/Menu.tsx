'use client'

import { Menu as MenuIcon } from 'lucide-react'
import Link from 'next/link'

import { useRef } from 'react'

export default function Menu() {
  const menuWrapperRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<SVGSVGElement>(null)

  function toggleMenu() {
    const { current: menuWrapper } = menuWrapperRef
    const { current: menu } = menuRef

    menuWrapper?.classList.toggle('-translate-y-full')
    menu?.classList.toggle('rotate-90')
  }

  return (
    <>
      <MenuIcon
        width={32}
        height={32}
        onClick={toggleMenu}
        className="z-[1001] transition-transform md:hidden"
        ref={menuRef}
      />

      <div
        className="absolute left-0 top-0 z-[1000] h-full w-full -translate-y-full bg-gradient transition-transform"
        ref={menuWrapperRef}
      >
        <div className="flex h-1/2 w-full flex-col items-center justify-center gap-10 text-2xl">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/blog" onClick={toggleMenu}>
            Posts
          </Link>
        </div>
      </div>
    </>
  )
}
