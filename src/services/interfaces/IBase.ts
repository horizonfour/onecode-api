import * as mongoose from 'mongoose';
interface IBase<T> {
  create(item: T): Promise<object>;

  update(fields: T, item: T, upsert: boolean): Promise<object>;

  list(item: {
    skip: Number;
    limit: Number;
    order: {
      field: String;
      order: String;
    };
  }): Promise<mongoose.Document[]>;

  findOne(query: T, lean: boolean): Promise<mongoose.Document | Object>;

  find(
    query: T,
    item: {
      skip: Number;
      limit: Number;
      order: { field: String; order: String };
    },
  ): Promise<mongoose.Document[]>;

  remove(id: string): Promise<object>;
}

export default IBase;
