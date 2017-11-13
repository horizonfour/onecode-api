"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserHandler_1 = require("./../handlers/UserHandler");
const Joi = require("joi");
class UserRoute {
    constructor() {
        this.userHandler = new UserHandler_1.UserHandler();
    }
    /*
     * @returns [Returns the Route object for HapiRouter to setup]
     * @memberOf HelloWorldRoute
     */
    list() {
        return {
            path: '/users',
            method: 'GET',
            config: {
                handler: async (request, reply) => {
                    return await this.userHandler.list(request, reply);
                },
                auth: false,
                description: 'Lista todos os usuários',
                notes: 'Lista todos os usuário registrados, Coordenadores ou não',
                tags: ['api'],
            },
        };
    }
    /**
     * Retorna a configuração para a rota POST /user
     * @returns Hapi.RouteConfiguration
     */
    login() {
        return {
            path: '/users/login',
            method: 'POST',
            config: {
                handler: async (request, reply) => {
                    return await this.userHandler.signIn(request, reply);
                },
                auth: false,
                description: 'Ativa a sessão de um usuário',
                notes: 'Ativa a sessão de um usuário, para futuramente devolver um token de acesso.',
                tags: ['api'],
                validate: {
                    payload: {
                        name: Joi.string(),
                        password: Joi.string()
                            .min(6)
                            .max(12),
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
            path: '/users/{id}',
            method: 'DELETE',
            handler: async (request, reply) => {
                return await this.userHandler.remove(request, reply);
            },
            config: {
                auth: false,
                description: 'Remove um usuário',
                notes: 'Remove um usuário',
                tags: ['api'],
            },
        };
    }
    /**
     * [Retorna a configuração da rota DELETE.]
     * @returns [Hapi.RouteConfiguration]
     * @memberOf RegionRoute
     */
    update() {
        return {
            path: '/users/{id}',
            method: 'PUT',
            handler: async (request, reply) => {
                return await this.userHandler.update(request, reply);
            },
            config: {
                auth: false,
                description: 'Altera um usuário',
                notes: 'Altera um usuário',
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
            path: '/users',
            method: 'POST',
            handler: async (request, reply) => {
                return await this.userHandler.create(request, reply);
            },
            config: {
                auth: false,
                description: 'Realiza o cadastro de usuário',
                notes: 'Cria um usuário, gerando a hash da senha dele.',
                tags: ['api'],
                validate: {
                    payload: {
                        name: Joi.string().required(),
                        password: Joi.string()
                            .required()
                            .min(6)
                            .max(12),
                    },
                },
            },
        };
    }
    /**
     * Retorna um array com todas as configurações de rotas desse objeto.
     * @returns Hapi.RouteConfiguration[]
     */
    routes() {
        return [];
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=UserRoute.js.map