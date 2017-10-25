"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegionService_1 = require("../services/RegionService");
const Boom = require("boom");
class RegionController {
    constructor() {
        this.query = {
            skip: 0,
            limit: 100,
            order: {
                field: '',
                order: '',
            },
        };
        this._regionService = new RegionService_1.RegionService();
    }
    async list(request, reply) {
        try {
            const user = await this._regionService.list(this.query);
            return reply(user);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async create(request, reply) {
        try {
            const user = await this._regionService.create(request.payload);
            return reply(user);
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
            const user = await this._regionService.update({ _id: id }, payload);
            return reply(user);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async remove(request, reply) {
        try {
            const { id } = request.params;
            const musicStyle = await this._regionService.remove(id);
            return reply(musicStyle);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
}
exports.RegionController = RegionController;
//# sourceMappingURL=RegionController.js.map