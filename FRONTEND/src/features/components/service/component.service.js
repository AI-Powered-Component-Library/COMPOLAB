import axios from 'axios'
import { getStoredToken } from '../../auth/services/authStorage'

const API_BASE = import.meta.env.VITE_API_BASE_URL
  ? import.meta.env.VITE_API_BASE_URL.replace('/auth', '/components')
  : 'http://localhost:4000/api/v1/components'

const getHeaders = () => ({
  Authorization: `Bearer ${getStoredToken()}`,
  'Content-Type': 'application/json',
})

const componentService = {
  // GET /api/v1/components
  getAll: async () => {
    const { data } = await axios.get(API_BASE, { headers: getHeaders() })
    return data.data // returns array
  },

  // GET /api/v1/components/:id
  getById: async (id) => {
    const { data } = await axios.get(`${API_BASE}/${id}`, { headers: getHeaders() })
    return data.data
  },

  // POST /api/v1/components
  create: async (payload) => {
    const { data } = await axios.post(API_BASE, payload, { headers: getHeaders() })
    return data.data
  },

  // PUT /api/v1/components/:id
  update: async (id, payload) => {
    const { data } = await axios.put(`${API_BASE}/${id}`, payload, { headers: getHeaders() })
    return data.data
  },

  // DELETE /api/v1/components/:id
  remove: async (id) => {
    const { data } = await axios.delete(`${API_BASE}/${id}`, { headers: getHeaders() })
    return data
  },
}

export default componentService
