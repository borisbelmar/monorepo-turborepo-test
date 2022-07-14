import axios from 'axios'

export default function getArticleService(token) {
  const baseUrl = 'http://localhost:4001'
  const headers = token ? { Authorization: `Bearer ${token}` } : {}
  const client = axios.create({
    baseURL: baseUrl,
    headers
  })

  const getAll = async () => {
    const response = await client.get('/v1/articles')
    return response.data
  }

  const getByUser = async (userId) => {
    const response = await client.get(`/v1/articles?user=${userId}`)
    return response.data
  }

  const getById = async (id) => {
    const response = await axios.get(`/v1/articles/${id}`)
    return response.data
  }

  const create = async (article) => {
    const response = await client.post('/v1/articles', article)
    return response.data
  }

  return {
    getAll,
    getByUser,
    getById,
    create
  }
}
