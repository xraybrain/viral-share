"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_route_1 = __importDefault(require("./App.route"));
const Client_route_1 = __importDefault(require("./Client.route"));
class RouteManager {
    constructor(app) {
        this.app = app;
        this.register();
    }
    register() {
        new App_route_1.default(this.app);
        new Client_route_1.default(this.app);
    }
}
exports.default = RouteManager;
