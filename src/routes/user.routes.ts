import express from 'express'
import {getUserData} from '../controllers/user.controller'
import { authMiddleware } from '../middleware/verifyToken';
const router = express.Router();

router.get("/api/user/me",authMiddleware, getUserData)

export default router;