import { getStoredToken, setStoredToken } from './authStorage'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api/v1/auth'

const getErrorMessage = (data, fallback) => {
  if (typeof data?.message === 'string') return data.message
  if (typeof data?.error === 'string') return data.error
  return fallback
}

const request = async (endpoint, options = {}) => {
  const token = getStoredToken()

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: 'include',
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok || data?.success === false) {
    throw new Error(getErrorMessage(data, 'Something went wrong'))
  }

  return data
}

export const registerUser = async (payload) => {
  const data = await request('/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  if (data?.data?.accessToken) {
    setStoredToken(data.data.accessToken)
  }

  return data.data
}

export const loginUser = async (payload) => {
  const data = await request('/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  if (data?.data?.accessToken) {
    setStoredToken(data.data.accessToken)
  }

  return data.data
}

export const fetchProfile = async () => {
  const data = await request('/profile', {
    method: 'GET',
  })

  return data.data?.user
}

export const refreshAccessToken = async () => {
  const data = await request('/refresh-token', {
    method: 'POST',
  })

  if (data?.data?.accessToken) {
    setStoredToken(data.data.accessToken)
  }

  return data.data?.accessToken
}

export const logoutUser = async () => {
  return request('/logout', {
    method: 'POST',
  })
}