"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReligionController_1 = require("./../controllers/ReligionController");
const Joi = require("joi");
class ReligionRoute {
    constructor() {
        this.religionController = new ReligionController_1.ReligionController();
    }
    /*
     * @returns [Returns the Route object for HapiRouter to setup]
     * @memberOf HelloWorldRoute
     */
    list() {
        return {
            path: '/religions',
            method: 'GET',
            config: {
                handler: async (req, reply) => {
                    return await this.religionController.list(req, reply);
                },
                auth: false,
                description: 'Listar todas as religiões',
                notes: 'Opcional o parametro de paginação',
                tags: ['api', 'religions'],
            },
        };
    }
    create() {
        return {
            path: '/religions',
            method: 'POST',
            config: {
                handler: async (req, reply) => {
                    return await this.religionController.create(req, reply);
                },
                auth: false,
                description: 'Criar uma nova Religião',
                notes: 'Criar uma nova Religião',
                tags: ['api', 'religions'],
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
            path: '/religions/{id}',
            method: 'PUT',
            config: {
                handler: async (req, reply) => {
                    return await this.religionController.update(req, reply);
                },
                auth: false,
                description: 'Altera uma religião',
                notes: 'Altera uma religião',
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
            path: '/religions/{id}',
            method: 'DELETE',
            config: {
                handler: async (req, reply) => {
                    return await this.religionController.remove(req, reply);
                },
                auth: false,
                description: 'Remove a religião',
                notes: 'Remove uma religião',
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
exports.ReligionRoute = ReligionRoute;
//# sourceMappingURL=ReligionRoute.js.map