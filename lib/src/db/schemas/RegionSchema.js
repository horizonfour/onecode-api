"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../mongoose");
/**
 * Schema usuários no banco.
 */
const regionSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String,
    },
});
// let a:.Model;
exports.default = mongoose_1.default.model('Region', regionSchema);
//# sourceMappingURL=RegionSchema.js.map