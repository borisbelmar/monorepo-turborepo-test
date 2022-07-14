/* eslint-disable no-underscore-dangle */
import { useFetchAllArticles } from 'article-service-hooks'
import { useAuth } from 'auth-context'
import { ArticleItem } from 'ui'
import useAuthRoute from '../../../hooks/useAuthRoute'
import DefaultLayout from '../../layouts/DefaultLayout'

export default function MyArticles() {
  const { tokenPayload } = useAuth()
  const { data } = useFetchAllArticles(tokenPayload?.sub)
  useAuthRoute({ isPrivateOnly: true })

  return (
    <DefaultLayout>
      <div className="flex-1 w-full max-w-2xl mx-auto px-2 py-8">
        <h1 className="font-bold text-2xl uppercase text-center mb-16">My Articles</h1>
        <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {data?.map((article) => (
            <ArticleItem key={article._id} article={article} />
          ))}
        </ul>
      </div>
    </DefaultLayout>
  )
}
