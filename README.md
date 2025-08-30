# Auth API(Still under development....)

A secure authentication API built with Node.js, Express, TypeScript, JWT, and MongoDB.  
Includes refresh tokens, email verification, forgot/reset password, and Swagger documentation.

---

## 🚀 Features

- User Registration & Login (JWT-based)
- Refresh Tokens for session management
- Email Verification (via token link)
- Forgot & Reset Password
- Password Hashing with bcrypt
- Role-based Authorization (Admin/User)
- Swagger API Documentation (`/api-docs`)
- Secure token storage and rotation
- Protected Routes (`/me`, `/admin`)

---

## 📂 Project Structure

```
src/
 ┣ controllers/   # Route controllers
 ┣ middlewares/   # Authentication & validation middlewares
 ┣ models/        # Mongoose models (User, Token)
 ┣ routes/        # API route definitions
 ┣ utils/         # Helpers (email, JWT, etc.)
 ┣ index.ts       # Entry point
```

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, TypeScript  
- **Database:** MongoDB + Mongoose  
- **Auth:** JWT (Access + Refresh Tokens)  
- **Docs:** Swagger (OpenAPI Spec)  

---

## 🔧 Installation

```bash
# Install dependencies
yarn install

# Create .env file in root
cp .env.example .env

# Run development server
yarn dev

# Build for production
yarn build

# Run production build
yarn start
```

---

## ⚙️ Environment Variables

Create a `.env` file in root with the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth-api
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:3000
```

---

## 📜 API Routes

### Auth Routes
- `POST /auth/register` → Register new user  
- `POST /auth/login` → Login user  
- `POST /auth/refresh` → Refresh access token  
- `POST /auth/logout` → Logout user (invalidate refresh token)  

### User Routes
- `GET /me` → Get current user profile (protected)  
- `POST /auth/forgot-password` → Request password reset email  
- `POST /auth/reset-password` → Reset password via token  
- `POST /auth/verify-email` → Verify user email  

### Admin Routes (role-based)
- `GET /admin/users` → Get all users  
- `DELETE /admin/users/:id` → Delete a user  

---

## 📖 Swagger Documentation

Swagger docs available at:  
👉 `http://localhost:3000/api-docs`

---

## ✅ Running with Docker (Optional)

```bash
# Build Docker image
docker build -t auth-api .

# Run container
docker run -p 5000:5000 auth-api
```

---

## 📌 Notes

- Refresh tokens are stored in the database (User model).
- Passwords are hashed using **bcrypt** before saving.
- Emails are sent using **Nodemailer** (configurable SMTP).

---


## 👨‍💻 Author

Built by **Dipit Madan** 🚀

