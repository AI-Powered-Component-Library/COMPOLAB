import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const user = useSelector(state => state.auth.user)
    const isLoading = useSelector(state => state.auth.isLoading)

    if (isLoading) return <h1>Loading...</h1>

    return <Outlet />
}

export default ProtectedRoute