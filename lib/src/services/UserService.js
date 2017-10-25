"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const Base_1 = require("./base/Base");
const UserSchema_1 = require("../db/schemas/UserSchema");
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
        const userDb = (await this.findOne(user));
        if (!userDb) {
            throw new Error('Usuário não encontrado');
        }
        if (this.validateHash(user, userDb.password.toString())) {
            return userDb;
        }
        throw new Error('Usuário não encontrado.');
    }
    signUp(user) {
        const searchUser = user;
        searchUser.password = this.generateHash(searchUser.password);
        const created = this.create(searchUser);
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