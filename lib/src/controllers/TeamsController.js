"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Boom = require("boom");
const TeamsService_1 = require("../services/TeamsService");
class TeamsController {
    constructor() {
        this.query = {
            skip: 0,
            limit: 100,
            order: {
                field: '',
                order: '',
            },
        };
        this._teamsService = new TeamsService_1.TeamsService();
    }
    async list(request, reply) {
        try {
            const team = await this._teamsService.list(this.query);
            return reply(team);
        }
        catch (e) {
            console.log(e);
            reply(Boom.badImplementation(e));
        }
    }
    async create(request, reply) {
        try {
            const team = request.payload;
            const newTeam = await this._teamsService.create(team);
            return reply(newTeam);
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
            const updatedTeam = await this._teamsService.update({ _id: id }, payload);
            return reply(updatedTeam);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async remove(request, reply) {
        try {
            const { id } = request.params;
            const updatedTeam = await this._teamsService.remove(id);
            return reply(updatedTeam);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
}
exports.TeamsController = TeamsController;
//# sourceMappingURL=TeamsController.js.map