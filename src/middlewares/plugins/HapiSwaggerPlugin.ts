const hapiSwagger = require('hapi-swagger');

export default {
  register: hapiSwagger,
  options: {
    info: {
      title: '*Titulo da documentação aqui!*',
      version: '1.0.0',
    },
  },
};
