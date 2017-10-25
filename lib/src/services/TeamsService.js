"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./base/Base");
const TeamsSchema_1 = require("../db/schemas/TeamsSchema");
class TeamsService extends Base_1.default {
    constructor() {
        super(TeamsSchema_1.default);
    }
}
exports.TeamsService = TeamsService;
//# sourceMappingURL=TeamsService.js.map