import express, { Request, Response } from "express";
import { Application } from "express";
import { engine } from "express-handlebars";
import { sign } from "jsonwebtoken";
import * as path from "path";
import Feedback from "./models/Feedback.model";
import RouteManager from "./routes/RouteManager";
import { signToken } from "./utils/jwt.utl";

class App {
  private PORT = process.env.PORT || 3000;
  private app: Application;
  constructor() {
    this.app = express();
    this.settings();
  }

  settings() {
    const publicDir = path.join(__dirname, "../public");
    const viewsDir = path.join(__dirname, "../views");
    this.app.use(express.static(publicDir /*{ maxAge: "1y" }*/));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.engine("hbs", engine({ extname: "hbs", defaultLayout: "main" }));
    this.app.set("view engine", "hbs");
    this.app.set("views", viewsDir);

    // Routes
    new RouteManager(this.app);

    this.app.listen(this.PORT, () =>
      console.log(`Server listening on PORT::${this.PORT}`)
    );
  }
}

const main = () => new App();
main();
