import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PublicRoute = () => {

  const token = useSelector(state => state.auth.accessToken)

  return token ? <Navigate to={"/"} replace /> : <Outlet />
}

export default PublicRoute