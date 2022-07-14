import { useMemo } from 'react'
import { useMutation } from 'react-query'
import getAuthService from '../services/getAuthService'

export default function useRegister() {
  const authService = useMemo(() => getAuthService(), [])

  const { mutateAsync, isLoading } = useMutation((payload) => authService.register(payload))

  return {
    execRegister: mutateAsync,
    isLoading
  }
}
