import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  fetchProfile,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from '../services/authApi'
import {
  clearAuthStorage,
  getStoredToken,
  getStoredUser,
  setStoredToken,
  setStoredUser,
} from '../services/authStorage'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getStoredUser())
  const [token, setToken] = useState(() => getStoredToken())
  const [initializing, setInitializing] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)

  const saveSession = ({ user: currentUser, accessToken }) => {
    if (accessToken) {
      setToken(accessToken)
      setStoredToken(accessToken)
    }

    if (currentUser) {
      setUser(currentUser)
      setStoredUser(currentUser)
    }
  }

  const clearSession = () => {
    setUser(null)
    setToken(null)
    clearAuthStorage()
  }

  useEffect(() => {
    const loadSession = async () => {
      try {
        if (!getStoredToken()) {
          setInitializing(false)
          return
        }

        const profileUser = await fetchProfile()
        saveSession({ user: profileUser, accessToken: getStoredToken() })
      } catch (error) {
        try {
          const newAccessToken = await refreshAccessToken()
          const profileUser = await fetchProfile()
          saveSession({ user: profileUser, accessToken: newAccessToken })
        } catch (refreshError) {
          clearSession()
        }
      } finally {
        setInitializing(false)
      }
    }

    loadSession()
  }, [])

  const register = async (payload) => {
    setAuthLoading(true)
    try {
      const data = await registerUser(payload)
      saveSession(data)
      return data
    } finally {
      setAuthLoading(false)
    }
  }

  const login = async (payload) => {
    setAuthLoading(true)
    try {
      const data = await loginUser(payload)
      saveSession(data)
      return data
    } finally {
      setAuthLoading(false)
    }
  }

  const logout = async () => {
    setAuthLoading(true)
    try {
      if (getStoredToken()) await logoutUser()
    } catch (error) {
      // Session still must be cleared on frontend even if backend logout fails.
    } finally {
      clearSession()
      setAuthLoading(false)
    }
  }

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(user && token),
      initializing,
      authLoading,
      register,
      login,
      logout,
    }),
    [user, token, initializing, authLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
