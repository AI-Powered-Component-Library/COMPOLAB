import { getUserService, googleAuthService, loginService, logoutService, refreshTokenService, registerService } from '../services/auth.service'
import { useDispatch } from "react-redux"
import { setAccessToken, setUser } from '../auth.slice'

const useAuth = () => {


  const dispatch = useDispatch()


    const handleGoogleAuth = async (response) => {
        try {
            const token = await googleAuthService(response.credential);
            const profileRes = await profileService(token);
            const user = profileRes.data;
            dispatch(loginSuccess({ token, user }));
        } catch (error) {
            dispatch(setError(error?.response?.data?.message || error.message));
            console.error("Google Auth Error:", error?.response?.data || error.message);
        }
    };


  const handleRegister = async (data) => {

    const res = await registerService(data)

    let token = res.data.data.accessToken

    dispatch(setAccessToken(token))
  }

  const handleLogin = async (data) => {

    const res = await loginService(data)

    let token = res.data.data.accessToken

    dispatch(setAccessToken(token))
    handleGetUser()
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


  return { handleRegister, handleLogin, handleGetUser, handleLogout, handleRefreshToken , handleGoogleAuth }
}

export default useAuth