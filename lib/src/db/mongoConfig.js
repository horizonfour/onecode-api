"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HOST = process.env.DB_MONGO_HOST || 'localhost';
const PORT = process.env.DB_MONGO_PORT || '27017';
const DATABASE = process.env.DB_MONGO_DATABASE || 'onecode';
const URI = `mongodb://${HOST}:${PORT}/${DATABASE}`;
exports.default = {
    options: {
        useMongoClient: true,
    },
    connection: URI,
};
//# sourceMappingURL=mongoConfig.js.map