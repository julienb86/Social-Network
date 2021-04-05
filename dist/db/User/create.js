"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const db_1 = require("../../db/db");
const createUser = (user, callback) => {
    const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
    console.log(user);
    db_1.db.query(query, [user.email, user.password], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertedId;
        console.log(result);
        callback(null, insertId);
    });
};
exports.createUser = createUser;
//# sourceMappingURL=create.js.map