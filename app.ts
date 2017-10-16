const hapi = require('hapi');
// import Inert from 'inert'; // Usado para exposição de arquivos estáticos.
const vision = require('vision'); // Usado para administração de template engines
const hapiJwt = require('hapi-auth-jwt2');

import * as HapiSwagger from './src/middlewares/plugins/HapiSwaggerPlugin';

// import Joi from 'joi'; // Usado para validação de JSONs.

const validate = (decoded: any, request: any, callback: any) => {
  if (decoded) return callback(null, true);
  return callback(null, false);
};

async function startApi() {
  try {
    // Instancia o HapiJS
    const server = new hapi.Server();

    await server.connection({ port: global.process.env.APP_PORT });

    await server.register(vision);

    await server.register(hapiJwt);

    server.auth.strategy('jwt', 'jwt', {
      key: process.env.JWT_SECRET,
      validateFunc: validate,
      verifyOptions: { algorithms: ['HS256'] },
    });

    server.auth.default('jwt');

    await server.start();

    console.info(`SERVER RUNNING: ${server.info.uri}`);
  } catch (error) {
    console.error(`Falha na inicialização da API: ${error}`);
  }
}

// Bootstrap da API
export default startApi();
