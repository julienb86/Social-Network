"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = require("./routes/userRoutes");
const app = express_1.default();
// default port to listen
const port = process.env.SERVER_PORT || "3000";
// set up dot env config
dotenv_1.default.config();
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
app.use(body_parser_1.default.json());
app.use('/api/user', userRoutes_1.userRoutes);
//# sourceMappingURL=index.js.map