import * as bcrypt from 'bcrypt';

class UserService {
  db: any;
  constructor() {
    this.db = null;
  }
  generateHash(password: String) {
    return bcrypt.hashSync(password, 10);
  }

  validateHash(user: any, hash: any) {
    return bcrypt.compareSync(user.password, hash.toString());
  }

  // Insere um usuário no banco
  postUser(user: any) {
    return this.db.create(user);
  }

  // Atualiza um usuário no banco
  putUser(user: any) {
    return this.db.update(user, { where: { id: user.id } });
  }

  // Retorna os usuários ativos no banco
  getUsers() {
    return this.db.findAll({
      where: { is_active: true },
      raw: true,
    });
  }

  async signIn(user: any) {
    const userFromBD = await this.db.findOne({
      where: { email: user.email, is_active: true },
    });

    if (!userFromBD) {
      return {
        error: true,
        status: 404,
        message: 'Usuário não foi encontrado',
      };
    }

    if (this.validateHash(user.password, userFromBD.password)) {
      return userFromBD;
    }
    return {
      error: true,
      status: 403,
      message: 'Usuário ou senha invalida',
    };
  }

  signUp(user: any) {
    const searchUser = user;
    searchUser.password = this.generateHash(searchUser.password);
    return this.db.create(searchUser);
  }

  // Inativa um usuário no banco
  async deleteUser(id: any) {
    const user = await this.db.findOne({ where: { id }, raw: true });
    if (!user) {
      return {
        error: true,
        status: 404,
        message: 'Identificador não encontrado',
      };
    }
    user.is_active = false;
    return this.putUser(user);
  }
}
