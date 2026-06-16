import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from "../features/auth/hooks/useAuth"

const App = () => {

  const { handleGetUser } = useAuth()

  useEffect(() => {
   handleGetUser()
  }, [])



  return (<Outlet />)
}

export default App