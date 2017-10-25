import * as Hapi from 'hapi';
import * as mongoose from 'mongoose';
import * as Boom from 'boom';
import { TeamsService } from '../services/TeamsService';

export class TeamsController {
  // tslint:disable-next-line:variable-name
  private _teamsService: TeamsService;
  private query = {
    skip: 0,
    limit: 100,
    order: {
      field: '',
      order: '',
    },
  };

  constructor() {
    this._teamsService = new TeamsService();
  }

  public async list(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const team = await this._teamsService.list(this.query);

      return reply(team);
    } catch (e) {
      console.log(e);
      reply(Boom.badImplementation(e));
    }
  }

  public async create(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const team = request.payload;

      const newTeam = await this._teamsService.create(team);

      return reply(newTeam);
    } catch (e) {
      console.log(e);
      return reply(Boom.badImplementation(e));
    }
  }

  public async update(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const { id } = request.params;
      const { payload } = request;

      const updatedTeam = await this._teamsService.update({ _id: id }, payload);

      return reply(updatedTeam);
    } catch (e) {
      console.log(e);
      return reply(Boom.badImplementation(e));
    }
  }

  public async remove(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    try {
      const { id } = request.params;

      const updatedTeam = await this._teamsService.remove(id);

      return reply(updatedTeam);
    } catch (e) {
      console.log(e);
      return reply(Boom.badImplementation(e));
    }
  }
}
