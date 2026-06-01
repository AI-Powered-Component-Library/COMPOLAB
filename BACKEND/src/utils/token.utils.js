import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_REFRESH_SECRET, NODE_ENV } from "../configs/env.config.js";

const generateAccessToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: "7d" });
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, JWT_REFRESH_SECRET);
};

const createCookieOptions = (maxAge) => {
  return {
    httpOnly: true,
    secure: NODE_ENV === "production",
    sameSite: NODE_ENV === "production" ? "none" : "strict",
    maxAge,
  };
};

const accessTokenCookieOptions = () => createCookieOptions(15 * 60 * 1000);
const refreshTokenCookieOptions = () => createCookieOptions(7 * 24 * 60 * 60 * 1000);

export {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
};
