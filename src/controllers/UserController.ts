import { IUser } from "../models/interfaces/IUser"
import * as userModel from "../services/User/userService"
import { Request, Response } from "express";


export const Signup = async (req: Request, res: Response) => {
    try {
        if (req.body !== null) {
            const user: IUser = req.body;
            await userModel.CreateUser(user, (error: Error, userId: number) => {
                if (error) {
                    return res.status(500).json({ "message": error.message });
                }
                return res.status(201).json({ userId })
            });
        } else {
            return res.status(500).json({ "message": "no body" });
        }
    } catch (error) {
        return res.status(500).json({ "message": error });
    }

}

export const Login = async (req: Request, res: Response) => {
    try {
        if (req.body !== null) {
            const user: IUser = req.body;
            await userModel.FindOne(user, (existingUser: any) => {
                if (existingUser) {
                    return res.status(200).json(existingUser)
                } else {
                    return res.status(200).json({ "message": "Password or email does not match" });
                }
            })
        } else {
            return res.status(500).json({ "message": "Please fill in the form*" });
        }
    } catch (error) {
        return res.status(500).json({ "message": error });
    }
}

