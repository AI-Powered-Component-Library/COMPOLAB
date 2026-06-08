const TOKEN_KEY = 'auth_access_token'
const USER_KEY = 'auth_user'

export const getStoredToken = () => localStorage.getItem(TOKEN_KEY)

export const setStoredToken = (token) => {
  if (token) localStorage.setItem(TOKEN_KEY, token)
}

export const removeStoredToken = () => localStorage.removeItem(TOKEN_KEY)

export const getStoredUser = () => {
  const user = localStorage.getItem(USER_KEY)

  if (!user) return null

  try {
    return JSON.parse(user)
  } catch (error) {
    localStorage.removeItem(USER_KEY)
    return null
  }
}

export const setStoredUser = (user) => {
  if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const removeStoredUser = () => localStorage.removeItem(USER_KEY)

export const clearAuthStorage = () => {
  removeStoredToken()
  removeStoredUser()
}
