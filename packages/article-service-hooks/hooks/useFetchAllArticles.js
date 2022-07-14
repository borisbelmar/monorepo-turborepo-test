import { useQuery } from 'react-query'
import useArticleService from './useArticleService'

export default function useFetchAllArticles(userId) {
  const articleService = useArticleService()

  const { data, isLoading, error } = useQuery({
    queryFn: () => userId ? articleService.getByUser(userId) : articleService.getAll(),
    queryKey: ['articles', userId]
  })

  return {
    data,
    isLoading,
    error
  }
}
