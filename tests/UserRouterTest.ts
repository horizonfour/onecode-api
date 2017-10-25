import { TestContext, test } from 'ava';
import * as assert from 'assert';
const request = require('hapi-test-request');

import app from './../app';
import IRoute from '../src/routes/interfaces/IRoute';
import * as Hapi from 'hapi';
import { User } from '../src/entities/User';
import { UserService } from '../src/services/UserService';
import * as mongoose from 'mongoose';

let server: Hapi.Server;
let id: any;

const MOCK_USER = <User>{
  id: '',
  name: 'Test User',
  password: '123',
};

test.before(async () => {
  const item = await app;
  server = request(item);
});

test.before(async () => {
  const service = new UserService();
  id = await service.create(MOCK_USER);
});

test.after(async () => {
  const service = new UserService();
  await service.remove(id._id.toString());
});

test('with valid params', async (t: TestContext) => {});

test('GET /users', async (t: TestContext) => {
  const req: Object = {
    method: 'GET',
    url: '/users',
  };

  const res = await server.call(req);
  t.true(JSON.parse(res.payload).length >= 0);
});

test('POST /users/login', async (t: TestContext) => {
  const req: Object = {
    method: 'POST',
    url: '/users/login',
    payload: MOCK_USER,
  };
  const res = await server.call(req);
  t.deepEqual(res.statusCode, 200);
});

test('DELETE /users', async (t: TestContext) => {
  const req: Object = {
    method: 'GET',
    url: `/users/${id}`,
  };

  const res = await server.call(req);
  t.true(JSON.parse(res.payload).length >= 0);
});
