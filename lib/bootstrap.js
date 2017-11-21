"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Set .env variables using DOTENV package
const dotenv = require("dotenv");
if (process.env.ENVIRONMENT !== 'PROD') {
    dotenv.config({ path: './config/.env.dev' });
}
else {
    dotenv.config({ path: './config/.env.prod' });
}
const app = require("./app.js");
exports.default = app.default();
//# sourceMappingURL=bootstrap.js.map