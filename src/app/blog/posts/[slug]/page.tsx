import axios from 'axios'

import '@thonlabs/ui/core/base.css'

import Markdown from '@/components/Markdown'
import { formatPublishDate } from '@/components/PostPreview'
import { Metadata } from 'next'

interface PostProps {
  id: string
  owner_id: string
  parent_id: null
  slug: string
  title: string
  body: string
  status: string
  source_url: null
  published_at: string
  deleted_at: null
  owner_username: string
}

interface Props {
  params: {
    slug: string
  }
}

function generateDescription(body: string) {
  const markdown_splited = body.split('\n')
  const without_spaces = markdown_splited.filter(item => item !== '')
  const finded_subtitle = without_spaces
    .find(item => item.includes('<i>'))
    ?.replace('<i>', '')
    .replace('</i>', '')
    .trim()

  return finded_subtitle
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug

  const response = await fetch(`https://www.tabnews.com.br/api/v1/contents/ogabrielrodrigues/${slug}`)
  const post = (await response.json()) as PostProps

  return {
    title: post.title,
    description: generateDescription(post.body)
  }
}

export default async function Post({ params }: Props) {
  const response = await axios.get<PostProps>(
    `https://www.tabnews.com.br/api/v1/contents/ogabrielrodrigues/${params.slug}`
  )

  const data = response.data

  return (
    <div className="h-full w-full p-4 pb-8 pt-12 md:px-24 laptopl:mx-auto laptopl:w-[60%]">
      <div className="flex w-full justify-end font-normal text-gray-500">
        <span translate="yes">{formatPublishDate(data.published_at)}</span>
      </div>
      <Markdown content={data.body} />
    </div>
  )
}

export const revalidate = 3600
