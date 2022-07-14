import React, {
  createContext,
  useMemo,
  useState,
  useCallback,
  useContext,
  useEffect
} from 'react'
import jwtDecode from 'jwt-decode'
import PropTypes from 'prop-types'

const TOKEN_KEY = 'app::token'

const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  tokenPayload: null,
  startSession: () => {},
  clearSession: () => {}
})

export function AuthProvider({ children, persistence }) {
  const [token, setToken] = useState(null)
  const [isCheckingSession, setCheckingSession] = useState(true)

  const startSession = useCallback(async (accessToken) => {
    setToken(accessToken)
    await persistence.setItem(TOKEN_KEY, accessToken)
  }, [persistence])

  const clearSession = useCallback(async () => {
    setToken(null)
    await persistence.removeItem(TOKEN_KEY)
  }, [persistence])

  const handleCheckSession = useCallback(async () => {
    const accessToken = await persistence.getItem(TOKEN_KEY)
    if (accessToken) {
      setToken(accessToken)
    }
  }, [persistence])

  useEffect(() => {
    handleCheckSession()
      .finally(() => setCheckingSession(false))
  }, [handleCheckSession])

  const tokenPayload = useMemo(() => {
    if (token) {
      try {
        return jwtDecode(token)
      } catch (error) {
        clearSession()
        return null
      }
    }
    return null
  }, [token, clearSession])

  return (
    <AuthContext.Provider
      value={useMemo(() => ({
        isAuthenticated: !!token,
        token,
        tokenPayload,
        startSession,
        clearSession,
        isCheckingSession
      }), [token, startSession, clearSession, isCheckingSession, tokenPayload])}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  persistence: PropTypes.shape({
    getItem: PropTypes.func.isRequired,
    setItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  }).isRequired
}

export const useAuth = () => useContext(AuthContext)
