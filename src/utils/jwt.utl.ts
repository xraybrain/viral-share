import { sign } from "jsonwebtoken";

const ISSUER = "PlotterWave";
const SECRET = "ashsjhdsdkiewueiwiuewe7832783723wyudwe";
const AUDIENCE = "Viral Client";
export const signToken = (payload: any) => {
  return sign(payload, SECRET, { issuer: ISSUER, audience: AUDIENCE });
};
