import { api } from "../../../utils/axios.utils"

const registerService = (data) => api.post("/auth/register", data)

const loginService = (data) => api.post("/auth/login", data)

const getUserService = () => api.get("/auth/user")

const logoutService = () => api.post('/auth/logout')

const refreshTokenService = () => api.post("/auth/refresh-token")


export { registerService, loginService, getUserService, logoutService, refreshTokenService }