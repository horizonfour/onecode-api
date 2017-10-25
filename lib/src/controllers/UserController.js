"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const Boom = require("boom");
const UserService_1 = require("../services/UserService");
class UserController {
    constructor() {
        this.query = {
            skip: 0,
            limit: 100,
            order: {
                field: '',
                order: '',
            },
        };
        this._userService = new UserService_1.UserService();
    }
    async list(request, reply) {
        try {
            this.query = request.payload;
            const user = await this._userService.list(this.query);
            return reply(user);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async create(request, reply) {
        try {
            const user = request.payload;
            const newUser = await this._userService.signUp(user);
            return reply(newUser);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async update(request, reply) {
        try {
            const user = request.payload.user;
            const newUser = request.payload.fields;
            const updatedUser = await this._userService.update(newUser, user);
            return reply(updatedUser);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async signIn(request, reply) {
        try {
            const user = request.payload.user;
            const updatedUser = await this._userService.signIn(user);
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
            const user = await this._userService.remove(id);
            return reply(user);
        }
        catch (e) {
            console.log(e);
            return reply(Boom.badImplementation(e));
        }
    }
    async generateToken(request, reply) {
        const { id } = request.params;
        const user = this._userService.findOne({ _id: id }, true);
        return reply(await jwt.sign({ role: user }, 'Horizon Four'));
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map