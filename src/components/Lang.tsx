'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip'

export function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="absolute right-4 top-4 z-50 flex items-center gap-2 text-body">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={redirectedPathName('br')}
              className="cursor-pointer rounded-md p-1 transition-colors hover:bg-alpha"
            >
              BR
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Português - BR</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={redirectedPathName('en')}
              className="cursor-pointer rounded-md p-1 transition-colors hover:bg-alpha"
            >
              US
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>English - US</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
