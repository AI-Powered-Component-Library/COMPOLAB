import React from 'react'
import { loginService, registerService } from '../services/auth.service'
import { useDispatch } from "react-redux"
import { setAccessToken } from '../auth.slice'

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

  


  return { handleRegister, handleLogin }
}

export default useAuth