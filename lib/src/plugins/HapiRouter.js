"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hapiRouter = require('hapi-router');
class HapiRouter {
    static plugin() {
        return {
            register: hapiRouter,
            options: {
                routes: 'lib/src/routes/*Route.js',
            },
        };
    }
}
exports.HapiRouter = HapiRouter;
//# sourceMappingURL=HapiRouter.js.map