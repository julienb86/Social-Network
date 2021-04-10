import { IUser } from "../models/interfaces/IUser"
import * as userModel from "../services/User/userService"
import { Request, Response } from "express";


export const Signup = (req: Request, res: Response) => {
    try {
        if (req.body !== null) {
            const user: IUser = req.body;
            userModel.CreateUser(user, (error: Error, userId: number) => {
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
            await userModel.FindOne(user, (error: any, result: any) => {
                if (result) {
                    return res.status(200).json({ result });
                } else {
                    return res.status(404).json({ error });
                }
            });
        } else {
            return res.sendStatus(500).json({ "message": "Please fill in the form*" });
        }
    } catch (error) {
        return res.sendStatus(500).json(error);
    }
}

