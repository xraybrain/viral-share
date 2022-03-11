import { Application, Request, Response } from "express";

export default class AppRoute {
  constructor(private app: Application) {
    this.routes();
  }
  routes() {
    this.app.get("/", (req: Request, res: Response) =>
      res.render("index", { title: "Viral Share" })
    );

    this.app.get("/client", (req: Request, res: Response) =>
      res.render("client", { title: "Viral Share | Client" })
    );
  }
}
