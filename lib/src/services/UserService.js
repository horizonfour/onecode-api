"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const Base_1 = require("./base/Base");
const UserSchema_1 = require("../db/schemas/UserSchema");
// const JWT = require('jsonwebtoken');
const Jwt = require("jsonwebtoken");
class UserService extends Base_1.default {
    constructor() {
        super(UserSchema_1.default);
    }
    generateHash(password) {
        return bcrypt.hashSync(password, 10);
    }
    validateHash(user, hash) {
        return bcrypt.compareSync(user.password, hash);
    }
    async signIn(user) {
        const { name } = user;
        const userDb = (await this.findOne({ name }));
        console.log('user', user);
        if (!userDb) {
            throw new Error('Usuário não encontrado');
        }
        const validHash = this.validateHash(user, userDb.password.toString());
        if (!validHash)
            throw new Error('Usuário ou senha incorretos');
        return Jwt.sign(user, process.env.JWT_SECRET || '');
    }
    async signUp(user) {
        console.log('user', user);
        user.password = this.generateHash(user.password);
        const created = await this.create(user);
        if (created) {
            return {
                status: true,
                _id: created,
            };
        }
        return {
            status: false,
        };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map