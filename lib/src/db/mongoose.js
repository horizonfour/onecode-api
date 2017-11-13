"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoConfig_1 = require("./mongoConfig");
const Mongoose = require("mongoose");
const mongoose = require('mongoose');
// tslint:disable-next-line:ter-arrow-parens
Mongoose.connect(mongoConfig_1.default.connection, err => {
    if (err)
        console.log('Erro ao conectar com a base de dados: ' + err);
});
mongoose.Promise = global.Promise;
exports.default = Mongoose;
//# sourceMappingURL=mongoose.js.map