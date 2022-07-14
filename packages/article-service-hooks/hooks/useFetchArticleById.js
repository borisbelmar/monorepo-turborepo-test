import { useQuery } from 'react-query'
import useArticleService from './useArticleService'

export default function useFetchArticleById(id) {
  const articleService = useArticleService()

  const { data, isLoading, error } = useQuery({
    queryFn: () => articleService.getById(id),
    queryKey: ['article', id]
  })

  return {
    data,
    isLoading,
    error
  }
}
