import HelloWorldController from './../controllers/HelloWorldController';
import IRoute from './interfaces/IRoute';

class HelloWorldRoute implements IRoute {
  private helloController: HelloWorldController;

  constructor() {
    this.helloController = new HelloWorldController();
  }
  /**
   * @returns [Returns the Route object for HapiRouter to setup]
   * @memberOf HelloWorldRoute
   */
  private getHelloWord() {
    return [
      {
        path: '/helloWorld',
        method: 'GET',
        handler: this.helloController.helloWorld,
      },
    ];
  }

  public routes() {
    return [this.getHelloWord];
  }
}

export default HelloWorldRoute;
