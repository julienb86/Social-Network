import express from "express"
import { Signup, Login } from "../controllers/UserController"
export const userRoutes = express.Router();

userRoutes.post('/signup', Signup)
userRoutes.get('/login', Login)