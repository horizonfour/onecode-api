"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./base/Base");
const SoccerTeamSchema_1 = require("../db/schemas/SoccerTeamSchema");
class SoccerTeamService extends Base_1.default {
    constructor() {
        super(SoccerTeamSchema_1.default);
    }
}
exports.SoccerTeamService = SoccerTeamService;
//# sourceMappingURL=SoccerTeamService.js.map