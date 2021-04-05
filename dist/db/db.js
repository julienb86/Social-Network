"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.db = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'socialNetwork'
});
exports.db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Mysql connected");
});
//# sourceMappingURL=db.js.map