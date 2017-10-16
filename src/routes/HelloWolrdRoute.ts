import * as HelloController from './../controllers/HelloWorldController';

export default [
  {
    path: '/helloWorld',
    method: 'GET',
    handler: HelloController.helloWorld(request, reply),
  },
];
