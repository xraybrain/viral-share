"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppRoute {
    constructor(app) {
        this.app = app;
        this.routes();
    }
    routes() {
        this.app.get("/", (req, res) => res.render("index", { title: "Viral Share" }));
        this.app.get("/client", (req, res) => res.render("client", { title: "Viral Share | Client" }));
    }
}
exports.default = AppRoute;
