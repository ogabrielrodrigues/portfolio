import { Post } from '@/app/blog/page'
import 'moment/locale/pt-br'
import Link from 'next/link'

import moment from 'moment'

type Props = Pick<Post, 'id' | 'title' | 'published_at' | 'slug'>

export function formatPublishDate(date: string) {
  return moment(date).format('L')
}

export default async function PostPreview(props: Props) {
  return (
    <Link href={`/blog/posts/${props.slug}`} className="group flex w-fit flex-col gap-1">
      <strong translate="no" className="text-2xl font-medium transition-colors hover:text-indigo-700">
        {props.title}
      </strong>
      <span className="self-start text-zinc-500 lg:self-end">{formatPublishDate(props.published_at)}</span>
    </Link>
  )
}
