"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const request = require('hapi-test-request');
const app_1 = require("./../app");
const UserService_1 = require("../src/services/UserService");
let server;
let id;
const MOCK_USER = {
    id: '',
    name: 'Test User',
    password: '123',
};
ava_1.test.before(async () => {
    const item = await app_1.default;
    server = request(item);
});
ava_1.test.before(async () => {
    const service = new UserService_1.UserService();
    id = await service.create(MOCK_USER);
});
ava_1.test.after(async () => {
    const service = new UserService_1.UserService();
    await service.remove(id._id.toString());
});
ava_1.test('with valid params', async (t) => { });
ava_1.test('GET /users', async (t) => {
    const req = {
        method: 'GET',
        url: '/users',
    };
    const res = await server.call(req);
    t.true(JSON.parse(res.payload).length >= 0);
});
ava_1.test('POST /users/login', async (t) => {
    const req = {
        method: 'POST',
        url: '/users/login',
        payload: MOCK_USER,
    };
    const res = await server.call(req);
    t.deepEqual(res.statusCode, 200);
});
ava_1.test('DELETE /users', async (t) => {
    const req = {
        method: 'GET',
        url: `/users/${id}`,
    };
    const res = await server.call(req);
    t.true(JSON.parse(res.payload).length >= 0);
});
//# sourceMappingURL=UserRouterTest.js.map