import express, { Request, Response } from "express";
import { Application } from "express";
import { engine } from "express-handlebars";
import * as path from "path";

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
    this.app.engine("hbs", engine({ extname: "hbs", defaultLayout: "main" }));
    this.app.set("view engine", "hbs");
    this.app.set("views", viewsDir);

    // Routes
    this.app.get("/", (req: Request, res: Response) =>
      res.render("index", { title: "Viral Share" })
    );
    this.app.listen(this.PORT, () =>
      console.log(`Server listening on PORT::${this.PORT}`)
    );
  }
}

const main = () => new App();
main();
