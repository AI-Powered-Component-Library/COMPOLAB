import { useCallback, useEffect, useState } from 'react'
import Dashboard from './components/Dashboard'
import FullPageLoader from './components/FullPageLoader'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from '../features/auth/context/AuthContext'
import Login from '../features/auth/pages/Login'
import Register from '../features/auth/pages/Register'

const getPath = () => window.location.pathname || '/login'

import PromptForm from "../features/ai/components/PromptForm.jsx";
import CodePreview from "../features/ai/components/CodePreview.jsx";
import Loader from "../features/ai/components/Loader.jsx";

import { generateComponent } from "../features/ai/services/ai.service";
const App = () => {
  const { initializing, isAuthenticated } = useAuth()
  const [path, setPath] = useState(getPath())

  const navigate = useCallback((nextPath, replace = false) => {
    if (replace) window.history.replaceState({}, '', nextPath)
    else window.history.pushState({}, '', nextPath)

    setPath(nextPath)
  }, [])

  useEffect(() => {
    const handlePopState = () => setPath(getPath())
    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (initializing) return

    if (path === '/') {
      navigate(isAuthenticated ? '/dashboard' : '/login', true)
    }
  }, [initializing, isAuthenticated, navigate, path])

  if (initializing) return <FullPageLoader />

  if (path === '/register') return <Register navigate={navigate} />
  if (path === '/login') return <Login navigate={navigate} />

  if (path === '/dashboard') {
    return (
      <ProtectedRoute navigate={navigate}>
        <Dashboard navigate={navigate} />
      </ProtectedRoute>
    )
  }

  navigate(isAuthenticated ? '/dashboard' : '/login', true)
  return <FullPageLoader />
}

export default App
