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
    let res = await getUserService()

    dispatch(setUser(res.data.data.user))
    console.log(res.data)
  }

  const handleLogout = async () => {
    let res = await logoutService()
    console.log(res.data)
  }

  const handleRefreshToken = async () => {
    let res = await refreshTokenService()
    return res.data.data.accessToken
  }


  return { handleRegister, handleLogin, handleGetUser, handleLogout, handleRefreshToken }
}

export default useAuth