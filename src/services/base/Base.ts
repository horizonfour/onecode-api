import IBase from '../interfaces/IBase';
import * as mongoose from 'mongoose';

class Base<T> implements IBase<T> {
  // tslint:disable-next-line:variable-name
  public _database: mongoose.Model<mongoose.Document>;

  constructor(database: any) {
    this._database = database;
  }
  async create(item: T): Promise<object> {
    const result = await this._database.create(item);
    return { status: 'created', id: result._id.toString() };
  }

  async update(
    fields: T | {},
    item: T,
    upsert: boolean = false,
  ): Promise<object> {
    const result = await this._database.update(fields, { upsert, $set: item });
    return result;
  }
  async findOne(
    query: T | {},
    lean: boolean = true,
  ): Promise<mongoose.Document | Object> {
    const result = (await this._database.findOne(query).lean(lean)) as T;
    return result;
  }

  async list(item: {
    skip: Number;
    limit: Number;
    order: { field: String; order: String };
  }): Promise<mongoose.Document[]> {
    const result = await this._database.find({}, { __v: 0 }, item);
    return result;
  }

  async find(
    query: T | {},
    item: {
      skip: Number;
      limit: Number;
      order: { field: String; order: String } | {};
    },
  ): Promise<mongoose.Document[]> {
    const result = await this._database.find(item, {}, item);
    return result;
  }

  async remove(id: string): Promise<object> {
    const result = await this._database.remove({ _id: id });
    return { status: result };
  }
}
export default Base;
