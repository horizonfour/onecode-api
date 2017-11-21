import { TestContext, test } from 'ava';
import * as assert from 'assert';
const request = require('hapi-test-request');

import app from './../app';
import IRoute from '../src/routes/interfaces/IRoute';
import * as Hapi from 'hapi';
import { User } from '../src/entities/User';
import { UserService } from '../src/services/UserService';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

if (process.env.ENVIRONMENT !== 'PROD') {
  dotenv.config({ path: './config/.env.dev' });
} else {
  dotenv.config({ path: './config/.env.prod' });
}

let server: Hapi.Server;
let id: string;
const service = new UserService();

const MOCK_USER = <User>{
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

test.before(async () => {
  const item = await app();
  server = request(item);
});

test.before(async () => {
  let result: any = await service.findOne({ name: MOCK_USER.name });
  if (result) {
    id = result._id;
    return;
  }

  result = await service.create(MOCK_USER);
  id = result.id;
});

test('GET /users/login - deve realizar login e obter token', async (
  t: TestContext,
) => {
  const req: Object = {
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

test('GET /users - listar usuarios', async (t: TestContext) => {
  const req: Object = {
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

test('GET /users/{id} - obter um usuario', async (t: TestContext) => {
  const req: Object = {
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

test('POST /users - cadastrar usuario', async (t: TestContext) => {
  const req: Object = {
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

test.after('PUT /users/${id} - Atualizar usuario', async (t: TestContext) => {
  const req: Object = {
    method: 'PUT',
    url: `/users/${id}`,
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

test.after('DELETE /users/${id} - Remover usuarios', async (t: TestContext) => {
  const req: Object = {
    method: 'DELETE',
    url: `/users/${id}`,
    headers: {
      Authorization: `${MOCKED_TOKEN}`,
    },
  };
  const res = await server.call(req);
  t.true(res.result.status.result.ok === 1);
});

test.after('Remove mocked data from db', async (t: TestContext) => {
  const item: any = await service.findOne({ name: MOCK_INSERT.name });
  await service.remove(item._id);
});
