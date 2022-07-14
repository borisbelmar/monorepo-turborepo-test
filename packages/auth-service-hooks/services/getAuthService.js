import axios from 'axios'

export default function getAuthService() {
  const baseUrl = 'http://localhost:4001'

  const login = async (payload) => {
    const response = await axios.post(`${baseUrl}/v1/auth/login`, payload)
    return response.data
  }

  const register = async (payload) => {
    const response = await axios.post(`${baseUrl}/v1/auth/register`, payload)
    return response.data
  }

  return {
    login,
    register
  }
}
