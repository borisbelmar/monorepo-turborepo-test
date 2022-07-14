import { useMutation } from 'react-query'
import useArticleService from './useArticleService'

export default function useCreateArticle() {
  const articleService = useArticleService()

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (payload) => articleService.create(payload),
    mutationKey: ['createArticle', articleService]
  })

  return {
    execCreate: mutateAsync,
    isLoading
  }
}
