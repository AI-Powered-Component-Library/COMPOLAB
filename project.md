### Low Level System Design (LLD) – AI Component Generator

---

### 1. Database Design (MongoDB)

```jsx
// User Collection

{
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  createdAt: Date
}

// Component Collection

{
  _id: ObjectId,
  userId: ObjectId,
  prompt: String,
  generatedCode: String,
  componentName: String,
  theme: String,
  createdAt: Date,
  updatedAt: Date
}

// metadata only storing in db.
{
  _id: ObjectId,
  userId: ObjectId,
  prompt: String,
  componentName: String,
  s3Key: String,
  fileUrl: String,
  createdAt: Date
}
```

---

### 2. API Design

```jsx
Authentication

POST /api/auth/v1/signup
POST /api/auth/v1/login
GET  /api/auth/v1/profile


// Component Storage

POST /api/components
GET  /api/components
GET  /api/components/:id
DELETE /api/components/:id

// Export the component:

GET /api/components/:id/export

Returns:
.jsx file
.zip file
```

---

### 3. AI Generation Flow

```
User Prompt ⇒ Frontend ⇒  POST /api/ai/generate ⇒  AI Service (OpenAI/Gemini) 
 ⇒  Generated React + Tailwind Code  
 
 +-----> MongoDB (metadata)
 |
 +-----> AWS S3 (actual files)
     |
     +------> Save to MongoDB
     |
     v
Frontend Preview
```

POST /api/v1/component/ai

{
  "prompt": "Create a responsive pricing card" // Request
}

{
  "code": "<React + Tailwind Code>" // Response
}

---

### 4. Live Preview Flow

```
Generated Code
      |
      v
React Live Renderer
      |
      v
Sandbox/Iframe
      |
      v
Preview Component
```

Recommended package:

```jsx
react-live
   or
@codesandbox/sandpack-react
```

---

### 5. Reusable Component Library

```
ComponentLibrary
│
├── Button
├── Input
├── Card
├── Modal
├── Navbar
├── Table
└── Form
```

---

### 9. Sequence Diagram

```
User
 |
 | Enter Prompt
 v
Frontend
 |
 | Generate Request
 v
Backend API
 |
 v
AI Service
 |
 v
Generated Code
 |
 +----> MongoDB Save
 |
 v
Frontend Preview
 |
 v
Export / Save
```

---

### IMPORTANT FEATURES


CREATE WITH MONACO-FOLDERNAME,CODE,PROPS
INTEGRATE AI --> CODE --> STORE IN S3  --> MONGODB 
PUBLISH TO NPM
RAZORPAY INTEGRATION
MICROSERVICES

| File Export | JSZip |❌