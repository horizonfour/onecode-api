"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = require("hapi");
const HapiRouter_1 = require("./src/plugins/HapiRouter"); // Plugin para importar as rotas.
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
        // Autenticação JWT
        await server.auth.strategy('jwt', 'jwt', {
            key: process.env.JWT_SECRET,
            validateFunc: validate,
            verifyOptions: { algorithms: ['HS256'] },
        });
        // server.auth.default('jwt');
        await server.register(HapiRouter_1.HapiRouter.plugin());
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