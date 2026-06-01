import bcrypt from "bcrypt";
import { AppError } from "../utils/asyncHandler.utils.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/token.utils.js";

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  sanitizeUser(user) {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  createTokens(user) {
    const payload = {
      id: user._id.toString(),
      role: user.role,
    };

    return {
      accessToken: generateAccessToken(payload),
      refreshToken: generateRefreshToken(payload),
    };
  }

  async register(payload) {
    const existingUser = await this.userRepository.findUserByEmail(payload.email);

    if (existingUser) {
      throw new AppError(409, "User already exists with this email");
    }

    const hashedPassword = await bcrypt.hash(payload.password, 12);

    const user = await this.userRepository.createUser({
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
    });

    const { accessToken, refreshToken } = this.createTokens(user);
    await this.userRepository.updateRefreshToken(user._id, refreshToken);

    return {
      user: this.sanitizeUser(user),
      accessToken,
      refreshToken,
    };
  }

  async login(payload) {
    const user = await this.userRepository.findUserByEmailWithPassword(payload.email);

    if (!user) {
      throw new AppError(401, "Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(payload.password, user.password);

    if (!isPasswordValid) {
      throw new AppError(401, "Invalid email or password");
    }

    const { accessToken, refreshToken } = this.createTokens(user);
    await this.userRepository.updateRefreshToken(user._id, refreshToken);

    return {
      user: this.sanitizeUser(user),
      accessToken,
      refreshToken,
    };
  }

  async getProfile(userId) {
    const user = await this.userRepository.findUserById(userId);

    if (!user) {
      throw new AppError(404, "User not found");
    }

    return this.sanitizeUser(user);
  }

  async refreshAccessToken(refreshToken) {
    if (!refreshToken) {
      throw new AppError(401, "Refresh token is required");
    }

    let decoded;

    try {
      decoded = verifyRefreshToken(refreshToken);
    } catch (error) {
      throw new AppError(401, "Invalid or expired refresh token");
    }

    const user = await this.userRepository.findUserByIdWithRefreshToken(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      throw new AppError(401, "Refresh token is invalid or already used");
    }

    const tokens = this.createTokens(user);
    await this.userRepository.updateRefreshToken(user._id, tokens.refreshToken);

    return tokens;
  }

  async logout(userId) {
    await this.userRepository.removeRefreshToken(userId);
    return true;
  }
}

export default AuthService;
