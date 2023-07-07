import PostPreview from '@/components/PostPreview'
import axios from 'axios'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts | Blog',
  description: 'Blog from Gabriel Rodrigues'
}

export interface Post {
  id: string
  owner_id: string
  parent_id: null
  slug: string
  title: string
  status: string
  source_url: null
  created_at: string
  updated_at: string
  published_at: string
  deleted_at: null
  owner_username: string
  tabcoins: number
  children_deep_count: number
}

export default async function Blog() {
  const response = await axios.get<Post[]>('https://www.tabnews.com.br/api/v1/contents/ogabrielrodrigues')

  return (
    <div className="flex h-full w-full flex-col gap-8 px-4 py-8 pt-12 md:px-12 xl:px-24 laptop:mx-auto laptop:w-[60%]">
      <h1 className="text-4xl font-bold">My latest posts</h1>

      <div className="flex flex-col gap-4">
        {response.data.map(post => {
          return (
            <PostPreview
              key={post.id}
              id={post.id}
              title={post.title}
              slug={post.slug}
              published_at={post.published_at}
            />
          )
        })}
      </div>
    </div>
  )
}
