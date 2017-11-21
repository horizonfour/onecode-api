import * as Hapi from 'hapi';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import * as Boom from 'boom';
import { UserService } from '../services/UserService';
import { User } from '../entities/User';

export class UserHandler {
  // tslint:disable-next-line:variable-name
  private _userService: UserService;
  private query = {
    skip: 0,
    limit: 100,
    order: {
      field: '',
      order: '',
    },
  };

  constructor() {
    this._userService = new UserService();
  }

  public async list(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const query = request.payload;
      const user = await this._userService.list(query, this.query);
      return reply(user);
    } catch (e) {
      console.log(e);
      return reply(e.message).code(500);
    }
  }

  public async findOne(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const { id } = request.params;
      const user = await this._userService.findOne({ _id: id });
      return reply(user);
    } catch (e) {
      console.log(e);
      return reply(e.message).code(500);
    }
  }
  public async create(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const user = request.payload;
      const newUser = await this._userService.create(user);
      return reply(newUser);
    } catch (e) {
      console.log(e);
      return reply(e.message).code(500);
    }
  }

  public async update(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const { id } = request.params;
      const item = request.payload;
      const updatedUser = await this._userService.update({ _id: id }, item);
      return reply(updatedUser);
    } catch (e) {
      console.log(e);
      return reply(e.message).code(500);
    }
  }

  public async signIn(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const user = request.payload;
      const updatedUser = await this._userService.signIn(user);
      return reply(updatedUser);
    } catch (e) {
      console.log(e);
      return reply(e.message).code(500);
    }
  }

  public async remove(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const { id } = request.params;
      const user = await this._userService.remove(id);
      return reply(user);
    } catch (e) {
      console.log(e);
      return reply(e.message).code(500);
    }
  }
}
