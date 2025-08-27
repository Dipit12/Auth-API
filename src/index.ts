import express from 'express'
import mainRoutes from './routes/main.routes'
require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 3001
app.use(mainRoutes)
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})