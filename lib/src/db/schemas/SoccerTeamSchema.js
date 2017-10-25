"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../mongoose");
const { Schema } = mongoose_1.default;
/**
 * Schema usuários no banco.
 */
const soccerTeamSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
});
exports.default = mongoose_1.default.model('SoccerTeam', soccerTeamSchema);
//# sourceMappingURL=SoccerTeamSchema.js.map