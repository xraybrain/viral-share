"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const path = __importStar(require("path"));
const RouteManager_1 = __importDefault(require("./routes/RouteManager"));
class App {
    constructor() {
        this.PORT = process.env.PORT || 3000;
        this.app = (0, express_1.default)();
        this.settings();
    }
    settings() {
        const publicDir = path.join(__dirname, "../public");
        const viewsDir = path.join(__dirname, "../views");
        this.app.use(express_1.default.static(publicDir /*{ maxAge: "1y" }*/));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.engine("hbs", (0, express_handlebars_1.engine)({ extname: "hbs", defaultLayout: "main" }));
        this.app.set("view engine", "hbs");
        this.app.set("views", viewsDir);
        // Routes
        new RouteManager_1.default(this.app);
        this.app.listen(this.PORT, () => console.log(`Server listening on PORT::${this.PORT}`));
    }
}
const main = () => new App();
main();
