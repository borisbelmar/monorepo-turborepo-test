import { useMemo } from 'react'
import { useAuth } from 'auth-context'
import getArticleService from '../services/getArticleService'

export default function useArticleService () {
  const { token } = useAuth()
  const articleService = useMemo(() => getArticleService(token), [token])
  return articleService
}