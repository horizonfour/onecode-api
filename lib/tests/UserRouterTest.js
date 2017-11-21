"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const request = require('hapi-test-request');
const app_1 = require("./../app");
const UserService_1 = require("../src/services/UserService");
const dotenv = require("dotenv");
if (process.env.ENVIRONMENT !== 'PROD') {
    dotenv.config({ path: './config/.env.dev' });
}
else {
    dotenv.config({ path: './config/.env.prod' });
}
let server;
let id;
const service = new UserService_1.UserService();
const MOCK_USER = {
    id: undefined,
    name: `teste4@test.com`,
    password: '1234565',
};
const MOCK_INSERT = {
    name: `${new Date().getTime()}teste4@test.com`,
    password: '123123',
};
const MOCKED_TOKEN = 
// tslint:disable-next-line:max-line-length
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXJpY2sgV2VuZGVsIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1MTEyMjA2ODl9.CaofBWm56rjM7Pe11-OHCJu0PvK7AJZ2AkZbRFTQ7mk';
ava_1.test.before(async () => {
    const item = await app_1.default();
    server = request(item);
});
ava_1.test.before(async () => {
    let result = await service.findOne({ name: MOCK_USER.name });
    if (result) {
        id = result._id;
        return;
    }
    result = await service.create(MOCK_USER);
    id = result.id;
});
ava_1.test('GET /users/login - deve realizar login e obter token', async (t) => {
    const req = {
        method: 'POST',
        url: '/users/login',
        payload: JSON.stringify({
            name: MOCK_USER.name,
            password: MOCK_USER.password,
        }),
    };
    const res = await server.call(req);
    t.true(res.result.length >= 160);
});
ava_1.test('GET /users - listar usuarios', async (t) => {
    const req = {
        method: 'GET',
        url: '/users',
        headers: {
            Authorization: `${MOCKED_TOKEN}`,
        },
    };
    const result = await server.call(req);
    const payload = JSON.parse(result.payload);
    t.true(payload.length >= 0);
});
ava_1.test('GET /users/{id} - obter um usuario', async (t) => {
    const req = {
        method: 'GET',
        url: `/users/${id}`,
        headers: {
            Authorization: `${MOCKED_TOKEN}`,
        },
    };
    const result = await server.call(req);
    const { name } = JSON.parse(result.payload);
    t.deepEqual(name, MOCK_USER.name);
});
ava_1.test('POST /users - cadastrar usuario', async (t) => {
    const req = {
        method: 'POST',
        url: '/users',
        headers: {
            Authorization: `${MOCKED_TOKEN}`,
        },
        payload: MOCK_INSERT,
    };
    const result = await server.call(req);
    const payload = JSON.parse(result.payload);
    t.true(payload.status);
});
ava_1.test('PUT /users/${id} - Atualizar usuario', async (t) => {
    const user = await service.create({
        name: 'Test2' + new Date().getTime(),
        password: '123456',
    });
    const req = {
        method: 'PUT',
        url: `/users/${user._id}`,
        headers: {
            Authorization: `${MOCKED_TOKEN}`,
        },
        payload: {
            name: `${new Date().getTime()}updated@test.com`,
        },
    };
    const result = await server.call(req);
    const payload = JSON.parse(result.payload);
    t.true(payload.ok === 1);
});
ava_1.test.after('DELETE /users/${id} - Remover usuarios', async (t) => {
    const user = await service.create({
        name: 'Test2' + new Date().getTime(),
        password: '123456',
    });
    const req = {
        method: 'DELETE',
        url: `/users/${user._id}`,
        headers: {
            Authorization: `${MOCKED_TOKEN}`,
        },
    };
    const res = await server.call(req);
    t.true(res.result.status.result.ok === 1);
});
// test.after('Remove mocked data from db', async (t: TestContext) => {
//   const item: any = await service.findOne({ name: MOCK_INSERT.name });
//   await service.remove(item._id);
// });
//# sourceMappingURL=UserRouterTest.js.map