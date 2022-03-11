import { Application } from "express";
import AppRoute from "./App.route";
import ClientRoute from "./Client.route";

export default class RouteManager {
  constructor(private app: Application) {
    this.register();
  }
  register() {
    new AppRoute(this.app);
    new ClientRoute(this.app);
  }
}
