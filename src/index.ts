import express from 'express'
import mainRoutes from './routes/main.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
require('dotenv').config();
import { connectToDatabase } from './utils/connectToDB';

const app = express()
const PORT = process.env.PORT || 3001
app.use(express.json())
app.use(authRoutes)
app.use(mainRoutes)
app.use(userRoutes)
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
    connectToDatabase();
})