import * as Hapi from 'hapi';
const inert = require('inert');
const vision = require('vision');
const hapiSwagger = require('hapi-swagger');

export default class Swagger {
  static info() {
    return {
      name: 'Swagger Documentation',
      version: '1.0.0',
    };
  }

  static register(server: Hapi.Server) {
    server.register([
      inert,
      vision,
      {
        register: hapiSwagger,
        options: {
          info: {
            title: 'Product Store Documentation',
            version: '1.0',
          },
          securityDefinitions: {
            jwt: {
              type: 'apiKey',
              name: 'Authorization',
              in: 'header',
            },
          },
          security: [{ jwt: [] }],
        },
      },
    ]);
  }
}
Object.seal(Swagger);
