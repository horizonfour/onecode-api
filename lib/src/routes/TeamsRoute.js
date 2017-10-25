"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const TeamsController_1 = require("./../controllers/TeamsController");
const objectId = require('joi-objectid')(Joi);
class TeamsRoute {
    constructor() {
        this.teamsController = new TeamsController_1.TeamsController();
    }
    /*
     * @returns [Returns the Route object for HapiRouter to setup]
     * @memberOf HelloWorldRoute
     */
    list() {
        return {
            path: '/teams',
            method: 'GET',
            config: {
                handler: async (req, reply) => {
                    return await this.teamsController.list(req, reply);
                },
                auth: false,
                description: 'Listar todas as equipes',
                notes: 'Opcional o parametro de paginação',
                tags: ['api', 'teams'],
            },
        };
    }
    create() {
        return {
            path: '/teams',
            method: 'POST',
            config: {
                handler: async (req, reply) => {
                    return await this.teamsController.create(req, reply);
                },
                auth: false,
                description: 'Criar uma nova equipe',
                notes: 'Criar uma nova equipe',
                tags: ['api', 'teams'],
                validate: {
                    payload: {
                        name: Joi.string().required(),
                        description: Joi.string().required(),
                        coordenatorId: Joi.string().required(),
                        membersId: Joi.array().required(),
                        searchsId: Joi.array().required(),
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
            path: '/teams/{id}',
            method: 'PUT',
            config: {
                handler: async (req, reply) => {
                    return await this.teamsController.update(req, reply);
                },
                auth: false,
                description: 'Altera uma equipe',
                notes: 'Altera uma equipe',
                tags: ['api', 'teams'],
                validate: {
                    params: { id: objectId() },
                    payload: {
                        name: Joi.string(),
                        description: Joi.string(),
                        coordenatorId: Joi.string(),
                        membersId: Joi.array(),
                        searchId: Joi.array(),
                        meta: Joi.number(),
                        progress: Joi.number(),
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
            path: '/teams/{id}',
            method: 'DELETE',
            config: {
                handler: async (req, reply) => {
                    return await this.teamsController.remove(req, reply);
                },
                auth: false,
                description: 'Remove a equipe',
                notes: 'Remove uma equipe',
                tags: ['api'],
                validate: {
                    params: { id: objectId() },
                },
            },
        };
    }
    routes() {
        return [this.list(), this.create(), this.remove(), this.update()];
    }
}
exports.TeamsRoute = TeamsRoute;
//# sourceMappingURL=TeamsRoute.js.map