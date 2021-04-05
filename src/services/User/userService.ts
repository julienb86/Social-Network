import { IUser } from "../../models/interfaces/IUser"
import { db } from "../../db/db"
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import { OkPacket, RowDataPacket } from "mysql2";
import { decrypt, encrypt } from "../../helpers/passwordHelper";
import { generateToken } from "../../middleware/auth";

export const CreateUser = async (user: IUser, callback: any) => {
    try {
        const password = await encrypt(user.password);
        const query: string = `INSERT INTO users (email, password) VALUES (?, ?)`;
        db.query<OkPacket>(
            query,
            [user.email, password],
            (err: Query.QueryError, result: OkPacket) => {
                if (err) { callback(err) }
                const insertId: number = (result as OkPacket).insertId
                callback(null, insertId);
            }
        )
    } catch (error) {
        throw new error("impossible to create user")
    }
}

export const FindOne = (user: IUser, callback: any) => {
    try {
        const query: string = "SELECT * FROM users WHERE email = ?";
        let result: IUser;
        db.query(
            query,
            [user.email],
            async (err: Query.QueryError, results: RowDataPacket[]) => {
                if (err) { callback(err) }
                const match: boolean = await decrypt(user.password, results[0].password);
                if (match) {
                    const token: string = await generateToken(user);
                    result = {
                        email: results[0].email,
                        token
                    }
                    callback(result)
                } else {
                    callback(null)
                }
            }
        )
    } catch (error) {
        throw new error("impossible to get user")
    }
}