"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../mongoose");
const Schema = mongoose_1.default.Schema;
/**
 * Schema de estilos musicais no banco.
 */
const musicStyleSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
});
// let a:.Model;
exports.default = mongoose_1.default.model('MusicStyle', musicStyleSchema);
//# sourceMappingURL=MusicStyleSchema.js.map