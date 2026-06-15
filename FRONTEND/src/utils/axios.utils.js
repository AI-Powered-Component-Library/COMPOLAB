import axios from "axios"
import { store } from "../store/store.js"
import { setAccessToken } from "../features/auth/auth.slice"
import { refreshTokenService } from "../features/auth/services/auth.service"

export const api = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    withCredentials: true,
})

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve(token)
        }
    })
    failedQueue = []
}


api.interceptors.request.use(config => {

    const state = store.getState()
    const token = state.auth?.token

    console.log(token)

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
}, (error) => Promise.reject(error)
)


api.interceptors.response.use(res => res, (err) => {

    console.log(err)
})