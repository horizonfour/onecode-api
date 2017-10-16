const hapi = require('hapi');
// import Inert from 'inert'; // Usado para exposição de arquivos estáticos.
const vision = require('vision'); // Usado para administração de template engines

import * as HapiSwagger from './src/middlewares/plugins/hapiSwagger.plugin';

// import Joi from 'joi'; // Usado para validação de JSONs.

async function startApi() {
  try {
    // Instancia o HapiJS
    const server = new hapi.Server();
    await server.connection({ port: global.process.env.APP_PORT });
    await server.register(vision);
    await server.start();

    console.info(`SERVER RUNNING: ${server.info.uri}`);
  } catch (error) {
    console.error(`Falha na inicialização da API: ${error}`);
  }
}

// Bootstrap da API
export default startApi();
