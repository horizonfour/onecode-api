"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../mongoose");
const { Schema } = mongoose_1.default;
/**
 * Schema usuários no banco.
 */
const teamsSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        type: String,
    },
    coordenatorId: {
        required: true,
        type: String,
    },
    membersId: {
        required: true,
        type: Array,
    },
    searchId: {
        required: true,
        type: String,
    },
    meta: {
        required: true,
        type: Number,
    },
    progress: {
        required: true,
        type: Number,
    },
});
exports.default = mongoose_1.default.model('Teams', teamsSchema);
//# sourceMappingURL=TeamsSchema.js.map