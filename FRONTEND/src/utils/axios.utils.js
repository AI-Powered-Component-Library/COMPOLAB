import axios from "axios"
import { store } from "../store/store.js"
import { setAccessToken } from "../features/auth/auth.slice"


export const api = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    withCredentials: true,
})


// REQUEST interceptor — attach access token to headers
api.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.accessToken;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


// RESPONSE interceptor — silent refresh on 401
api.interceptors.response.use((response) => {
    return response
}, async (error) => {
    const original = error.config;

    // If 401 and we haven't retried yet
    if (error.response?.status === 401 && !original._retry) {
        original._retry = true;
        try {

            // Get a new access token silently
            const { data } = await api.post("/auth/refresh-token")

            // Update the global token reference
            store.dispatch(setAccessToken(data.data.accessToken));

            // Retry the original request with new token
            original.headers.Authorization = `Bearer ${data.accessToken}`;
            return api(original);
        } catch (err) {
            window.location.href = '/login';
        }
    }
    return Promise.reject(error);
}
);