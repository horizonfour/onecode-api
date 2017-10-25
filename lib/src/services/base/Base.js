"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(database) {
        this._database = database;
    }
    async create(item) {
        const result = await this._database.create(item);
        return { status: 'created', id: result._id.toString() };
    }
    async update(fields, item, upsert = false) {
        const result = await this._database.update(fields, { upsert, $set: item });
        return result;
    }
    async findOne(query, lean = true) {
        const result = (await this._database.findOne(query).lean(lean));
        return result;
    }
    async list(item) {
        const result = await this._database.find({}, { __v: 0 }, item);
        return result;
    }
    async find(query, item) {
        const result = await this._database.find(item, {}, item);
        return result;
    }
    async remove(id) {
        const result = await this._database.remove({ _id: id });
        return { status: result };
    }
}
exports.default = Base;
//# sourceMappingURL=Base.js.map