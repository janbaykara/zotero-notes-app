import Server from "./server"
import dotenv from "dotenv"

// Load env vars from .env
dotenv.config()

new Server().atPort(parseInt(process.env.PORT))
