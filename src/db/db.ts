import mysql from "mysql2";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'socialNetwork'
});

db.connect((err: mysql.QueryError) => {
    if (err) {
        throw err;
    }
    console.log("Mysql connected")
})

