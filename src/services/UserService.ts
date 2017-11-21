import * as bcrypt from 'bcrypt';
import Base from './base/Base';
import { User } from '../entities/User';
import UserSchema from '../db/schemas/UserSchema';
// const JWT = require('jsonwebtoken');
import * as Jwt from 'jsonwebtoken';

export class UserService extends Base<User> {
  constructor() {
    super(UserSchema);
  }

  generateHash(password: String) {
    return bcrypt.hash(password, 10);
  }

  async validateHash(user: User, hash: string) {
    return await bcrypt.compare(user.password, hash);
  }

  async signIn(user: User) {
    const { name } = user;
    const userDb = (await this.findOne({ name })) as User;
    if (!userDb) {
      throw new Error('Usuário não encontrado');
    }

    const validHash = await this.validateHash(user, userDb.password);
    if (!validHash) throw new Error('Usuário ou senha incorretos');

    return Jwt.sign(user, process.env.JWT_SECRET || '');
  }

  async create(user: User): Promise<object> {
    user.password = await this.generateHash(user.password);

    const existentUser = await this.findOne({ name: user.name });
    if (existentUser) throw new Error('Usuário existente!');

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
