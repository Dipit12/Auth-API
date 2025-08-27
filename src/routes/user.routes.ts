import express from 'express'
import {getUserData} from '../controllers/user.controller'

const router = express.Router();

router.get("/api/user/me", getUserData)

export default router;