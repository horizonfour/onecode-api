"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../mongoose");
/**
 * Schema usuários no banco.
 */
const religionSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String,
    },
});
// let a:.Model;
exports.default = mongoose_1.default.model('Religion', religionSchema);
//# sourceMappingURL=ReligionSchema.js.map