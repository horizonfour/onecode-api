"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MusicStyleController_1 = require("./../controllers/MusicStyleController");
const Joi = require("joi");
class MusicStyleRoute {
    constructor() {
        this.musicStyleController = new MusicStyleController_1.MusicStyleController();
    }
    /*
     * @returns [Returns the Route object for HapiRouter to setup]
     * @memberOf RegionRoute
     */
    list() {
        return {
            path: '/music-styles',
            method: 'GET',
            handler: async (req, reply) => {
                return await this.musicStyleController.list(req, reply);
            },
            config: {
                auth: false,
                description: 'Lista todos os estilos musicais',
                notes: 'Lista todos os estilos musicais contidas no banco.',
                tags: ['api'],
            },
        };
    }
    /**
     * [Retorna a configuração da rota POST.]
     * @returns [Hapi.RouteConfiguration]
     * @memberOf RegionRoute
     */
    create() {
        return {
            path: '/music-styles',
            method: 'POST',
            handler: async (req, reply) => {
                return await this.musicStyleController.create(req, reply);
            },
            config: {
                auth: false,
                description: 'Cria um novo estilo musical',
                notes: 'Cria um novo estilo musical, para listagem.',
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
     * [Retorna a configuração da rota PUT.]
     * @returns [Hapi.RouteConfiguration]
     * @memberOf RegionRoute
     */
    update() {
        return {
            path: '/music-styles/:id',
            method: 'PUT',
            handler: async (req, reply) => {
                return await this.musicStyleController.update(req, reply);
            },
            config: {
                auth: false,
                description: 'Altera um estilo musical',
                notes: 'Altera um estilo musical, para listagem.',
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
     * [Retorna a configuração da rota DELETE.]
     * @returns [Hapi.RouteConfiguration]
     * @memberOf RegionRoute
     */
    remove() {
        return {
            path: '/music-styles/:id',
            method: 'DELETE',
            handler: async (req, reply) => {
                return await this.musicStyleController.remove(req, reply);
            },
            config: {
                auth: false,
                description: 'Remove um estilo musical',
                notes: 'Remove um estilo musical',
                tags: ['api'],
            },
        };
    }
    /**
     * [Retorna um array com as configurações das rotas desse objeto.]
     * @returns Hapi.RouteConfiguration[]
     */
    routes() {
        return [this.list(), this.create(), this.update(), this.remove()];
    }
}
exports.MusicStyleRoute = MusicStyleRoute;
//# sourceMappingURL=MusicStyleRoute.js.map