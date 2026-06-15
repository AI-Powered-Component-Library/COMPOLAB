import AuthValidator from "../validators/auth.validator.js";
import { AppError } from "../utils/asyncHandler.utils.js";
import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from "../utils/token.utils.js";

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  setAuthCookies(res, accessToken, refreshToken) {
    res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions());
  }

  clearAuthCookies(res) {
    res.clearCookie("refreshToken", refreshTokenCookieOptions());
  }

  register = async (req, res) => {
    const { error, value } = AuthValidator.validateRegister(req.body);

    if (error) {
      const message = error.details.map((detail) => detail.message).join(", ");
      throw new AppError(400, message);
    }

    const result = await this.authService.register(value);
    this.setAuthCookies(res, result.refreshToken);

    return res.success(201, "User registered successfully", {
      accessToken: result.accessToken,
    });
  };

  login = async (req, res) => {
    const { error, value } = AuthValidator.validateLogin(req.body);

    if (error) {
      const message = error.details.map((detail) => detail.message).join(", ");
      throw new AppError(400, message);
    }

    const result = await this.authService.login(value);
    this.setAuthCookies(res, result.refreshToken);

    return res.success(200, "User logged in successfully", {
      accessToken: result.accessToken,
    });
  };

  getUser = async (req, res) => {
    const user = await this.authService.getProfile(req.user.id);
    return res.success(200, "Profile fetched successfully", { user });
  };

  refreshToken = async (req, res) => {
    const token = req.cookies?.refreshToken || req.body?.refreshToken;
    const result = await this.authService.refreshAccessToken(token);

    this.setAuthCookies(res, result.refreshToken);

    return res.success(200, "Token refreshed successfully", {
      accessToken: result.accessToken,
    });
  };

  logout = async (req, res) => {
    await this.authService.logout(req.user.id);
    this.clearAuthCookies(res);

    return res.success(200, "User logged out successfully", null);
  };
}

export default AuthController;
