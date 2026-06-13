import { api } from "../../../utils/axios.utils"

const registerService = (data) => api.post("/auth/register", data)

const loginService = (data) => api.post("/auth/login", data)


export { registerService,loginService }