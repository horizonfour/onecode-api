import * as Hapi from 'hapi';

class HelloWorldController {
  public async helloWorld(
    request: Hapi.Request,
    reply: Hapi.ReplyNoContinue,
  ): Promise<Hapi.ReplyValue> {
    return await Promise.resolve(reply('HelloWorld'));
  }
}

export default new HelloWorldController();
