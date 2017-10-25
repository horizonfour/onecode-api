"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MusicStyleService_1 = require("../services/MusicStyleService");
const Boom = require("boom");
class MusicStyleController {
    constructor() {
        this.query = {
            skip: 0,
            limit: 100,
            order: {
                field: '',
                order: '',
            },
        };
        this._musicStyleService = new MusicStyleService_1.MusicStyleService();
    }
    async list(request, reply) {
        try {
            const musicStyle = await this._musicStyleService.list(this.query);
            return reply(musicStyle);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async create(request, reply) {
        try {
            const musicStyle = await this._musicStyleService.create(request.payload);
            return reply(musicStyle);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async update(request, reply) {
        try {
            const { id } = request.params;
            const { payload } = request;
            const musicStyle = await this._musicStyleService.update({ _id: id }, payload);
            return reply(musicStyle);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async remove(request, reply) {
        try {
            const { id } = request.params;
            const musicStyle = await this._musicStyleService.remove(id);
            return reply(musicStyle);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
}
exports.MusicStyleController = MusicStyleController;
//# sourceMappingURL=MusicStyleController.js.map