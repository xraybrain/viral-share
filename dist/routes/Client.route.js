"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Feedback_model_1 = __importDefault(require("../models/Feedback.model"));
const jwt_utl_1 = require("../utils/jwt.utl");
const validator_util_1 = __importDefault(require("../utils/validator.util"));
class ClientRoute {
    constructor(app) {
        this.app = app;
        this.routes();
    }
    routes() {
        this.app.post("/api/v1/generate/token", (req, res) => {
            const { domain } = req.body;
            let feedback;
            if (validator_util_1.default.isDomain(domain) || domain === "localhost:3000") {
                const token = (0, jwt_utl_1.signToken)({ domain });
                feedback = new Feedback_model_1.default(true, "success");
                feedback.result = token;
            }
            else {
                feedback = new Feedback_model_1.default(false, "the domain provided is invalid");
            }
            res.json(feedback);
        });
    }
}
exports.default = ClientRoute;
