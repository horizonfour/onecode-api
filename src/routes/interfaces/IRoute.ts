import * as Hapi from 'hapi';
interface IRoute {
  /**
   * [A function that returns an Array of route objects to use.]
   * @returns Function
   * @memberOf IRoute
   */
  routes(): Hapi.RouteConfiguration[];
}
export default IRoute;
