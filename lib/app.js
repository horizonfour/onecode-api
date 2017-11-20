"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = require("hapi");
const BaseRoute_1 = require("./src/routes/base/BaseRoute");
const inert = require('inert'); // Usado para exposição de arquivos estáticos.
const vision = require('vision'); // Usado para administração de template engines
const hapiJwt = require('hapi-auth-jwt2');
const hapiSwagger = require('hapi-swagger');
const validate = (decoded, request, callback) => {
    if (decoded)
        return callback(null, true);
    return callback(null, false);
};
async function startApi() {
    try {
        // Instancia o HapiJS
        const server = new Hapi.Server();
        await server.connection({ port: process.env.PORT || 3000 });
        // register plugins
        await server.register([
            inert,
            vision,
            {
                register: hapiSwagger,
                options: {
                    info: { title: 'Nome do Projeto', version: '0.1' },
                },
            },
            hapiJwt,
        ]);
        // Autenticação JWT
        await server.auth.strategy('jwt', 'jwt', {
            key: process.env.JWT_SECRET,
            validateFunc: validate,
            verifyOptions: { algorithms: ['HS256'] },
        });
        await server.route(BaseRoute_1.BaseRoute.routes());
        await server.start();
        const uri = server.info ? server.info.uri : 0;
        console.info(`SERVIDOR EXECUTANDO: ${uri}`);
        return server;
    }
    catch (error) {
        console.error(`Falha na inicialização da API: ${error}`);
    }
}
exports.default = startApi;
//# sourceMappingURL=app.js.map