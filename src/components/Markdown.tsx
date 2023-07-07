'use client'

import { RenderMarkdown } from '@thonlabs/ui'
import Prism from 'prismjs'
import { useEffect } from 'react'

import 'dracula-prism/dist/css/dracula-prism.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'

interface Props {
  content: string
}

export default function Markdown({ content }: Props) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return <RenderMarkdown value={content}></RenderMarkdown>
}
