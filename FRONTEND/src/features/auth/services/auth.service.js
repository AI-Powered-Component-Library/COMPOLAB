import { api } from "../../../utils/axios.utils"

const registerService = (data) => api.post("/auth/register", data)

const loginService = (data) => api.post("/auth/login", data)

const getUserService = (token) => api.get("/auth/user", { headers: { Authorization: `Bearer ${token}` } })

const logoutService = () => api.post('/auth/logout')

const refreshTokenService = () => api.post("/auth/refresh-token")


export { registerService, loginService, getUserService, logoutService, refreshTokenService }