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
    return bcrypt.hashSync(password, 10);
  }

  validateHash(user: User, hash: string) {
    return bcrypt.compareSync(user.password, hash);
  }

  async signIn(user: User) {
    const { name } = user;
    const userDb = (await this.findOne({ name })) as User;
    console.log('user', user);
    if (!userDb) {
      throw new Error('Usuário não encontrado');
    }
    const validHash = this.validateHash(user, userDb.password.toString());
    if (!validHash) throw new Error('Usuário ou senha incorretos');

    return Jwt.sign(user, process.env.JWT_SECRET || '');
  }

  async signUp(user: User) {
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
