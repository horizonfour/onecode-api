import * as Hapi from 'hapi';
const inert = require('inert'); // Usado para exposição de arquivos estáticos.
const vision = require('vision'); // Usado para administração de template engines
const hapiJwt = require('hapi-auth-jwt2');
const hapiSwagger = require('hapi-swagger');

// // Rotas
import { UserRoute } from './src/routes/UserRoute';
// import { ReligionRoute } from './src/routes/ReligionRoute';
import IRoute from './src/routes/interfaces/IRoute';
import { TeamsRoute } from './src/routes/TeamsRoute';

// tslint:disable-next-line:ter-arrow-parens
// Registrando todas as rotas!
const routesConfig = [UserRoute, TeamsRoute]
  .map(i => new i().routes())
  .reduce((prev, next) => prev.concat(next), []);

const validate = (decoded: any, request: any, callback: any) => {
  if (decoded) return callback(null, true);
  return callback(null, false);
};

let server: Hapi.Server;

async function startApi() {
  try {
    // Instancia o HapiJS
    server = new Hapi.Server();
    await server.connection({ port: 3000 });

    await server.register([
      inert,
      vision,
      {
        register: hapiSwagger,
        options: {
          info: { title: 'O Conversador API', version: '0.1' },
        },
      },
      hapiJwt,
    ]);

    await server.route(routesConfig);

    // Autenticação JWT
    await server.auth.strategy('jwt', 'jwt', {
      key: process.env.JWT_SECRET,
      validateFunc: validate,
      verifyOptions: { algorithms: ['HS256'] },
    });

    // server.auth.default('jwt');

    await server.start();

    const uri = server.info ? server.info.uri : 0;

    console.info(`SERVER RUNNING: ${uri}`);
    return server;
  } catch (error) {
    console.log(error);
    console.error(`Falha na inicialização da API: ${error}`);
  }
}

// Bootstrap da API
export default startApi;
