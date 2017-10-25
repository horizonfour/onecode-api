"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const app = require('./../app');
// import { ReligionRoute } from '../src/routes/ReligionRoute';
let server;
describe('SoccerTeam Routes', () => {
    let religonRoute;
    before(async () => {
        server = await app.default();
    });
    beforeEach(() => {
        religonRoute = new ReligionRoute();
    });
    describe('with valid params', async () => {
        it('GET /religion', async () => {
            const req = {
                method: 'GET',
                url: '/religion',
            };
            const res = await server.inject(req);
            assert.equal(res.statusCode, 200);
            return;
        });
    });
    return;
});
//# sourceMappingURL=SoccerTeamRoute.test.js.map