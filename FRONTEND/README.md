# Frontend Authentication Flow

This frontend includes a complete React authentication flow connected to the backend auth API.

## Routes

- `/register` - User registration page
- `/login` - User login page
- `/dashboard` - Protected authenticated page

## Features Implemented

- Register form with name, email, password and confirm password
- Login form with email and password
- Client-side validation
- API validation/authentication error display
- Access token storage in localStorage
- User state persistence after page refresh
- Profile loading on app start
- Refresh token fallback using backend cookie
- Protected route guard
- Logout with frontend session cleanup and backend logout request

## Setup

Create `.env` from `.env.example` if you want to change the backend URL:

```env
VITE_API_BASE_URL=http://localhost:4000/api/auth/v1
```

Install and run:

```bash
npm install
npm run dev
```

Backend should run on `http://localhost:4000`.
