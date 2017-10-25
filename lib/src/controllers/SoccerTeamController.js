"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SoccerTeamService_1 = require("../services/SoccerTeamService");
const Boom = require("boom");
class SoccerTeamController {
    constructor() {
        this.query = {
            skip: 0,
            limit: 100,
            order: {
                field: '',
                order: '',
            },
        };
        this._soccerTeamService = new SoccerTeamService_1.SoccerTeamService();
    }
    async list(request, reply) {
        try {
            const soccerTeam = await this._soccerTeamService.list(this.query);
            return reply(soccerTeam);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async create(request, reply) {
        try {
            const soccerTeam = await this._soccerTeamService.create(request.payload);
            return reply(soccerTeam);
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
            const soccerTeam = await this._soccerTeamService.update({ _id: id }, payload);
            return reply(soccerTeam);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async remove(request, reply) {
        try {
            const { id } = request.params;
            const soccerTeam = await this._soccerTeamService.remove(id);
            return reply(soccerTeam);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
}
exports.SoccerTeamController = SoccerTeamController;
//# sourceMappingURL=SoccerTeamController.js.map