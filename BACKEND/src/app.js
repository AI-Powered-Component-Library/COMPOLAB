import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import authRouter from "./routes/auth.routes.js";
import componentRoutes from "./routes/component.routes.js";
import paymentRouter from "./routes/payment.route.js"

import errorMiddleware from "./middlewares/reject.middleware.js";
import responseMiddleware from "./middlewares/response.middleware.js";

const app = express();

const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5173", "http://127.0.0.1:5173"].filter(Boolean);

app.use(morgan("dev"));
app.use(express.static("public"))

app.use(cors({
  origin: function (origin, callback) {
    // Allow Postman / backend requests with no origin
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(responseMiddleware);

app.get("/api/health", (req, res) => {
  res.json({ message: "API IS ALIVE" })
})

app.use("/api/v1/auth", authRouter);

// component routes
app.use("/api/v1/component", componentRoutes);

// payment routes
app.use("/api/v1/payment", paymentRouter)


// frontend routes
app.use("*path",(req, res) => {
    res.sendFile("index.html", { root: "public" })
})

app.use(errorMiddleware);

export default app;