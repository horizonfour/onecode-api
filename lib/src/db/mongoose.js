"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoConfig_1 = require("./mongoConfig");
const Mongoose = require("mongoose");
const mongoose = require('mongoose');
Mongoose.connect(mongoConfig_1.default.connection);
mongoose.Promise = global.Promise;
exports.default = Mongoose;
//# sourceMappingURL=mongoose.js.map