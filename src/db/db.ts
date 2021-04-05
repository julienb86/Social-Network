import mysql from "mysql2";
import dotenv from "dotenv"
dotenv.config();

export const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect((err: mysql.QueryError) => {
    if (err) {
        throw err;
    }
    console.log("Mysql connected")
})

