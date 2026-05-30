import jwt from "jsonwebtoken"
import { JWT_SECRET, JWT_REFRESH_SECRET } from "../configs/env.config.js"


const generateAccessToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: "5m" })
}

const verifyAccessToken = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

const createHttpOnlyTokenCookie = () => {
    return {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
};

export { generateAccessToken, verifyAccessToken, createHttpOnlyTokenCookie }