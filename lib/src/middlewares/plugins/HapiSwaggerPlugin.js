"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inert = require('inert');
const vision = require('vision');
const hapiSwagger = require('hapi-swagger');
class Swagger {
    static info() {
        return {
            name: 'Swagger Documentation',
            version: '1.0.0',
        };
    }
    static register(server) {
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
exports.default = Swagger;
Object.seal(Swagger);
//# sourceMappingURL=HapiSwaggerPlugin.js.map