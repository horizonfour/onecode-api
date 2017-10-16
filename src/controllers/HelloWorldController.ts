import * as Hapi from 'hapi';
import UserModel from './../models/UserModel';
import * as mongoose from 'mongoose';

class HelloWorldController {
  private db: mongoose.Model<mongoose.Document>;

  constructor() {
    this.db = UserModel;
  }

  public async helloWorld(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    const user = await this.db.find({}).lean(true);
    return reply(user);
  }
}

export default HelloWorldController;
