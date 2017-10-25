"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SoccerTeamController_1 = require("./../controllers/SoccerTeamController");
const Joi = require("joi");
class SoccerTeamRoute {
    constructor() {
        this.soccerTeamController = new SoccerTeamController_1.SoccerTeamController();
    }
    /*
     * @returns [Returns the Route object for HapiRouter to setup]
     * @memberOf HelloWorldRoute
     */
    list() {
        return {
            path: '/soccer-teams',
            method: 'GET',
            config: {
                handler: async (req, reply) => {
                    return await this.soccerTeamController.list(req, reply);
                },
                auth: false,
                description: 'Listar todas as equipes de futebol',
                notes: 'Opcional o parametro de paginação',
                tags: ['api'],
            },
        };
    }
    create() {
        return {
            path: '/soccer-teams',
            method: 'POST',
            config: {
                handler: async (req, reply) => {
                    return await this.soccerTeamController.create(req, reply);
                },
                auth: false,
                description: 'Criar uma nova equipe de futebol',
                notes: 'Criar uma nova equipe de futebol',
                tags: ['api'],
                validate: {
                    payload: {
                        name: Joi.string(),
                    },
                },
            },
        };
    }
    /**
     * [Retorna a configuração da rota PUT .]
     * @returns [Hapi.RouteConfiguration]
     * @memberOf RegionRoute
     */
    update() {
        return {
            path: '/soccer-teams/{id}',
            method: 'PUT',
            config: {
                handler: async (req, reply) => {
                    return await this.soccerTeamController.update(req, reply);
                },
                auth: false,
                description: 'Altera uma equipe de futebol',
                notes: 'Altera uma equipe de futebol',
                tags: ['api'],
                validate: {
                    params: { id: Joi.string().required() },
                    payload: {
                        name: Joi.string(),
                    },
                },
            },
        };
    }
    /**
     * [Retorna a configuração da rota DELETE .]
     * @returns [Hapi.RouteConfiguration]
     * @memberOf RegionRoute
     */
    remove() {
        return {
            path: '/soccer-teams/{id}',
            method: 'DELETE',
            config: {
                handler: async (req, reply) => {
                    return await this.soccerTeamController.remove(req, reply);
                },
                auth: false,
                description: 'Remove a equipe de futebol',
                notes: 'Remove uma equipe de futebol',
                tags: ['api'],
                validate: {
                    params: { id: Joi.string().required() },
                },
            },
        };
    }
    routes() {
        return [this.list(), this.create(), this.remove(), this.update()];
    }
}
exports.SoccerTeamRoute = SoccerTeamRoute;
//# sourceMappingURL=SoccerTeamRoute.js.map