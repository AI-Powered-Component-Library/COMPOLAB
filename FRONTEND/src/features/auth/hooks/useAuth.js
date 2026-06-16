import React from 'react'
import { getUserService, loginService, logoutService, refreshTokenService, registerService } from '../services/auth.service'
import { useDispatch } from "react-redux"
import { setAccessToken, setUser } from '../auth.slice'

const useAuth = () => {


  const dispatch = useDispatch()

  const handleRegister = async (data) => {

    const res = await registerService(data)

    let token = res.data.data.accessToken

    dispatch(setAccessToken(token))
  }

  const handleLogin = async (data) => {

    const res = await loginService(data)

    let token = res.data.data.accessToken

    dispatch(setAccessToken(token))
  }

  const handleGetUser = async () => {
    let { data } = await getUserService()

    dispatch(setUser(data.data.user))
  }

  const handleLogout = async () => {
    try {
      let { data } = await logoutService()
      console.log(data)
    } catch (error) {
      console.error("Logout failed on server:", error)
    } finally {
      dispatch(setUser(null))
      dispatch(setAccessToken(null))
    }
  }

  const handleRefreshToken = async () => {
    let res = await refreshTokenService()
    return res.data.data.accessToken
  }


  return { handleRegister, handleLogin, handleGetUser, handleLogout, handleRefreshToken }
}

export default useAuth