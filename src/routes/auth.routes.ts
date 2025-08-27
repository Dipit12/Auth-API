import express from 'express'
import {login,register,refresh,logout,forgotPassword,resetPassword,changePassword} from '../controllers/auth.controller'
const router = express.Router()

router.post("/api/auth/register",register)
router.post("/api/auth/login",login)
router.post("/api/auth/refresh",refresh)
router.post("/api/auth/logout",logout)
router.post("/api/auth/forgot-password",forgotPassword)
router.post("/api/auth/reset-password",resetPassword)
router.post("/api/auth/change-password",changePassword)
// email verification route

router.get("/api/auth/verify-email/:token")

export default router;