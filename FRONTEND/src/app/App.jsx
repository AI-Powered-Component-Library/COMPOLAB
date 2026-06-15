import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from "../features/auth/hooks/useAuth"

const App = () => {

  const { handleGetUser, handleRefreshToken } = useAuth()

  useEffect(() => {

    handleRefreshToken().then(res => handleGetUser(res))

  }, [])



  return (<Outlet />)
}

export default App