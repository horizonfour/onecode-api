"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./base/Base");
const MusicStyleSchema_1 = require("../db/schemas/MusicStyleSchema");
class MusicStyleService extends Base_1.default {
    constructor() {
        super(MusicStyleSchema_1.default);
    }
}
exports.MusicStyleService = MusicStyleService;
//# sourceMappingURL=MusicStyleService.js.map