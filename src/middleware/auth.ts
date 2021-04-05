import jwt from "jsonwebtoken"
import { IUser } from "../models/interfaces/IUser"
import dotenv from "dotenv"
dotenv.config();

export const generateToken = async (user: IUser): Promise<string> => {
    const token: string = await jwt.sign(
        { userId: user.id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    return token;
}