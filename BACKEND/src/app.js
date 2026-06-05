import express from "express";
import authRouter from "./routes/auth.routes.js"
import componentRouter from "./routes/component.routes.js"
import cookieParser from "cookie-parser";
import morgan from "morgan"
import errorMiddleware from "./middlewares/reject.middleware.js";
import responseMiddleware from "./middlewares/response.middleware.js";

const app = express();


app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(responseMiddleware)
app.use("/api/auth/v1", authRouter);
app.use("/api/components/v1", componentRouter)


app.use(errorMiddleware)

export default app