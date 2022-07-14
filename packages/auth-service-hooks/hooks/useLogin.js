import { useMemo } from 'react'
import { useMutation } from 'react-query'
import getAuthService from '../services/getAuthService'

export default function useLogin() {
  const authService = useMemo(() => getAuthService(), [])

  const { mutateAsync, isLoading } = useMutation((payload) => authService.login(payload))

  return {
    execLogin: mutateAsync,
    isLoading
  }
}
