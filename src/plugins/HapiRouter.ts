const hapiRouter = require('hapi-router');

export class HapiRouter {
  static plugin() {
    return {
      register: hapiRouter,
      options: {
        routes: 'lib/src/routes/*Route.js',
      },
    };
  }
}
