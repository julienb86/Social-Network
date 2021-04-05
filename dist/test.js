"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db/db");
const query = `INSERT INTO users (email, password) VALUES "julien.bouafi@orange.fr", "1234"`;
db_1.db.query(query);
//# sourceMappingURL=test.js.map