"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const port = process.env.MONGO_PORT || 27017;
const uri = process.env.MONGO_HOST || 'mongodb://localhost:' + port + '/conversador';
const options = {
    useMongoClient: true,
};
exports.default = {
    options,
    connection: uri,
};
//# sourceMappingURL=mongoConfig.js.map