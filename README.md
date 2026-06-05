# 🧪 COMPOLAB — AI-Powered UI Component Library

> A full-stack web application for generating, managing, and sharing AI-powered UI components.
> Built by **SKS** (Shivam, Khalid, Shubham).

---

## 📑 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture Diagram](#architecture-diagram)
- [Complete Directory Tree](#complete-directory-tree)
- [Backend — Deep Dive](#backend--deep-dive)
  - [Entry Point & Server Bootstrap](#entry-point--server-bootstrap)
  - [Application Setup (`app.js`)](#application-setup-appjs)
  - [Configs](#configs)
  - [Models (Mongoose Schemas)](#models-mongoose-schemas)
  - [Repository Layer (Contract / Implement Pattern)](#repository-layer-contract--implement-pattern)
  - [Services (Business Logic)](#services-business-logic)
  - [Controllers (Request Handlers)](#controllers-request-handlers)
  - [Validators (Joi Schemas)](#validators-joi-schemas)
  - [Middlewares](#middlewares)
  - [Utilities](#utilities)
  - [Routes & API Endpoints](#routes--api-endpoints)
- [Frontend — Deep Dive](#frontend--deep-dive)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Design Patterns & Architectural Decisions](#design-patterns--architectural-decisions)

---

## Overview

**COMPOLAB** is a UI Component Library platform where users can:

1. **Register / Login** with JWT-based authentication (access + refresh tokens).
2. **Generate UI components** via AI prompts.
3. **Store generated components** alongside metadata (S3 keys, file URLs).
4. **Browse, manage, and reuse** saved components.

The project is a **monorepo** with two top-level folders:

| Folder      | Purpose                                    |
| ----------- | ------------------------------------------ |
| `BACKEND/`  | Express.js REST API (Node.js + MongoDB)    |
| `FRONTEND/` | React SPA built with Vite                  |

---

## Tech Stack

### Backend
| Technology   | Version   | Purpose                                  |
| ------------ | --------- | ---------------------------------------- |
| Node.js      | ≥ 18      | JavaScript runtime                       |
| Express      | 5.2.1     | HTTP framework                           |
| Mongoose     | 9.6.2     | MongoDB ODM                              |
| bcrypt       | 6.0.0     | Password hashing (12 salt rounds)        |
| jsonwebtoken | 9.0.3     | JWT generation & verification            |
| Joi          | 18.2.1    | Request payload validation               |
| cookie-parser| 1.4.7     | Parse HTTP cookies                       |
| morgan       | 1.10.1    | HTTP request logger                      |
| dotenv       | 17.4.2    | Environment variable loading             |

### Frontend
| Technology            | Version   | Purpose                          |
| --------------------- | --------- | -------------------------------- |
| React                 | 19.2.6    | UI library                       |
| React DOM             | 19.2.6    | React rendering                  |
| Vite                  | 8.0.12    | Build tool & dev server          |
| @vitejs/plugin-react  | 6.0.1     | React Fast Refresh for Vite      |
| ESLint                | 10.3.0    | Linting                         |
| TailwindCSS           | (imported)| Utility-first CSS framework      |

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT (Browser)                           │
│                    React 19 + Vite + TailwindCSS                    │
│                      http://localhost:5173                          │
└──────────────────────────────┬──────────────────────────────────────┘
                               │  HTTP Requests (REST API)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        BACKEND (Express 5)                          │
│                      http://localhost:4000                           │
│                                                                     │
│  ┌───────────┐  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │
│  │  Routes    │→│  Middlewares  │→│  Controllers  │→│  Services  │  │
│  │           │  │              │  │              │  │           │  │
│  │ /api/auth │  │ • morgan     │  │ • AuthCtrl   │  │ • AuthSvc │  │
│  │ /v1/*     │  │ • cookie     │  │ • CompCtrl   │  │           │  │
│  │           │  │ • response   │  │ • MetaCtrl   │  │           │  │
│  │           │  │ • auth guard │  │              │  │           │  │
│  │           │  │ • error      │  │              │  │           │  │
│  └───────────┘  └──────────────┘  └──────────────┘  └─────┬─────┘  │
│                                                           │        │
│                                                     ┌─────▼─────┐  │
│                                                     │ Repository│  │
│                                                     │ (Contract)│  │
│                                                     │     │     │  │
│                                                     │ (Implement│  │
│                                                     │  Mongo)   │  │
│                                                     └─────┬─────┘  │
└───────────────────────────────────────┬───────────────────┘─────────┘
                                        │
                                        ▼
                              ┌──────────────────┐
                              │    MongoDB        │
                              │  (Mongoose ODM)   │
                              │                   │
                              │  Collections:     │
                              │  • users          │
                              │  • components     │
                              │  • componentmeta  │
                              │    datas          │
                              └──────────────────┘
```

### Request Lifecycle

```
Incoming HTTP Request
       │
       ▼
  morgan("dev")              ← Logs method, URL, status, response time
       │
       ▼
  express.json()             ← Parses JSON body
  express.urlencoded()       ← Parses form-encoded body
  cookieParser()             ← Parses cookies into req.cookies
       │
       ▼
  responseMiddleware         ← Attaches res.success() helper to every response
       │
       ▼
  Router matching            ← /api/auth/v1/* → authRouter
       │
       ▼
  authMiddleware.protect     ← (Protected routes only) Validates JWT, attaches req.user
       │
       ▼
  asyncHandler(controller)   ← Wraps async controller, catches errors → next(error)
       │
       ▼
  Validator (Joi)            ← Validates req.body, throws AppError(400) on failure
       │
       ▼
  Service                    ← Business logic (hashing, token creation, DB calls)
       │
       ▼
  Repository                 ← Data access layer (MongoDB via Mongoose)
       │
       ▼
  res.success(status, msg, data)  ← Standardized JSON response
       │
  ─── OR on error ───
       │
       ▼
  errorMiddleware            ← Catches AppError / unhandled errors
       │                       Returns { success: false, message, stack? }
       ▼
  HTTP Response
```

---

## Complete Directory Tree

```
COMPOLAB/
├── .git/                               # Git repository
│
├── BACKEND/
│   ├── .env.example                    # Template for environment variables
│   ├── .gitignore                      # Ignores: node_modules, dist, .env
│   ├── package.json                    # Backend dependencies & scripts
│   ├── package-lock.json               # Locked dependency tree
│   ├── server.js                       # ★ Entry point — boots DB & starts server
│   │
│   └── src/
│       ├── app.js                      # ★ Express app — middleware pipeline & route mounting
│       │
│       ├── configs/
│       │   ├── env.config.js           # Loads & validates ALL env vars from .env
│       │   └── db.config.js            # MongoDB connection via mongoose.connect()
│       │
│       ├── models/
│       │   ├── user.model.js           # User schema (name, email, password, role, refreshToken)
│       │   ├── component.model.js      # Component schema (prompt, generatedCode, theme)
│       │   └── componentMetadata.model.js  # Metadata schema (s3Key, fileUrl)
│       │
│       ├── repository/
│       │   ├── contract/
│       │   │   └── user.contract.js    # IUserRepository — abstract interface class
│       │   └── implement/
│       │       └── mongo.user.js       # MongoUserRepository — Mongoose implementation
│       │
│       ├── services/
│       │   └── auth.service.js         # AuthService — register, login, refresh, logout
│       │
│       ├── controllers/
│       │   ├── auth.controller.js      # AuthController — handles HTTP for auth flows
│       │   ├── component.controller.js # Component validation endpoint (stub)
│       │   └── componentMetadata.controller.js  # Metadata validation endpoint (stub)
│       │
│       ├── validators/
│       │   ├── auth.validator.js       # Joi schemas for register & login
│       │   ├── component.validator.js  # Joi schema for component creation
│       │   └── componentMetadata.validator.js  # Joi schema for metadata creation
│       │
│       ├── middlewares/
│       │   ├── auth.middleware.js       # JWT verification + role-based access control
│       │   ├── reject.middleware.js     # Global error handler (includes stack in dev)
│       │   └── response.middleware.js   # Attaches res.success() to response object
│       │
│       ├── utils/
│       │   ├── asyncHandler.utils.js   # AppError class + asyncHandler wrapper
│       │   └── token.utils.js          # JWT create/verify + cookie option factories
│       │
│       └── routes/
│           └── auth.routes.js          # Auth router — wires controllers & middleware
│
├── FRONTEND/
│   ├── README.md                       # Vite-generated README
│   ├── eslint.config.js                # ESLint flat config (React hooks + refresh)
│   ├── index.html                      # SPA shell — mounts React at #root
│   ├── package.json                    # Frontend dependencies & scripts
│   ├── package-lock.json               # Locked dependency tree
│   ├── vite.config.js                  # Vite config (react plugin)
│   │
│   └── src/
│       ├── main.jsx                    # ★ Entry point — renders <App /> into #root
│       └── app/
│           ├── App.jsx                 # Root React component (currently a placeholder)
│           └── index.css               # Global styles (@import "tailwindcss")
│
└── README.md                          # ★ This file
```

---

## Backend — Deep Dive

### Entry Point & Server Bootstrap

**File:** [`server.js`](BACKEND/server.js)

```
1. Imports connectDB, app, and PORT
2. await connectDB()          ← Connects to MongoDB (exits process on failure)
3. app.listen(PORT)           ← Starts Express on the configured port
```

The server uses **ES Modules** (`"type": "module"` in package.json) and **top-level await**.

**Scripts:**
| Command         | Action                                    |
| --------------- | ----------------------------------------- |
| `npm run dev`   | `node --watch server.js` (auto-restart)   |
| `npm start`     | `node server.js` (production)             |

---

### Application Setup (`app.js`)

**File:** [`src/app.js`](BACKEND/src/app.js)

Sets up the Express middleware pipeline in this **exact order**:

| Order | Middleware                  | Purpose                                      |
| ----- | --------------------------- | -------------------------------------------- |
| 1     | `morgan("dev")`             | Request logging (method, url, status, time)  |
| 2     | `express.json()`            | Parse JSON request bodies                    |
| 3     | `express.urlencoded()`      | Parse URL-encoded form data                  |
| 4     | `cookieParser()`            | Parse cookies into `req.cookies`             |
| 5     | `responseMiddleware`        | Attach `res.success()` helper method         |
| 6     | Route: `/api/auth/v1`       | Auth routes                                  |
| 7     | `errorMiddleware`           | Global error handler (must be last)          |

---

### Configs

#### [`env.config.js`](BACKEND/src/configs/env.config.js)

- Imports `dotenv/config` (auto-loads `.env`)
- Destructures and re-exports **7 environment variables** from `process.env`:
  - `PORT`, `MONGO_URI`, `NODE_ENV`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- **Startup validation**: Iterates all variables — if any is falsy, logs the name and throws an `Error`, preventing the server from starting with missing config.

#### [`db.config.js`](BACKEND/src/configs/db.config.js)

- Uses `mongoose.connect(MONGO_URI)` to establish a MongoDB connection.
- On failure: logs the error and calls `process.exit(1)`.

---

### Models (Mongoose Schemas)

#### 1. User Model — [`user.model.js`](BACKEND/src/models/user.model.js)

| Field          | Type     | Constraints                                    | Notes                           |
| -------------- | -------- | ---------------------------------------------- | ------------------------------- |
| `name`         | String   | required, trim, min 3, max 50                  |                                 |
| `email`        | String   | required, unique, lowercase, trim, regex match  | Regex: standard email pattern   |
| `password`     | String   | required, min 6, `select: false`                | Hidden from queries by default  |
| `role`         | String   | enum: `["user", "admin"]`, default: `"user"`    | Role-based access control       |
| `refreshToken` | String   | default: null, `select: false`                  | Hidden from queries by default  |
| `isActive`     | Boolean  | default: true                                  | Soft-delete support             |

- **Timestamps**: `createdAt`, `updatedAt` auto-managed by Mongoose.
- Collection name: `users`

#### 2. Component Model — [`component.model.js`](BACKEND/src/models/component.model.js)

| Field            | Type     | Constraints                                  | Notes                              |
| ---------------- | -------- | -------------------------------------------- | ---------------------------------- |
| `userId`         | ObjectId | required, ref: `"User"`                      | Links to the creator               |
| `prompt`         | String   | required, trim, min 5                         | The AI prompt used                 |
| `generatedCode`  | String   | required                                     | The AI-generated component code    |
| `componentName`  | String   | required, trim, min 2, max 100               | Human-readable component name      |
| `theme`          | String   | enum: `["light", "dark", "custom"]`, default: `"light"` | Theme preference      |

- **Timestamps**: `createdAt`, `updatedAt` auto-managed.
- Collection name: `components`

#### 3. ComponentMetadata Model — [`componentMetadata.model.js`](BACKEND/src/models/componentMetadata.model.js)

| Field           | Type     | Constraints                  | Notes                                  |
| --------------- | -------- | ---------------------------- | -------------------------------------- |
| `userId`        | ObjectId | required, ref: `"User"`      | Links to the creator                   |
| `prompt`        | String   | required, trim, min 5        | The AI prompt used                     |
| `componentName` | String   | required, trim, min 2, max 100 | Component name                       |
| `s3Key`         | String   | required, trim               | AWS S3 object key for the stored file  |
| `fileUrl`       | String   | required, trim               | Public/presigned URL to access the file|
| `createdAt`     | Date     | default: `Date.now`          | Manually defined (no timestamps opt)   |

- **`versionKey: false`** — disables the `__v` field.
- Collection name: `componentmetadatas`

---

### Repository Layer (Contract / Implement Pattern)

This is an implementation of the **Repository Pattern** with interface-based contracts (similar to Dependency Inversion in SOLID).

#### Contract — [`user.contract.js`](BACKEND/src/repository/contract/user.contract.js)

An **abstract base class** (`IUserRepository`) defining the interface. Every method throws `"Method not implemented"` — subclasses **must** override them.

| Method                              | Parameters         | Returns              |
| ----------------------------------- | ------------------ | -------------------- |
| `createUser(userData)`              | `{name,email,...}` | Created user doc     |
| `findUserByEmail(email)`            | email string       | User doc or null     |
| `findUserByEmailWithPassword(email)`| email string       | User + password + refreshToken |
| `findUserById(id)`                  | ObjectId string    | User (no password/refreshToken)|
| `findUserByIdWithRefreshToken(id)`  | ObjectId string    | User + refreshToken  |
| `updateUser(id, userData)`          | id, update object  | Updated user doc     |
| `updateRefreshToken(id, token)`     | id, token string   | Updated user doc     |
| `removeRefreshToken(id)`            | id                 | Updated user doc     |

#### Implementation — [`mongo.user.js`](BACKEND/src/repository/implement/mongo.user.js)

`MongoUserRepository extends IUserRepository` — implements all 8 methods using the Mongoose `UserModel`.

Key details:
- All queries filter by `isActive: true` (soft-delete aware).
- `findUserByEmailWithPassword` uses `.select("+password +refreshToken")` to override the schema-level `select: false`.
- `findUserById` explicitly excludes password and refreshToken with `.select("-password -refreshToken")`.
- `updateUser` uses `{ new: true, runValidators: true }` for validated, returned updated docs.

---

### Services (Business Logic)

#### [`auth.service.js`](BACKEND/src/services/auth.service.js)

`AuthService` — receives a `userRepository` via **constructor injection** (Dependency Injection pattern).

| Method                        | Flow                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| `sanitizeUser(user)`          | Returns a safe user object (id, name, email, role, isActive, timestamps) — strips sensitive fields |
| `createTokens(user)`          | Generates an access token (15 min) + refresh token (7 days) using the token utility                |
| `register(payload)`           | Checks duplicate email → hashes password (bcrypt, 12 rounds) → creates user → generates tokens → stores refresh token in DB |
| `login(payload)`              | Finds user by email (with password) → compares password (bcrypt) → generates tokens → stores refresh token |
| `getProfile(userId)`          | Finds user by ID → returns sanitized user → throws 404 if not found                               |
| `refreshAccessToken(token)`   | Verifies refresh token → finds user → validates stored token matches → rotates both tokens (refresh token rotation) |
| `logout(userId)`              | Removes refresh token from DB (sets to null)                                                       |

**Security features:**
- **Refresh Token Rotation**: On every refresh, both access and refresh tokens are regenerated and the old refresh token is invalidated.
- **Password never returned**: `select: false` on the model + explicit `.select("-password")` in queries.
- **Duplicate email check**: 409 Conflict on registration.
- **Generic error messages**: Login returns "Invalid email or password" for both wrong email and wrong password (prevents user enumeration).

---

### Controllers (Request Handlers)

#### [`auth.controller.js`](BACKEND/src/controllers/auth.controller.js)

`AuthController` — class-based, receives `authService` via constructor injection.

| Method                  | HTTP    | Route                   | Auth Required | Description                                  |
| ----------------------- | ------- | ----------------------- | ------------- | -------------------------------------------- |
| `register`              | POST    | `/api/auth/v1/register` | No            | Validates → registers → sets cookies          |
| `login`                 | POST    | `/api/auth/v1/login`    | No            | Validates → logs in → sets cookies             |
| `profile`               | GET     | `/api/auth/v1/profile`  | Yes           | Returns authenticated user's profile          |
| `refreshToken`          | POST    | `/api/auth/v1/refresh-token` | No       | Reads refresh token from cookie or body → rotates |
| `logout`                | POST    | `/api/auth/v1/logout`   | Yes           | Clears tokens from DB and cookies              |

**Cookie Management:**
- `setAuthCookies(res, accessToken, refreshToken)` — sets both tokens as HTTP-only cookies.
- `clearAuthCookies(res)` — clears both cookies on logout.

#### [`component.controller.js`](BACKEND/src/controllers/component.controller.js)

A **standalone function** (not class-based). Currently a **stub/validation-only** endpoint:
- Validates `req.body` against the component Joi schema.
- Returns 201 on success, 400 on validation error — **does not persist to DB yet**.

#### [`componentMetadata.controller.js`](BACKEND/src/controllers/componentMetadata.controller.js)

Same pattern as component controller — **stub/validation-only**:
- Validates `req.body` against the metadata Joi schema.
- Returns 201 on success, 400 on validation error — **does not persist to DB yet**.

> **Note:** The component and metadata controllers are not yet wired to any routes. They are prepared for future implementation.

---

### Validators (Joi Schemas)

#### [`auth.validator.js`](BACKEND/src/validators/auth.validator.js)

A **singleton class** exported as `new AuthValidator()`.

| Schema            | Fields                                                    | Options                             |
| ----------------- | --------------------------------------------------------- | ----------------------------------- |
| `registerSchema`  | `name` (str, 3–50), `email` (valid email), `password` (str, 6–20) | `abortEarly: false, stripUnknown: true` |
| `loginSchema`     | `email` (valid email), `password` (required)              | `abortEarly: false, stripUnknown: true` |

- `abortEarly: false` — returns **all** validation errors, not just the first.
- `stripUnknown: true` — silently removes unexpected fields from the payload.

#### [`component.validator.js`](BACKEND/src/validators/component.validator.js)

| Field            | Type   | Rules                                          |
| ---------------- | ------ | ---------------------------------------------- |
| `userId`         | string | required                                       |
| `prompt`         | string | required, min 5                                |
| `generatedCode`  | string | required                                       |
| `componentName`  | string | required, min 2, max 100                       |
| `theme`          | string | required, one of: `"light"`, `"dark"`, `"custom"` |

#### [`componentMetadata.validator.js`](BACKEND/src/validators/componentMetadata.validator.js)

| Field            | Type   | Rules                                 |
| ---------------- | ------ | ------------------------------------- |
| `userId`         | string | required                              |
| `prompt`         | string | required, min 5                       |
| `componentName`  | string | required, min 2, max 100              |
| `s3Key`          | string | required                              |
| `fileUrl`        | string | required, must be a valid URI         |

---

### Middlewares

#### 1. Auth Middleware — [`auth.middleware.js`](BACKEND/src/middlewares/auth.middleware.js)

A **class-based middleware** (`AuthMiddleware`) that receives a `userRepository`.

**`protect` (authentication guard):**
1. Extracts JWT from `req.cookies.accessToken` OR `Authorization: Bearer <token>` header.
2. Verifies the token with `verifyAccessToken()`.
3. Looks up the user in DB via the repository.
4. Attaches `req.user = { id, role, email }` for downstream handlers.
5. On failure → `AppError(401, "Unauthorized: ...")`.

**`allowRoles(...roles)` (authorization guard):**
- A higher-order function returning middleware.
- Checks if `req.user.role` is in the allowed roles array.
- Returns `AppError(403, "Forbidden: insufficient permission")` if not.

**Singleton export:** `new AuthMiddleware(new MongoUserRepository())`.

#### 2. Error Middleware — [`reject.middleware.js`](BACKEND/src/middlewares/reject.middleware.js)

Global Express error handler (4-argument signature `err, req, res, next`):
- Extracts `statusCode` (defaults to 500) and `message` (defaults to "Internal Server Error").
- In **development** mode: includes `err.stack` in the response for debugging.
- Always returns `{ success: false, message, stack? }`.

#### 3. Response Middleware — [`response.middleware.js`](BACKEND/src/middlewares/response.middleware.js)

Attaches a convenience method `res.success(statusCode, message, data)` to every response object:
```json
{
  "success": true,
  "message": "...",
  "data": { ... }
}
```

---

### Utilities

#### [`asyncHandler.utils.js`](BACKEND/src/utils/asyncHandler.utils.js)

**`AppError`** — Custom error class extending `Error`:
```js
class AppError extends Error {
  constructor(statusCode, message, error = null)
}
```
- `statusCode`: HTTP status code (e.g., 400, 401, 404, 409).
- `error`: Optional original error for debugging.

**`asyncHandler(fn)`** — Wraps async route handlers to automatically catch rejected promises and forward them to `next(error)`, eliminating the need for try/catch in every controller.

#### [`token.utils.js`](BACKEND/src/utils/token.utils.js)

| Function                       | Purpose                                     | Details                              |
| ------------------------------ | ------------------------------------------- | ------------------------------------ |
| `generateAccessToken(payload)` | Creates a signed JWT                         | Secret: `JWT_SECRET`, Expiry: **15 min** |
| `generateRefreshToken(payload)`| Creates a signed JWT                         | Secret: `JWT_REFRESH_SECRET`, Expiry: **7 days** |
| `verifyAccessToken(token)`     | Verifies & decodes an access token           | Throws on invalid/expired            |
| `verifyRefreshToken(token)`    | Verifies & decodes a refresh token           | Throws on invalid/expired            |
| `accessTokenCookieOptions()`   | Returns cookie config for access token       | httpOnly, secure in prod, maxAge: 15 min |
| `refreshTokenCookieOptions()`  | Returns cookie config for refresh token      | httpOnly, secure in prod, maxAge: 7 days |

**Cookie Security Settings:**
- `httpOnly: true` — prevents JavaScript access (XSS protection).
- `secure: true` — only sent over HTTPS (production only).
- `sameSite: "none"` in production, `"strict"` in development.

---

### Routes & API Endpoints

#### [`auth.routes.js`](BACKEND/src/routes/auth.routes.js)

**Dependency Injection Wiring:**
```
MongoUserRepository → AuthService → AuthController
```
All are instantiated at the module level and injected manually.

**Base path:** `/api/auth/v1`

| Method | Path              | Middleware           | Controller Method          | Description                |
| ------ | ----------------- | -------------------- | -------------------------- | -------------------------- |
| POST   | `/register`       | —                    | `authController.register`  | Create a new user          |
| POST   | `/login`          | —                    | `authController.login`     | Authenticate user          |
| POST   | `/refresh-token`  | —                    | `authController.refreshToken` | Rotate tokens           |
| GET    | `/profile`        | `authMiddleware.protect` | `authController.profile` | Get authenticated user info|
| POST   | `/logout`         | `authMiddleware.protect` | `authController.logout`  | Invalidate tokens          |

All controller methods are wrapped with `asyncHandler()`.

---

## Frontend — Deep Dive

The frontend is currently in its **initial scaffolding phase**, set up with Vite + React 19.

### Key Files

| File                 | Purpose                                              |
| -------------------- | ---------------------------------------------------- |
| `index.html`         | SPA shell — `<div id="root">` + module script entry  |
| `vite.config.js`     | Vite config with `@vitejs/plugin-react` (React Fast Refresh) |
| `eslint.config.js`   | ESLint flat config — React hooks + React Refresh rules |
| `src/main.jsx`       | Entry point — `createRoot().render(<App />)`         |
| `src/app/App.jsx`    | Root component — currently renders `<div>App</div>`  |
| `src/app/index.css`  | Global styles — imports TailwindCSS via `@import "tailwindcss"` |

### Frontend Scripts

| Command             | Action                             |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start Vite dev server (port 5173)  |
| `npm run build`     | Build for production               |
| `npm run lint`      | Run ESLint                         |
| `npm run preview`   | Preview production build           |

---

## Environment Variables

Create a `.env` file in `BACKEND/` based on `.env.example`:

```env
PORT=4000                                # Server port
MONGO_URI=mongodb://localhost:27017/ui-library   # MongoDB connection string
JWT_SECRET=your_secret                   # Access token signing secret
JWT_REFRESH_SECRET=your_secret           # Refresh token signing secret
NODE_ENV=development                     # "development" or "production"
GOOGLE_CLIENT_SECRET=your_secret_key     # Google OAuth client secret (future)
GOOGLE_CLIENT_ID=your_client_id          # Google OAuth client ID (future)
CLIENT_URL=http://localhost:5173         # Frontend URL (for CORS, future)
```

> **⚠️ All 7 variables are mandatory.** The server will crash on startup if any are missing, thanks to the validation in `env.config.js`.

---

## Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **MongoDB** running locally (or a remote URI)
- **npm** (comes with Node.js)

### 1. Clone the repository
```bash
git clone <repo-url>
cd COMPOLAB
```

### 2. Backend Setup
```bash
cd BACKEND
cp .env.example .env        # Create .env and fill in your secrets
npm install                  # Install dependencies
npm run dev                  # Start with auto-restart (--watch)
```

### 3. Frontend Setup
```bash
cd FRONTEND
npm install                  # Install dependencies
npm run dev                  # Start Vite dev server at http://localhost:5173
```

---

## Design Patterns & Architectural Decisions

| Pattern                     | Where Used                          | Why                                           |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| **Repository Pattern**      | `repository/contract` + `implement` | Decouples data access from business logic. Swap MongoDB for PostgreSQL by adding a new implementation without touching services. |
| **Dependency Injection**    | Controllers, Services, Middleware   | Constructor-injected dependencies improve testability and flexibility. |
| **Contract / Interface**    | `IUserRepository`                   | Abstract base class enforces a consistent API across implementations. JavaScript doesn't have interfaces, so this uses a class with "not implemented" stubs. |
| **Service Layer**           | `services/auth.service.js`          | Centralizes business logic away from HTTP concerns (controllers). |
| **Singleton Export**        | AuthValidator, AuthMiddleware       | Exported as `new Instance()` to avoid redundant instantiation. |
| **Async Handler Wrapper**   | `asyncHandler(fn)`                  | Eliminates repetitive try/catch in every async route handler. |
| **Custom Error Class**      | `AppError`                          | Uniform error handling with HTTP status codes + messages. |
| **Response Helper Pattern** | `responseMiddleware`                | `res.success()` standardizes all success responses across the entire API. |
| **Refresh Token Rotation**  | `AuthService.refreshAccessToken`    | Security best practice — old refresh tokens become invalid after each use. |
| **Soft Delete**             | `isActive` field on User model      | Users are deactivated, not deleted. All queries filter `isActive: true`. |
| **ES Modules**              | Entire codebase                     | `"type": "module"` in both `package.json` files. Uses `import/export` everywhere. |
| **Environment Validation**  | `env.config.js`                     | Fail-fast on startup if configuration is incomplete.                      |

---

> **Status:** Backend auth is fully functional. Component/Metadata controllers are validation stubs awaiting full CRUD and AI integration. Frontend is scaffolded and ready for feature development.
