import axios from "axios"

export const api = axios.create({
    baseURL: "https://zap-zap-backend.vercel.app"
    
})