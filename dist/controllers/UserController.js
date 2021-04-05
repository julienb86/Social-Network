"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Login = exports.Signup = void 0;
const userModel = __importStar(require("../services/User/userService"));
const Signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body !== null) {
            const user = req.body;
            yield userModel.CreateUser(user, (error, userId) => {
                if (error) {
                    return res.status(500).json({ "message": error.message });
                }
                return res.status(201).json({ userId });
            });
        }
        else {
            return res.status(500).json({ "message": "no body" });
        }
    }
    catch (error) {
        return res.status(500).json({ "message": error });
    }
});
exports.Signup = Signup;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body !== null) {
            const user = req.body;
            yield userModel.FindOne(user, (existingUser) => {
                if (existingUser) {
                    return res.status(200).json({ existingUser });
                }
                else {
                    return res.status(200).json({ "message": "no user found" });
                }
            });
        }
        else {
            return res.status(500).json({ "message": "Please fill in the form*" });
        }
    }
    catch (error) {
        return res.status(500).json({ "message": error });
    }
});
exports.Login = Login;
//# sourceMappingURL=UserController.js.map