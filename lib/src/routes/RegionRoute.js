"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegionController_1 = require("./../controllers/RegionController");
const Joi = require("joi");
class RegionRoute {
    constructor() {
        this.regionController = new RegionController_1.RegionController();
    }
    /*
     * @returns [Returns the Route object for HapiRouter to setup]
     * @memberOf RegionRoute
     */
    list() {
        return {
            path: '/regions',
            method: 'GET',
            handler: async (req, reply) => {
                return await this.regionController.list(req, reply);
            },
            config: {
                auth: false,
                description: 'Lista todas as regiões',
                notes: 'Lista todas as regiões contidas no banco.',
                tags: ['api'],
            },
        };
    }
    /**
     * [Retorna a configuração da rota POST /region.]
     * @returns [Hapi.RouteConfiguration]
     * @memberOf RegionRoute
     */
    create() {
        return {
            path: '/regions',
            method: 'POST',
            handler: async (req, reply) => {
                return await this.regionController.create(req, reply);
            },
            config: {
                auth: false,
                description: 'Cria uma nova região',
                notes: 'Cria uma nova região, para listagem.',
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
     * [Retorna a configuração da rota POST /region.]
     * @returns [Hapi.RouteConfiguration]
     * @memberOf RegionRoute
     */
    update() {
        return {
            path: '/regions/{id}',
            method: 'PUT',
            handler: async (req, reply) => {
                return await this.regionController.update(req, reply);
            },
            config: {
                auth: false,
                description: 'Altera uma região',
                notes: 'Altera uma região',
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
     * [Retorna a configuração da rota POST /region.]
     * @returns [Hapi.RouteConfiguration]
     * @memberOf RegionRoute
     */
    remove() {
        return {
            path: '/regions/{id}',
            method: 'DELETE',
            handler: async (req, reply) => {
                return await this.regionController.remove(req, reply);
            },
            config: {
                auth: false,
                description: 'Remove a região',
                notes: 'Altera uma região',
                tags: ['api'],
                validate: {
                    params: { id: Joi.string().required() },
                },
            },
        };
    }
    /**
     * [Retorna um array com as configurações das rotas desse objeto.]
     * @returns Hapi.RouteConfiguration[]
     */
    routes() {
        return [this.list(), this.create(), this.remove(), this.update()];
    }
}
exports.RegionRoute = RegionRoute;
//# sourceMappingURL=RegionRoute.js.map