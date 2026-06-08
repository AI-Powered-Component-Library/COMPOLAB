import { useEffect } from 'react'
import { useAuth } from '../../features/auth/context/AuthContext'
import FullPageLoader from './FullPageLoader'

const ProtectedRoute = ({ children, navigate }) => {
  const { isAuthenticated, initializing } = useAuth()

  useEffect(() => {
    if (!initializing && !isAuthenticated) {
      navigate('/login', true)
    }
  }, [initializing, isAuthenticated, navigate])

  if (initializing) return <FullPageLoader />
  if (!isAuthenticated) return null

  return children
}

export default ProtectedRoute
