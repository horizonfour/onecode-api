import * as bcrypt from 'bcrypt';
import Base from './base/Base';
import { User } from '../entities/User';
import UserSchema from '../db/schemas/UserSchema';

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
    const userDb = (await this.findOne(user)) as User;

    if (!userDb) {
      throw new Error('Usuário não encontrado');
    }

    if (this.validateHash(user, userDb.password.toString())) {
      return userDb;
    }

    throw new Error('Usuário não encontrado.');
  }

  signUp(user: User) {
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
