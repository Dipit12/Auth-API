import express from 'express'
import userRoutes from './user.routes'
const router = express.Router();

router.use(userRoutes)
router.get("/api/healthcheck",(req,res) =>{
    res.status(200).json({
        msg:"API is healthy"
    })
})



export default router;