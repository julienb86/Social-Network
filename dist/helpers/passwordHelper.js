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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const saltRounds = Number(process.env.SALT_HASH);
const encrypt = (password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bcryptjs_1.default.hash(password, saltRounds);
        return result;
    }
    catch (err) {
        console.log(err);
        throw new err("Impossible to hash the password");
    }
});
exports.encrypt = encrypt;
const decrypt = (password, passwordFromUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bcryptjs_1.default.compare(password, passwordFromUser);
        return result;
    }
    catch (err) {
        console.log(err);
        throw new err("Impossible to hash the password");
    }
});
exports.decrypt = decrypt;
//# sourceMappingURL=passwordHelper.js.map