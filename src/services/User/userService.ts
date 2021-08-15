import { IUser } from "../../models/interfaces/IUser"
import { db } from "../../db/db"
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import { OkPacket, RowDataPacket } from "mysql2";
import { decrypt, encrypt } from "../../helpers/passwordHelper";
import { generateToken } from "../../middleware/auth";

export const CreateUser = async (user: IUser, callback: any) => {
    try {
        const password = await encrypt(user.password);
        const query: string = `INSERT INTO users (email, password, photo, fileName, role) VALUES ('${user.email}', '${password}', '${user.photo}', '${user.fileName}', '${user.role}')`;
        db.query<OkPacket>(
            query,
            (err: Query.QueryError, result: OkPacket) => {
                if (err) { callback(err) }
                callback(null, result.insertId);
            }
        )
    } catch (error) {
        throw new Error(error)
    }
}

export const FindOne = (user: IUser, callback: any) => {
    try {
        const query: string = `SELECT * FROM users WHERE email = '${user.email}'`;
        let result: IUser;
        db.query(
            query,
            async (err: Query.QueryError, results: RowDataPacket[]) => {
                if (err) { callback(err) }
                if (results[0]) {
                    const match: boolean = await decrypt(user.password, results[0].password);
                    if (match) {
                        const token: string = await generateToken(user);
                        result = {
                            email: results[0].email,
                            token
                        }
                        callback(null, result)
                    } else {
                        callback({ "message": "Password or email does not match" })
                    }
                } else {
                    callback({ "message": "User not found" })
                }
            }
        )
    } catch (error) {
        throw new Error(error)
    }
}

