import "dotenv/config"
import { OpenAI } from "openai";

export const {
    PORT,
    MONGO_URI,
    NODE_ENV,
    JWT_SECRET,
    JWT_REFRESH_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    OPENAI_API_KEY
} = process.env

export const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

const checkVariables = {
    PORT,
    MONGO_URI,
    NODE_ENV,
    JWT_SECRET,
    JWT_REFRESH_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    OPENAI_API_KEY
}

Object.entries(checkVariables).forEach(([key, value]) => {
    if (!value) {
        console.log(`Missing Environment Variable: ${key}`)
        throw new Error("Missing Environment Variable : ", key)
    }
})