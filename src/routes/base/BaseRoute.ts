import { UserRoute } from '../UserRoute';
import * as Hapi from 'hapi';
export class BaseRoute {
  static routes(): Hapi.RouteConfiguration[] {
    return [new UserRoute().routes()].reduce((prev, next) => prev.concat(next));
  }
}
