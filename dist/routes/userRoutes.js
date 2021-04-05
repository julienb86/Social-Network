"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
exports.userRoutes = express_1.default.Router();
exports.userRoutes.post('/signup', UserController_1.Signup);
exports.userRoutes.get('/login', UserController_1.Login);
//# sourceMappingURL=userRoutes.js.map