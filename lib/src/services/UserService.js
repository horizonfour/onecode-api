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
        return bcrypt.hash(password, 10);
    }
    async validateHash(user, hash) {
        return await bcrypt.compare(user.password, hash);
    }
    async signIn(user) {
        const { name } = user;
        const userDb = (await this.findOne({ name }));
        if (!userDb) {
            throw new Error('Usuário não encontrado');
        }
        const validHash = await this.validateHash(user, userDb.password);
        if (!validHash)
            throw new Error('Usuário ou senha incorretos');
        return Jwt.sign(user, process.env.JWT_SECRET || '');
    }
    async create(user) {
        user.password = await this.generateHash(user.password);
        const existentUser = await this.findOne({ name: user.name });
        if (existentUser)
            throw new Error('Usuário existente!');
        const created = await super.create(user);
        if (created) {
            return {
                status: true,
                _id: created.id,
            };
        }
        return {
            status: false,
        };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map