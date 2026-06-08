import express from "express";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import errorMiddleware from "./middlewares/reject.middleware.js";
import responseMiddleware from "./middlewares/response.middleware.js";
import componentRoutes from "./routes/component.routes.js";
import aiRoutes from "./routes/ai.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(responseMiddleware);
app.use("/api/v1/auth", authRouter);

//component routes
app.use("/api/components", componentRoutes);

//opnai routes
app.use("/api/v1/components", aiRoutes);

app.use(errorMiddleware);

export default app;
