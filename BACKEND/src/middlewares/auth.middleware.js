import { AppError } from "../utils/asyncHandler.utils.js";
import { verifyAccessToken } from "../utils/token.utils.js";
import MongoUserRepository from "../repository/implement/mongo.user.js";

class AuthMiddleware {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  protect = async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      const bearerToken = authHeader?.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null;

      const token = req.cookies?.accessToken || bearerToken;

      if (!token) {
        throw new AppError(401, "Unauthorized: token missing");
      }

      const decoded = verifyAccessToken(token);
      const user = await this.userRepository.findUserById(decoded.id);

      if (!user) {
        throw new AppError(401, "Unauthorized: user not found");
      }

      req.user = {
        id: user._id.toString(),
        role: user.role,
        email: user.email,
      };

      next();
    } catch (error) {
      next(error.statusCode ? error : new AppError(401, "Unauthorized: invalid token"));
    }
  };

  allowRoles = (...roles) => {
    return (req, res, next) => {
      if (!req.user) {
        return next(new AppError(401, "Unauthorized"));
      }

      if (!roles.includes(req.user.role)) {
        return next(new AppError(403, "Forbidden: insufficient permission"));
      }

      next();
    };
  };
}

const authMiddleware = new AuthMiddleware(new MongoUserRepository());

export default authMiddleware;
