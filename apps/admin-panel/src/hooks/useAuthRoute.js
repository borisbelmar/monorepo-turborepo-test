import { useAuth } from 'auth-context'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAuthRoute({ isPublicOnly, isPrivateOnly }) {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isPublicOnly && isAuthenticated) {
      navigate('/')
    } else if (isPrivateOnly && !isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, isPublicOnly, isPrivateOnly, navigate])
}
