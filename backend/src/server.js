import express from 'express'
import notesRoutes from "./routes/notesRoutes.js"
import cors from "cors"
import dotenv from "dotenv"

import { connectDB } from './config/db.js'


dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001;



// middleware
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use("/api/notes", notesRoutes)

connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log("Server Started on Port: 5001")
    })
})
