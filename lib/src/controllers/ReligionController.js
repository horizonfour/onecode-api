"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Boom = require("boom");
const ReligionService_1 = require("../services/ReligionService");
class ReligionController {
    constructor() {
        this.query = {
            skip: 0,
            limit: 100,
            order: {
                field: '',
                order: '',
            },
        };
        this._religionService = new ReligionService_1.ReligionService();
    }
    async list(request, reply) {
        try {
            const religion = await this._religionService.list(this.query);
            return reply(religion);
        }
        catch (e) {
            return reply('Deu merda');
        }
    }
    async create(request, reply) {
        try {
            const religion = request.payload;
            const newUser = await this._religionService.create(religion);
            return reply(newUser);
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
            const updatedUser = await this._religionService.update({ _id: id }, payload);
            return reply(updatedUser);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async remove(request, reply) {
        try {
            const { id } = request.params;
            const updatedUser = await this._religionService.remove(id);
            return reply(updatedUser);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
}
exports.ReligionController = ReligionController;
//# sourceMappingURL=ReligionController.js.map