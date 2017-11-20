"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../mongoose");
/**
 * Schema usuários no banco.
 */
const userSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    },
});
exports.default = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=UserSchema.js.map