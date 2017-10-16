import HelloWorldController from './../controllers/HelloWorldController';
import IRoute from './interfaces/IRoute'

class HelloWorldRoute implements IRoute {
  private helloController: HelloWorldController;
  constructor() {
    this.helloController = new HelloWorldController();
  }
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

