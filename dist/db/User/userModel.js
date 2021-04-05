"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const db_1 = require("../db");
const passwordHelper_1 = require("../../helpers/passwordHelper");
const CreateUser = (user, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = yield passwordHelper_1.hashed(user.password);
        console.log(password, "ppassword");
        const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
        db_1.db.query(query, [user.email, password], (err, result) => {
            if (err) {
                callback(err);
            }
            const insertId = result.insertId;
            callback(null, insertId);
        });
    }
    catch (error) {
        throw new error("impossible to create user");
    }
});
exports.CreateUser = CreateUser;
//# sourceMappingURL=userModel.js.map