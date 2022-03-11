import { Application, Request, Response } from "express";
import Feedback from "../models/Feedback.model";
import { signToken } from "../utils/jwt.utl";
import Validators from "../utils/validator.util";

export default class ClientRoute {
  constructor(private app: Application) {
    this.routes();
  }

  routes() {
    this.app.post("/api/v1/generate/token", (req: Request, res: Response) => {
      const { domain } = req.body;
      let feedback: Feedback;
      if (Validators.isDomain(domain) || domain === "localhost:3000") {
        const token = signToken({ domain });
        feedback = new Feedback(true, "success");
        feedback.result = token;
      } else {
        feedback = new Feedback(false, "the domain provided is invalid");
      }
      res.json(feedback);
    });
  }
}
